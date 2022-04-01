import React, { useEffect, useState } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'
import s from './currencyRate.module.css'

export const CurrencyRate = ({ rates, setData, setDataOneRate, dataOneRate }) => {
  const [dataForTenDays, showDataForTenDays] = useState(false)

  useEffect(() => {
    setData()
  }, [])

  if (!rates) {
    return <h1>Подождите идёт загрузка....</h1>
  }

  const getDataOneRate = currency => {
    showDataForTenDays(true)
    setDataOneRate(currency)
  }

  const courseDifference = (todayCourse, yesterdayCourse) => {
    const num = ((todayCourse - yesterdayCourse) / yesterdayCourse) * 100
    return num.toFixed(3)
  }

  return (
    <>
      <ul>
        {Object.values(rates).map(currency => (
          <Tooltip text={currency.Name} key={currency.ID} onChange={e => console.log(e)}>
            <li className={s.itemList} onClick={() => getDataOneRate(currency.CharCode)}>
              <span className='charCode'>{currency.CharCode} </span>
              <span className='value'>{currency.Value} </span>
              <span className='courseDifference'>% {courseDifference(currency.Value, currency.Previous)} </span>
            </li>
          </Tooltip>
        ))}
      </ul>

      {dataForTenDays && (
        <div className={s.listTenDays}>
          <span>Курс выбранной валюты за десять дней</span>

          {dataOneRate.map((item, i) => (
            <div key={i}>
              <b>
                <span>{item.currency.CharCode} </span>
              </b>
              <span>{item.date} </span>
              <b>
                <span>{item.currency.Value}</span>
              </b>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
