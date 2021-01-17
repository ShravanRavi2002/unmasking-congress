from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.generic import View
from django.conf import settings

import os

#import nest_asyncio

import twint
import twint.storage.panda

from textblob import TextBlob

import time
import json
import copy
import pandas as pd
import csv
import plotly.express as px

from .models import Representative


def get_month_info(cur_month):
    if cur_month == 1:
        return '2020-01-01', '2020-01-31', 'January'
    elif cur_month == 2:
        return '2020-02-01', '2020-02-28', 'February'
    elif cur_month == 3:
        return '2020-03-01', '2020-03-31', 'March'
    elif cur_month == 4:
        return '2020-04-01', '2020-04-30', 'April'
    elif cur_month == 5:
        return '2020-05-01', '2020-05-31', 'May'
    elif cur_month == 6:
        return '2020-06-01', '2020-06-30', 'June'
    elif cur_month == 7:
        return '2020-07-01', '2020-07-31', 'July'
    elif cur_month == 8:
        return '2020-08-01', '2020-08-31', 'August'
    elif cur_month == 9:
        return '2020-09-01', '2020-09-30', 'September'
    elif cur_month == 10:
        return '2020-10-01', '2020-10-31', 'October'
    elif cur_month == 11:
        return '2020-11-01', '2020-11-30', 'November'
    elif cur_month == 12:
        return '2020-12-01', '2020-12-31', 'December'


def scrape():
    congress_views = {}

    representatives = Representative.objects.all()

    for x in range(3, 13):
        start, end, month = get_month_info(x)
        for member in representatives:
            congress_views[member.name] = {}
            c = twint.Config()
            c.Username = str(member.twitter_handle)
            c.Search = "Mask"
            c.Since = start
            c.Until = end
            c.Limit = 100
            c.Pandas = True
            c.Store_pandas = True
            c.Lang = 'en'
            c.Hide_output = True

            twint.run.Search(c)

            df = twint.storage.panda.Tweets_df
            if not df.empty:
                df['sentiment'] = df['tweet'].apply(lambda x: TextBlob(x).sentiment[0])
                df['subject'] = df['tweet'].apply(lambda x: TextBlob(x).sentiment[1])
                df['polarity'] = df['sentiment'].apply(lambda x: 1 if x >= 0 else -1)

                congress_views[member.name]['sentiment'] = df['sentiment'].mean()
                congress_views[member.name]['subjectivity'] = df['subject'].mean()
                congress_views[member.name]['polarity'] = 'pos' if df['polarity'].mean() > 0 else 'neg'
            else:
                congress_views[member.name]['sentiment'] = -2
                congress_views[member.name]['subjectivity'] = -2
                congress_views[member.name]['polarity'] = -2

            data = json.dumps({month: congress_views[member.name]})
            member.sentiments += data
            member.save()

    for representative in representatives:
        sentiments = '[' + representative.sentiments
        sentiments = sentiments.split('}}')
        sentiments = '}}, '.join(sentiments)
        sentiments = sentiments[:-2] + ']'
        representative.sentiments = sentiments
        representative.save()


def congress(request):
    # scrape()

    congress_month_sentiment = {}

    representatives = Representative.objects.all()

    month = request.GET.get('month')


    for representative in representatives:
        sentiment_json = json.loads(representative.sentiments)
        congress_month_sentiment[representative.name] = {
            'twitter_handle': representative.twitter_handle,
            'state': representative.state,
            'party': representative.party,
            'sentiment': sentiment_json[month]['sentiment'],
            'subjectivity': sentiment_json[month]['subjectivity'],
            'polarity': sentiment_json[month]['polarity'] if sentiment_json['December'][
                                                                      'polarity'] != -2 else 'no data'
        }

    congress_month_sentiment_json = json.dumps(congress_month_sentiment)

    return JsonResponse(congress_month_sentiment_json, safe=False)

class FrontendViewer(View):
    """
    Serves the compiled frontend entry point (only works if you have run `npm
    run build`).
    """
    def get(self, request):
        print("accessing index.html...")
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            print('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `npm run build` to test the production version.
                """,
                status=501,
            )