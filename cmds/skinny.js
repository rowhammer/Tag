module.exports.run = async (Tag, msg, args) => {
    var sleep = require('sleep');
    var words = ['Ay', 'yo', 'it\'s ya boi', 'uh', '**skinny penis**'];
    
        words.forEach(function (item, index, array) {
            msg.channel.send(item).then(sleep.sleep(5))
        });
 
}

module.exports.help = {
    name: "skinny"
}

module.exports.conf = {
    aliases: ['ayyo']
}