const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// Method returs the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentos)