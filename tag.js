const Discord = require('discord.js');
const Enmap = require("enmap");
const Tag = new Discord.Client();
Tag.commands = new Discord.Collection();
Tag.aliases = new Enmap();
Tag.mutes = require('../Data/blocks.json');
Tag.collection = require('../Data/collection.json');
const music = require(`discord.js-music-v11`);
const fs = require("fs");
var log = require('fancy-log');
var config = require('./config.json');
const hook = new Discord.WebhookClient(config.tagHookID, config.tagHookToken);
const warning = new Discord.WebhookClient(config.warningHookID, config.warningHookToken);
Tag.config = config;

fs.readdir("./cmds/", (err, files) => {
  if (err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("No commands found");
    return;
  }
  log(`Starting...`);
  log(`${jsfiles.length} commands exist.`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    // log(`\t${i + 1}: ${f} loaded`);
    Tag.commands.set(props.help.name, props);
    if (props.init) props.init(Tag)
    props.conf.aliases.forEach(alias => {
      Tag.aliases.set(alias, props.help.name);
    });
  });
  log(`All commands loaded\n`);
});

music(Tag, {
  prefix: '%', // Prefix of '-'.
  global: false, // Server-specific queues.
  maxQueueSize: 10, // Maximum queue size of 10.
  clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});

Tag.on('ready', () => {
  console.log("\tThe thing is on\n")
});

Tag.on('error', (err) => {
  warning.send(`**Tag has error**\n${err.error}`);
  console.error(err.error);
})

// Tag.user.setAvatar(fs.readFileSync('./res/tagbo.png'), function (err) {
//   if (err) throw err;
// });

Tag.on('guildMemberAdd', member => {
  let userrole = member.guild.roles.find(sm => sm.name === "Site Members");
  const welcomechan = member.guild.channels.find(w => w.name === "welcome");
  const modwelcomechan = member.guild.channels.find(mw => mw.name === "mod-welcome");
  let ruleschannel = member.guild.channels.find(r => r.name === "rules");
  if (!ruleschannel) ruleschannel = "rules";
  var num = Math.floor(Math.random() * 9000000) + 1000000;
  const newuserbiginfo = new Discord.RichEmbed()
    .setAuthor(`Ay' up, it's ${member.user.username}...`, member.guild.iconURL)
    .setColor(num)
    .setThumbnail(member.user.avatarURL)
    .addField('Gadge:', `<@${member.user.id}>`, true)
    .addField('BOI', `If you're here then you're a big boi ;)`, true)
    .setFooter(`Stay T H I C C ${member.user.username}, you are member number: ${member.guild.memberCount}!`)
    .setTimestamp();
  // const newuserhydroinfo = new Discord.RichEmbed()
  //   .setAuthor(`Welcome to ${member.guild.name}!`, member.guild.iconURL)
  //   .setColor(num)
  //   .setThumbnail(member.user.avatarURL)
  //   .addField('User', `<@${member.user.id}>`, true)
  //   .setFooter(`Welcome to ${member.guild.name}`)
  //   .setTimestamp()
  if (member.guild.id === "473223354330120203") {
    msg.channel.send(`Welcome to the ${msg.guild.name} server, ${msg.user.username}!`)
    console.log(`New join: ${msg.user.username} in ${msg.guild.name}`)
  } else
  if (welcomechan) {
    welcomechan.send({
      embed: newuserbiginfo
    });
  } else if (!welcomechan) {
    member.send({
      embed: newuserbiginfo
    });
  }
  if (modwelcomechan) {
    modwelcomechan.send(`New join: **${member.user.tag}**`);
  } else return;
  log(`${member.user.username} has joined the ${member.guild.name} server`);
});


Tag.on('guildMemberRemove', member => {
  const modwelcomechan = member.guild.channels.find(mw => mw.name === "mod-welcome");
  const tagchan = member.guild.channels.find(bl => bl.name === "bot_log");
  const leftuserinfo = new Discord.RichEmbed()
    .setAuthor(`Left ${member.guild.name}`, member.guild.iconURL)
    .setColor(25500)
    .setThumbnail(member.user.avatarURL)
    .addField('User:', member.user.username, true)
    .addField('Tag:', member.user.tag, true)
    .setFooter(`User count is now: ${member.guild.memberCount}`)
    .setTimestamp();

  if (tagchan) {
    tagchan.send({
      embed: leftuserinfo
    })
  } else if (!tagchan) {
    console.log(`${member.user.username} has left the ${member.guild.name} server`)

  }
  log(`${member.user.username} has left the ${member.guild.name} server`);
});

Tag.on("message", msg => {
  if (msg.channel.type === "dm" && !msg.author.bot) {
    hook.send(`PM to ${Tag.user.username} from ${msg.author.username}:\n\n${msg.content}`)
    console.log(msg.content);
    return;
  }
  var serverlink = "http.*discord.gg*";
  var twitchlink = "http.*twitch.tv.*";

  if (msg.isMentioned(config.vatchID) || msg.mentions.everyone || (msg.guild && msg.mentions.roles.filter(r => msg.guild.member(config.vatchID).roles.has(r.id)).size > 0)) {
    if (msg.author.id === Tag.user.id || msg.author.id === hook.id || msg.author.bot) return;
    if (msg.author.id === config.vatchID) return;
    hook.send(`**Mentioned in ${msg.guild.name}**\n*by ${msg.author.username} in ${msg.channel.name}:*\n\t${msg.content}`);
    console.log(`Mentioned in ${msg.guild.name}\nby ${msg.author.username} in ${msg.channel.name}:\n\n${msg.content}`);

  }
  let gonna = new RegExp(/((w|W)\s*)+((e)\s*)+(( )\s*)+((c|C)\s*)+((o)\s*)+((u)\s*)+((l)\s*)+((d)\s*)/g);
  // let nigga = new RegExp
  if (msg.content.match(gonna)) {
    msg.channel.send(`**bUt ArE wE GoNnA???**`, {
      files: [
        './res/rwegonna.gif'
      ]
    })
  }
  if (msg.content.includes(` intel `)) msg.channel.send(`*shintel`);
  if (msg.content.includes(` AMD `)) msg.channel.send(`AYYYYYMD`);
  if (msg.content.includes(` kill myself`)) msg.channel.send(`Same`);
  if (msg.content.includes(`Hello`)) msg.channel.send('Hey');
  if (msg.content.includes(Tag.user) && !msg.author.bot) msg.channel.send(`What?`); // pres truman
  if (!msg.author.id === '391736039879999489') {


    if (msg.content.match(serverlink)) {
      log(`${msg.author.username} tried to share a server`);
      msg.delete();
      msg.channel.send(`Can't share Discord servers ${msg.author.username}`);
    } else return msg.channel.send('This one\'s fine');
  }

  if (!msg.content.startsWith(config.prefix)) return;

  let messageArray = msg.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let cmd = Tag.commands.get(command.slice(config.prefix.length));

  if (cmd) {
    if (msg.author.bot) return;
    cmd.run(Tag, msg, args);
    log(`\n\t${msg.author.tag} (${msg.author.id}) used the ${cmd.help.name} command in ${msg.guild.name}!`);
  }
});
Tag.login(config.Tag);
