const config = require('../config.json');
module.exports.run = async(Tag, msg, args) => {
    console.log('works1')
    if (msg.channel.type === 'dm') {
        console.log('works2')
    }
}

module.exports.help = {
    name: 'restest'
}

module.exports.conf = {
    aliases: ['resourcetest']
}