export const API = {
  getRates: async () => {
    try {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
  getRatesForTenDays: async url => {
    try {
      const response = await fetch(url)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
}
