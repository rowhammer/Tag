module.exports.run = async(Tag, msg, args) => {
    var webshot = require('node-webshot');
    var options = {
        renderDelay: 2000
    }
    webshot('https://support.rockstargames.com/hc/en-us/articles/200426246-GTA-Online-Server-Status-Latest-Updates', './res/status.png', options, function(err) {
        msg.channel.send({
            files: [{
              attachment: './res/status.png',
              name: 'status.png'
            }]
          })
            .catch(console.error);
    });
}

module.exports.help = {
    name: "rstats"
};