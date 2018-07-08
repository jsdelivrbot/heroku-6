const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')

const http = require('http')
const PORT = process.env.PORT || 5000

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

  const requestHandler = (request, response) => {
	  console.log(request.url)
	  response.end('Hello Node.js Server!')
	}

	const server = http.createServer(requestHandler)

	server.listen(PORT, (err) => {
	  if (err) {
	    return console.log('something bad happened', err)
	  }

	  console.log(`server is listening on ${PORT}`)
	})