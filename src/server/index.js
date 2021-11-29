import app from './app.js'
import { renderToString } from 'react-dom/server'

// import Entry from '../App'

app.get('/', (req, res) => {
  // const content = renderToString(<Entry />)

  res.send(`${JSON.stringify(req.path)}12312`)
})
