module.exports.run = async(Tag, msg, args) => {
    var pinging = '<@502477432243093504>';
    var words = [pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging, pinging];
    words.forEach(function (item, index, array) {
        msg.channel.send(item);
    });
}

module.exports.help = {
    name: 'jeckplscome'
}

module.exports.conf = {
    aliases : ['jpc']
}