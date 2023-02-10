import { useState } from 'react';

const Instrument = ({id,img,desc,price,title}) => {
  const[readMore,setReadMore] = useState(false);
  return <article className='instrument'>
    <img src={img} alt= {title}/>
    <footer>
      <div className='instrument-info'>
        <h4>{title}</h4>
        <h4 className='instrument-price'>{price} RSD</h4>
      </div>
      <p>{readMore?desc: `${desc.substring(0,100)}...`
      }
        <button onClick={()=> setReadMore(!readMore)}>
          {readMore?'show less':'read more'}
        </button>
      </p>
    </footer>
  </article>
};

export default Instrument;
