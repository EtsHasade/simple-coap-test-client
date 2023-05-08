const coap = require('coap')
const IP_ADDRESS = '192.168.1.6'

process.stdin.on('data', data => {
    const [method, msg] = data.toString().split(':')
    const req = coap.request(`coap://${IP_ADDRESS}/${method}/${msg}`)

    req.on('response', (res) => {
        res.pipe(process.stdout)
    })
    req.end()
})

