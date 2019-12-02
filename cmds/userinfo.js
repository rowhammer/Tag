module.exports.run = (Tag, msg, args) => {
  const Discord = require("discord.js");
  const moment = require("moment");
  require("moment-duration-format");
  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
  };
  const randomColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });

  msg.delete();
  let member;
  if (args[0]) {
    member = msg.mentions.members.first() ||
      (msg.guild.members.get(args[0]) ||
        msg.guild.members.find(m => m.user.username.toLowerCase().includes(args[0].toLowerCase())) ||
        msg.guild.members.find(m => m.displayName.toLowerCase().includes(args[0].toLowerCase())))
  } else {
    member = msg.member;
  }

  if (!member) return msg.reply("Please provide a vaild Mention or USER ID");

  let bot;
  member.user.bot ? bot = "Yes" : bot = "No";

  let nick = member.nickname;
  if (!nick) nick = "No nickname";

  function checkPremium(url) {
    return (url.match(/\.(gif)$/) != null);
  }
  let nitro;
  checkPremium(member.user.avatarURL) ? nitro = "Yes" : nitro = "No";

  var roles = new Array();
  for (var [flake, role] of member.roles) {
    roles.push(role.toString());
  }

  const embed = new Discord.RichEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`)
    .addField("Nickname:", nick, true)
    .addField("Bot?", `${bot}`, true)
    .addField("Nitro?", nitro, true)
    .addField("Guild", `${member.guild.name}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Playing", `${member.user.presence.activity ? `${member.user.presence.activity.name}` : "not playing anything."}`, true)
    .setDescription("Roles [" + roles.length + "]", roles.join("\t"), false)
    .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Account Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL);
  msg.channel.send({
    embed
  });
}


module.exports.help = {
  name: "userinfo",
  description: 'Sends information about your current user or another user in the server',
  usage: 'userinfo, !userinfo [@person]'
}

module.exports.conf = {
  aliases: ['uinfo']
}