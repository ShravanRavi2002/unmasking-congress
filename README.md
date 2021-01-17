# Unmasking Congress
Our project for MLH's New Year New Hack 2020, updated during Snakes and Hackers 2020.


## About
Unmasking Congress is a web app designed to examine the trends in congressmembers' opinions on masks, based on their tweets from March through December of 2020.


## Instructions
There are two options for deploying this webapp.
You can either
1. Deploy a live frontend & live backend
2. Deploy a static frontend & live backend

To deploy a live frontend, navigate to the [unmasking-congress](unmasking-congress/) subdirectory and install the node requirements with `npm install`. Then, start the node server with `npm start`. For a static frontend, instead run `npm run build` to build a static application. 

To deploy the backend, navigate to the [unmasking-congress/backend](unmasking-congress/backend/) subdirectory and install the Python requirements from [requirements.txt](unmasking-congress/backend/requirements.txt). Then, navigate to [unmasking-congress/backend/CongressInformation](unmasking-congress/backend/CongressInformation/) & run the Django server using python by executing `manage.py` with the `runserver` parameter (i.e. `python3 manage.py runserver`).

If you opted to run live instances of both, you can view the web app at `localhost:3000`. Otherwise, you can navigate directly to the backend at `localhost:8000` and access the static website. 

After deploying the app, simply select a month on the timeline to populate the scatterplot with congressmembers' mask opinion data.


## Description
We created the backend Django database by first scraping congressmembers' tweets using Twint, filtering by tweets containing the word "mask", and then performing sentiment analysis by month. The database is composed of the polarity, subjectivity, and sentiment data toward masks for each congressmember. 
The ReactJS website displays a timeline (from [Material-UI](https://material-ui.com/components/steppers/)) for accessing tweet data and queries the Django backend to access the month's data selected on the timeline, then displays a scatterplot (from [Nivo](https://nivo.rocks/scatterplot/)) of each congressmember's twitter data. The frontend also displays COVID counts (using [react-countup](https://www.npmjs.com/package/react-countup)) for that month sourced from [the Covid Tracking Project API](https://covidtracking.com/data/api).


## Future Improvements
- Deploy the web app to [our website](http://unmaskingcongress.tech/)
- Add graphs of COVID-19 data for comparison
- Go to the congressmember's twitter when a user selects a data point
- Update/include congressional data for the 117th Congress
- Implement additional topic data (i.e. gun policies, abortion, etc.)
- Add additional social media platforms & fix broken handles for congressmembers


## Contributors
Made for the Winter Hacklympics hackathon by [Himanshu Biradar](https://github.com/himanshubir), [Shravan Ravi](https://github.com/shravanravi2002), and [Akshin Vemana](https://github.com/AkshinVemana).
