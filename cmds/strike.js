module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        msg.channel.send('Strikes are coming...');
    }
}

module.exports.help = {
    name: 'strike'
}