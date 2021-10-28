const os = require('os')


// --------info about current user------

const user = os.userInfo()

console.log(user)

//---method returns the system uptime in sseconds


console.log(`The system up time is ${os.uptime()} seconds`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()

}



console.log(currentOS)