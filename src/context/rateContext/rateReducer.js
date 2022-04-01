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
    dataOneRate: state.currencyRatesForTenDays
      .map(rates => {
        return {
          date: rates.Date.substring(0, 10),
          currency: rates.Valute[action.rate],
        }
      })
      .reverse(),
  }),

  DEFAULT: state => state,
}

export const rateReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
