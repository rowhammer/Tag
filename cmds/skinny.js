module.exports.run = async(Tag, msg, args) => {
    var words = ['Ay', 'yo', 'it\'s ya boi', 'uh', '**skinny penis**'];
    words.forEach(function (item, index, array) {
        msg.channel.send(item);
    });
}


module.exports.help = {
    name: "skinny"
}