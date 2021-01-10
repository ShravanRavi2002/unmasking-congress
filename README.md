# new-year-new-hack-2020
Our project for New Year New Hack 2020, updated during Snakes and Hackers 2020.

## About
Unmasking Congress is a web app designed to examine the trends in congressmembers' opinions on masks, based on their tweets from March through December of 2020.

## How It Works
We scraped congressmembers' tweets using Twint, where we filtered by tweets containing the word "mask", and then performed sentiment analysis for each congressmember by month.
Then, we built a Django & ReactJS app to make this data accessible-- the website displays a timeline (from Material-UI) & graph (from Nivo) for accessing tweet data.
After selecting a month, the website will display a scatterplot of each congressmember's twitter data based on sentiment and subjectivity.
