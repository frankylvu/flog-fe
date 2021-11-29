import express from 'express'

const app = express()

// app.use(express.static('dist-client'))

app.listen(3000, () => {
  console.log('server is starting http://localhost:3000/')
})

export default app
