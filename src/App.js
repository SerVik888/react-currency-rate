import React, { useContext } from 'react'
import './App.css'
import s from './App.css'
import { CurrencyRate } from './components/currencyRate/CurrencyRate'
import { RateContext } from './context/rateContext/RateContext'

function App() {
  const { setData, setDataOneRate, rates, dataOneRate } = useContext(RateContext)

  return (
    <div className={s.app}>
      <h1>Курс валют</h1>
      <CurrencyRate rates={rates} setData={setData} />
    </div>
  )
}

export default App
