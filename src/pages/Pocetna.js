import Instrument from '../components/Instrument'
import { useState,useEffect } from 'react';
function Pocetna({data ,loading }) {

    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([]);

  useEffect(() => {
    if(loading) return
    setProducts(data[page])
  }, [loading ,page])

    const nextPage = () => {
        setPage((oldPage) => {
          let nextPage = oldPage + 1
          if (nextPage > data.length - 1) {
            nextPage = 0
          }
          return nextPage
        })
      }
      const prevPage = () => {
        setPage((oldPage) => {
          let prevPage = oldPage - 1
          if (prevPage < 0) {
            prevPage = data.length - 1
          }
          return prevPage
        })
      }
    
      const handlePage = (index) => {
        setPage(index)
      }

  return (
    <main>
      <div className='container'>
          {products.map((product) => {
            return <Instrument key={product.id} {...product} />
          })}
        </div>
      {!loading && (
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            pret.
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className='next-btn' onClick={nextPage}>
            sled.
          </button>
        </div>
      )}
     
    </main>
   
   
  );
}

export default Pocetna;