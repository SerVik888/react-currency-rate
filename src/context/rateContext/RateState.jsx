import React, { useReducer } from 'react'
import { API } from '../../api'
import { GET_DATA, GET_DATA_FOR_TEN_DAYS, GET_DATA_ONE_RATE } from '../types'
import { RateContext } from './RateContext'
import { rateReducer } from './rateReducer'

export const RateState = ({ children }) => {
  const initialState = {
    rates: null,
    dataOneRate: null,
    currencyRatesForTenDays: [],
  }

  const [state, dispatch] = useReducer(rateReducer, initialState)

  const setData = async () => {
    const data = await API.getRates()
    dispatch({ type: GET_DATA, data })
    await setCurrencyRatesForTenDays(data.PreviousURL)
  }

  const setCurrencyRatesForTenDays = async url => {
    let previousURL = url
    for (let i = 0; i < 10; i++) {
      const dataPreviousDay = await API.getRatesForTenDays(previousURL)
      dispatch({ type: GET_DATA_FOR_TEN_DAYS, dataPreviousDay })
      previousURL = dataPreviousDay.PreviousURL
    }
  }

  const setDataOneRate = async rate => {
    dispatch({ type: GET_DATA_ONE_RATE, rate })
  }

  return (
    <RateContext.Provider
      value={{
        rates: state.rates,
        dataOneRate: state.dataOneRate,
        setData,
        setDataOneRate,
      }}
    >
      {children}
    </RateContext.Provider>
  )
}
