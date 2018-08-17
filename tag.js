const Discord = require('discord.js');
const Tag = new Discord.Client();
Tag.commands = new Discord.Collection();
Tag.mutes = require('../Data/blocks.json');
Tag.collection = require('../Data/collection.json');
const music = require(`discord.js-music-v11`);
const fs = require("fs");
const ms = require("ms");
var log = require('fancy-log');
var lu = require('log-utils');
var schedule = require(`node-schedule`);
var config = require('./config.json');
const hook = new Discord.WebhookClient(config.tagHookID, config.tagHookToken);
var num = Math.floor(Math.random() * 9000000) + 1000000;
var request = require('request');
var vatch = '391736039879999489';

fs.readdir("./cmds/", (err, files) => {
  if (err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("No commands found");
    return;
  }
  log(`Starting...`);
  log(`\t${jsfiles.length} commands exist. If you see less then you fucked up\n`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    log(`\t${i + 1}: ${f} loaded`);
    Tag.commands.set(props.help.name, props);
  });
  console.log('\n\tAll visible commands loaded');
});

music(Tag, {
  prefix: '%', // Prefix of '-'.
  global: false, // Server-specific queues.
  maxQueueSize: 10, // Maximum queue size of 10.
  clearInvoker: true // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
});

Tag.on('ready', () => {

  request('https://www.hydrogenmods.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function (error, response, body1) {
    if (error) {
      Tag.user.setActivity(`Can\'t connect`)
    } else {
      request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body2) {
        if (err) {
          Tag.user.setActivity('Can\'t connect');
        } else {
          var monthly = body2[0] + body2[1] + body2[2];
          var lifetime = body2[4] + body2[5] + body2[6] + body2[7];
          var total = parseInt(monthly) + parseInt(lifetime);
          Tag.user.setActivity(`V: ${body1} | U: ${total}`)
          console.log(`\tVersion is : ${body1}`);
          console.log(`\tTotal Users are: ${total}`);
        }
      })
    }
  })
  request('https://www.hydrogenmods.co.uk/Authentication/HydroStats/GetInjects.php', function (error, response, body) {
    if (error) {
      Tag.user.setActivity('Can\'t connect');
    } else {
      console.log(`\tTotal injection amount is: ${body}\n`)
      console.log('\tData loaded, logs follow...\n')
    }
  })
  var mins = 5
  var interval = mins * 60 * 1000;
  setInterval(function () {
    request('https://www.hydrogenmods.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function (error, response, body1) {
      if (error) {
        Tag.user.setActivity(`Can\'t connect`)
      } else {
        request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body2) {
          if (err) {
            Tag.user.setActivity('Can\'t connect');
          } else {
            var monthly = body2[0] + body2[1] + body2[2];
            var lifetime = body2[4] + body2[5] + body2[6] + body2[7];
            var total = parseInt(monthly) + parseInt(lifetime);
            Tag.user.setActivity(`V: ${body1} | U: ${total}`)
          }
        })
      }
    })
  }, 600000)
  console.log(`\tSuccessful activation of ${Tag.user.username}. Loading data...`);
  // Tag.removeAllListeners('message');
  console.log('\n\tLogged in');
  Tag.setInterval(() => {
    for (let i in Tag.mutes) {
      let time = Tag.mutes[i].time;
      let guildID = Tag.mutes[i].guild;
      let guild = Tag.guilds.get(guildID);
      let member = guild.members.get(i);
      let tagchan = guild.channels.find("name", "bot_log");
      let mutedRole = guild.roles.find(r => r.name === "Muted");
      if (!mutedRole) console.log('not there');

      if (Date.now() > time) {
        console.log(`\tUnmuted ${i} (${member.user.tag}) after ${ms(time)}`);

        member.removeRole(mutedRole);
        delete Tag.mutes[i];

        fs.writeFile("../Data/blocks.json", JSON.stringify(Tag.mutes), err => {
          if (err) throw err;
          tagchan.send(`Unmuted ${member.user.tag} after ${ms(ms(time), {long: true})}`);
        });
      }
    }
  }, 10000);
});

