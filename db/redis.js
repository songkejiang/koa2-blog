const redis = require('redis')
const {redis_conf} = require('../conf/db')

const redisClient = redis.createClient(redis_conf.port, redis_conf.host)

redisClient.on('error', (err) => {
    console.log(err)
})

function set(key, value) {
    if (typeof value === 'object')
    {
        value = JSON.stringify(value)
    }
    redisClient.set(key, value, redis.print)
}

function get(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val === null) {
                resolve(null)
                return
            }
            try{
                resolve(
                    JSON.parse(val)
                )
            } catch(err) {
                resolve(val)
            }
        })
    })
}
// module.exports = {
//     get,
//     set
// }
module.exports = redisClient