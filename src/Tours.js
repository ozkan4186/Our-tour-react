import React from 'react';
import Tour from './Tour';
const Tours = ({setData,data,deleteTour}) => {
  // const [item, setItem] = useState("")

  return (
    <div className='section'>
      {
        data.map((item,index)=> <Tour key={index}  item={item} deleteTour={deleteTour} />)
      }

    </div>
  )
};

export default Tours;