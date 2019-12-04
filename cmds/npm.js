const {
    RichEmbed
} = require('discord.js');
const snek = require('snekfetch');
module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === "391736039879999489") {
        if (args.length === 0) return msg.channel.send('Can\'t help you if you put nothing my dude');
        const query = args.join(' ');
        try {
            const {
                body
            } = await snek.get(`https://registry.npmjs.com/${query}`);
            const version = body.versions[body['dist-tags'].latest];
            let deps = version.dependencies ? Object.keys(version.dependencies) : null;
            let maintainers = body.maintainers.map(user => user.name);
            if (maintainers.length > 10) {
                const len = maintainers.length - 10;
                maintainers = maintainers.slice(0, 10);
                maintainers.push(`...${len} more`);
            }
            if (deps && deps.length > 10) {
                const len = deps.length - 10;
                deps = deps.slice(0, 10);
                deps.push(`...${len} more`);
            }
            const embed = new RichEmbed()
                .setColor(0xCB0000)
                .setAuthor(body.name, 'https://i.imgur.com/ErKf5Y0.png')
                .setDescription(`${body.description || 'No description.'}
                **Version:** ${body['dist-tags'].latest}
                **License:** ${body.license}
                **Author:** ${body.author ? body.author.name : 'Unknown'}
                **Modified:** ${new Date(body.time.modified).toDateString()}
                **Dependencies:** ${deps && deps.length ? deps.join(', ') : 'None'}
                **Download:** [${body.name}](https://www.npmjs.com/package/${query})`);

            msg.channel.send({
                embed
            });
        } catch (error) {
            if (error.status === 404) msg.channel.send('Could not fins any results');

        }
    }
}
module.exports.help = {
    name: 'npm'
}

module.exports.conf = {
    aliases: ['node']
}