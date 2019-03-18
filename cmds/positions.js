module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        let server = msg.guild;
        for (var [flake, channel] of server.channels) {
            console.log(`${channel.position}\t${channel.name}`);
        }
    }
}

module.exports.help = {
    name: 'positions'
}

module.exports.conf = {
    aliases : ['allpositions']
}