import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteTour=(id)=>{
    const newTour = data.filter((tour)=>tour.id !=id)
    setData(newTour)
  }

  const axiosTours = async () => {
    setLoading(true)
    try {
      const response = await axios(url);
      setData(response.data);
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
   setTimeout(()=>{
     axiosTours();
   },1300)


  }, []);

  console.log(data);
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(data.length===0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={()=>axiosTours()} >refresh</button>
        </div>
      </main>
    )
  }

  return(
    <div>
      <Tours setData={setData}  data={data} deleteTour={deleteTour} />
    </div>
  )
}

export default App;
