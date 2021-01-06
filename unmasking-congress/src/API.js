import axios from 'axios'
export async function sendMonthToBackend(month, setMonthData){
      const response = await axios.get('http://localhost:8000', {
          params:{
              month: String(month)
          }
      });
    
      var data = JSON.parse(response.data)
      var democratData = []
      var republicanData = []

      for (var repName in data) {
        let representative = data[repName]
        
        if(representative['sentiment'] !== -2 && representative['subjectivity'] !== -2) {
            if (representative['party'] === 'Democrat') {
                democratData.push({'x': representative['sentiment'], 'y': representative['subjectivity'], 'label': repName, 'color': 'blue'})
            } else {
                republicanData.push({'x': representative['sentiment'], 'y': representative['subjectivity'], 'label': repName, 'color': 'red'})
            }
        }
      }
      
      // todo: parse color from group rather than data point (color value below is not the one being read)
      var democratDictionary = {'id': 'Democrat', 'color': 'blue', 'data': democratData }
      var republicanDictionary = {'id': 'Republican', 'color': 'red', 'data': republicanData }

    setMonthData([democratDictionary, republicanDictionary]);
    console.log('in api.js: sendMonthToBackend')
}