import axios from 'axios'
export async function sendMonthToBackend(month, setMonthData){
      const response = await axios.get('http://localhost:8000', {
          params:{
              month: String(month)
          }
      })
    setMonthData(response.data);
}