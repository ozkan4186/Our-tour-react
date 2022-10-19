import React from 'react';
import Tour from './Tour';
const Tours = ({setData,data}) => {
  // const [item, setİtem] = useState("")
  return(
    <div>
      {data.map((item)=>{
        return(
          <div key={item.id} >
            <Tour  item={item}/>
          </div>
        )
       
     

       })}
    </div>
  )

 
};

export default Tours;
