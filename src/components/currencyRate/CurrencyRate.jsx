import React, { useEffect } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'

export const CurrencyRate = ({ rates, setData }) => {
  useEffect(() => {
    setData()
  }, [])

  if (!rates) {
    return <h1>Подождите идёт загрузка....</h1>
  }

  const courseDifference = (todayCourse, yesterdayCourse) => {
    const num = ((todayCourse - yesterdayCourse) / yesterdayCourse) * 100
    return num.toFixed(3)
  }

  return (
    <ul>
      {Object.values(rates).map(currency => (
        <Tooltip text={currency.Name} key={currency.ID} onChange={e => console.log(e)}>
          <li className='item'>
            <span className='charCode'>{currency.CharCode} </span>
            <span className='value'>{currency.Value} </span>
            <span className='courseDifference'>% {courseDifference(currency.Value, currency.Previous)} </span>
          </li>
        </Tooltip>
      ))}
    </ul>
  )
}
