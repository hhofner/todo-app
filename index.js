const express = require('express')
const app = express()
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static('public'))

// The route handler is now simplified as the static file will be served automatically
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Optional if 'index.html' is your file
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
