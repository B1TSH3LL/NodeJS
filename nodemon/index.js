const http = require('http')

const port = 4001

const server = http.createServer((req, res) => {
    res.write("Server Is Running Successfuly")
    res.end()
})


server.listen(port, function(error) {
    if(error) {
        console.log('Something Gone Wrong....:(', error)
    } else {
        console.log('Server Is Listening On Port ' + port)
    }
})