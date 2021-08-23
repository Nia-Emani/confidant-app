export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_CONFIDANT_APP}/confidant`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONFIDANT_KEY}`
  }
}