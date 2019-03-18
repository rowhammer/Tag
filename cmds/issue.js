module.exports.run = async (Tag, msg, args) => {
	msg.delete();
    if (msg.guild.id === "473223354330120203") {
        if (msg.member.hasPermission("ADMINISTRATOR")) {
            const config = require('../config.json');
            const Discord = require('discord.js');
            var createIssue = require('github-create-issue');
            var issueTitle = args.slice(0).join(` `);
            var opts = {
                'token': config.githubPAT,
                'body': `Submitted from the Discord server by ${msg.author.tag}`,
                'labels': [
                    'BUG'
                ]
            };

            createIssue('Damb-Tom/Hydrium', issueTitle, opts, clbk);

            function clbk(error, issue, info) {
                if (info) {
                    console.error(info)
                }
                if (error) {
                    throw new Error(error.message);
                } else {
                    const issueembed = new Discord.RichEmbed()
                        .setTitle(issueTitle)
                        .setColor(0xff0000)
                        .setAuthor('New GitHub Issue Created', msg.guild.iconURL)
                        .setFooter(opts.body, msg.author.avatarURL)
                    msg.channel.send({
                        embed: issueembed
                    })
                }
                console.log(issue);
            }

            // USE THE ORIGINAL API WHEN POSSIBLE
            // const GitHub = require("github-api");
        }
    } else return console.log('Wrong server for issue')
}
module.exports.help = {
    name: 'issue'
}

module.exports.conf = {
    aliases : ['submitissue']
}