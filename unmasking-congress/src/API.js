import axios from 'axios'
export async function sendMonthToBackend(month, setMonthData, setCases, setDeaths, setHospitalized) {
    const response = await axios.get('http://localhost:8000', {
        params: {
            month: String(month)
        }
    });

    var data = JSON.parse(response.data)
    var democratData = []
    var republicanData = []

    for (var repName in data) {
        let representative = data[repName]

        if (representative['sentiment'] !== -2 && representative['subjectivity'] !== -2) {
            if (representative['party'] === 'Democrat') {
                democratData.push({ 'x': representative['sentiment'], 'y': representative['subjectivity'], 'label': repName, 'state': representative['state'], 'twitter_handle': representative['twitter_handle'], 'color': 'blue' })
            } else {
                republicanData.push({ 'x': representative['sentiment'], 'y': representative['subjectivity'], 'label': repName, 'state': representative['state'], 'twitter_handle': representative['twitter_handle'], 'color': 'red' })
            }
        }
    }

    // todo: parse color from group rather than data point (color value below is not the one being read)
    var democratDictionary = { 'id': 'Democrat', 'color': 'blue', 'data': democratData }
    var republicanDictionary = { 'id': 'Republican', 'color': 'red', 'data': republicanData }

    var date;
    switch (month) {
        case 'March':
            date = 20200331
            break
        case 'April':
            date = 20200430
            break
        case 'May':
            date = 20200531
            break
        case 'June':
            date = 20200630
            break
        case 'July':
            date = 20200731
            break
        case 'August':
            date = 20200831
            break
        case 'September':
            date = 20200930
            break
        case 'October':
            date = 20201031
            break
        case 'November':
            date = 20201130
            break
        case 'December':
            date = 20201231
            break
    }

    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.covidtracking.com/v1/us/daily.json')
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            let info = JSON.parse(request.response)
            for (var i = 0; i < info.length; i++) {
                var day = info[i]
                if (day['date'] === date) {
                    setDeaths(day['death'])
                    setHospitalized(day['hospitalizedCumulative'])
                    setCases(day['positive'])
                }
            }
        }
    }

    setMonthData([democratDictionary, republicanDictionary]);


    console.log('in api.js: sendMonthToBackend')


}