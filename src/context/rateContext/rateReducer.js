import { GET_DATA, GET_DATA_FOR_TEN_DAYS, GET_DATA_ONE_RATE } from '../types'

const handlers = {
  [GET_DATA]: (state, action) => ({
    ...state,
    rates: action.data.Valute,
  }),
  [GET_DATA_FOR_TEN_DAYS]: (state, action) => ({
    ...state,
    currencyRatesForTenDays: [...state.currencyRatesForTenDays, action.dataPreviousDay],
  }),
  [GET_DATA_ONE_RATE]: (state, action) => ({
    ...state,
    dataOneRate: state.currencyRatesForTenDays.map(rates => {
      Object.values(rates.Valute).filter(rate => {
        return rate === action.rate
      })
    }),
  }),

  DEFAULT: state => state,
}

export const rateReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
