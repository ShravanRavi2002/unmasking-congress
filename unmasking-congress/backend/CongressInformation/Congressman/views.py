from django.shortcuts import render
from django.http import HttpResponse
import nest_asyncio

import twint
import twint.storage.panda

from textblob import TextBlob

import plotly.express as px

# Create your views here.
def scraper(request):
    # process information here

    # nest_asyncio.apply()

    c = twint.Config()
    c.Search = "@realDonaldTrump"
    c.Since = '2020-12-01'
    c.Until = '2020-12-31'
    c.Limit = 100
    c.Pandas = True
    c.Store_pandas = True
    c.Lang = 'en'
    c.Hide_output = True

    twint.run.Search(c)

    df = twint.storage.panda.Tweets_df

    df['sentiment'] = df['tweet'].apply(lambda x: TextBlob(x).sentiment[0])
    df['subject'] = df['tweet'].apply(lambda x: TextBlob(x).sentiment[1])
    df['polarity'] = df['sentiment'].apply(lambda x: 'pos' if x >= 0 else 'neg')

    fig = px.histogram(df[df['subject'] > 0.5], x='polarity', color='polarity')
    fig.show()

    print(df.sentiment)

    # twint.storage.panda.save("covid_tweets", df)

    return HttpResponse("Hello World")
