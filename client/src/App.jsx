import { useState ,useEffect } from 'react'
import axios from 'axios'

function App() {
  
    const [reponse, setreponse] = useState([]);
   useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/exchange_rates')
      .then(res=> {
        console.log(res)
        setreponse(res.data.rates)
      }).catch(err => console.log(err))
       
   },[])
    

  return (
    <div className="App">
         <h1>bitcoin api</h1>
          
         {
             reponse ? <div>    
             <h3>{reponse.btc.name} to {reponse.usd.name}</h3>
          
          <p> le type de monai : {reponse.btc.type}</p>
    
          <p>l'unite est :{reponse.btc.unit}</p>
    
          <p>le prix est : 1 {reponse.btc.unit} equivaux a {reponse.usd.value} {reponse.usd.unit}   </p>
             
               </div>    :  <div><h2>aucun data</h2></div>
           }
        
    </div>
  )
}

export default App
