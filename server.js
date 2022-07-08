// Setup empty JS object to act as endpoint for all routes
let projectData = {}

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'))

// Spin up the server
const port = 3000
const server = app.listen(port, () => {
    console.log("Server is listening on:")
    console.log(`Port: ${port}`)
})

// ----ROUTES---- //
// Test/debug initial functionality
app.get('/', (req, res) => {
      res.send('Howdy Multiverse!' )
})

// Initialize GET route with a callback function
app.get('/projectData', (req, res) => {
    res.send(projectData)
})

// Establish POST Route with a callback function
app.post('/add', (req, res) => {
    let clientData = req.body
        projectData["date"] = clientData.date
        projectData["temperature"] = clientData.temperature
        projectData["userResponse"] = clientData.userResponse
    res.send(projectData)
})