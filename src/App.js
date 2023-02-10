import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import items from "./data"
import Kontakt from './pages/Kontakt';
import Pocetna from './pages/Pocetna';

function App() {
  const [data, setData] = useState(items);
  const [loading, setLoading] = useState(true)


  const paginate = (instruments) => {
    const itemsPerPage = 4  
    const numberOfPages = Math.ceil(instruments.length / itemsPerPage)

    const newInstruments = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return instruments.slice(start, start + itemsPerPage)
    })

    return newInstruments
  }
  function fetchInstruments() {
    setData(paginate(data));
    setLoading(false);
    console.log(data);
  }
  useEffect(() => {
    fetchInstruments();
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Pocetna data={data} loading={loading} />}></Route>
          <Route path='/kontakt' element={<Kontakt />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
