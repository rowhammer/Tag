module.exports.run = (client, msg, args) => {
  const Discord = require('discord.js');
  var member = msg.member;
  msg.delete()
  msg.channel.send('( ͡° ͜ʖ ͡°)');

}
exports.conf = {
    enabled:  true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
  name: 'lenny',
  description: 'sends lenny face',
  usage: 'lenny'
}