// Tag.user.setAvatar(fs.readFileSync('./res/tagbo.png'), function (err) {
//   if (err) throw err;
// });

Tag.on('guildMemberAdd', member => {
  let userrole = member.guild.roles.find("name", "Site Members");
  const welcomechan = member.guild.channels.find("name", "welcome");
  const modwelcomechan = member.guild.channels.find("name", "mod-welcome");
  let ruleschannel = member.guild.channels.find("name", "rules");
  if (!ruleschannel) ruleschannel = "rules";
  var num = Math.floor(Math.random() * 9000000) + 1000000;
  const newuserbiginfo = new Discord.RichEmbed()
    .setAuthor(`Welcome to ${member.guild.name}!`, member.guild.iconURL)
    .setColor(num)
    .setThumbnail(member.user.avatarURL)
    .addField('User', `<@${member.user.id}>`, true)
    .addField('Information', `Make sure to properly read the ${ruleschannel} channel to make sure you don\'t break any rules.`, true)
    .addField('Agreement', 'Read the message from Bender (my sweet lover)')
    .setFooter(`Welcome to ${member.guild.name}`)
    .setTimestamp();
  // const newuserhydroinfo = new Discord.RichEmbed()
  //   .setAuthor(`Welcome to ${member.guild.name}!`, member.guild.iconURL)
  //   .setColor(num)
  //   .setThumbnail(member.user.avatarURL)
  //   .addField('User', `<@${member.user.id}>`, true)
  //   .setFooter(`Welcome to ${member.guild.name}`)
  //   .setTimestamp()
  if (member.guild.id === "473223354330120203") {
    return;
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
  const modwelcomechan = member.guild.channels.find("name", "mod-welcome");
  const tagchan = member.guild.channels.find("name", "bot_log");
  const leftuserinfo = new Discord.RichEmbed()
    .setAuthor(`Left ${member.guild.name}`, member.guild.iconURL)
    .setColor(25500)
    .setThumbnail(member.user.avatarURL)
    .addField('User:', member.user.username, true)
    .addField('Tag:', member.user.tag, true)
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
    hook.send(`**Mentioned in ${msg.guild.name}**\n*by ${msg.author.username} in ${msg.channel.name}:*\n\n${msg.content}`);
    console.log(`**Mentioned in ${msg.guild.name}**\n*by ${msg.author.username} in ${msg.channel.name}:*\n\n${msg.content}`);

  }

  var conditions = [
    // "((n)\s*)+((i)\s*)+((g|b|)\s*)+((g|b|)\s*)+((a)\s*)",
    // "((n)\s*)+((i)\s*)+((g)\s*)+((g)\s*)+((e)\s*)+((r)\s*)+((s)\s*)",
    // "((n)\s*)+((i)\s*)+((g)\s*)+((g)\s*)+((e)\s*)+((r)\s*)",
    "nigger",
    "nigga",
    "niggers",
    "hydro",
    "hydrogen",
    "hydr0",
    "hydr0gen"
    // "((h)\s*)+((y)\s*)+((d)\s*)+((r)\s*)+((o|0|))",
  ]
  // if (msg.guild.id === "468527523949576193") {
  //   if (msg.author.id !== "236243553569865728" && msg.author.id !== "143129339066580993") {
  //     let unaccaptable = new RegExp(conditions.join("|"), "gmi");
  //     if (msg.content.match(unaccaptable)) {
  //       msg.delete();
  //       msg.channel.send('BOI').then(message => message.delete(3000));
  //       msg.author.send('pls no, help us stay online');
  //     }
  //   }
  // } else return
  if (msg.content.includes(` intel `)) msg.channel.send(`*shintel`);
  if (msg.content.includes(` AMD `)) msg.channel.send(`AYYYYYMD`);
  if (msg.content.includes(` kill myself`)) msg.channel.send(`Same`);
  if (msg.content.includes(`Hello`)) msg.channel.send('Hey');
  if (msg.content.includes(Tag.user) && msg.author.id !== '224720955132477441') msg.channel.send(`What?`); // pres truman
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


  if (cmd) cmd.run(Tag, msg, args);

});
Tag.login(config.Tag);
