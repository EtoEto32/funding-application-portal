import simpleRestProvider from 'ra-data-simple-rest'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const dataProvider = simpleRestProvider(`${apiUrl}/api`)
