const rp = require('request-promise-native');
module.exports.run = async (Tag, msg, args) => {
    const num = Math.floor(Math.random() * 10);
    if (num !== 5) {
        if (msg.channel.nsfw) {
            msg.delete();
            return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function (res) {
                return rp.get({
                    url: 'http://media.oboobs.ru/' + res[0].preview,
                    encoding: null
                });
            }).then(function (res) {
                msg.channel.send(`*Fetching random tiddies for ${msg.author.username}*`, {
                    files: [
                        res
                    ]
                });
            });
        } else msg.channel.send('*No, Christian channel*')
    } else return msg.channel.send('You\'re a dirty perv and you know it');
}

module.exports.help = {
    name: 'tiddies'
}