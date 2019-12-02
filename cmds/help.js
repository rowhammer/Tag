module.exports.run = async(Tag, msg, args) => {
    if (!args[0]) {
        const commandNames = Array.from(Tag.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        msg.author.send(`= Command List =\n\n[Use ${Tag.config.prefix}help <commandname> for details]\n\n${Tag.commands.map(c => `${Tag.config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc', split: { char: "\n" }});
        msg.delete();
        msg.channel.send('Command info sent to DMs!');
      } else {
        let command = args[0];
        if (Tag.commands.has(command)) {
          command = Tag.commands.get(command);
          msg.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${Tag.config.prefix}${command.help.usage}`, {code:'asciidoc'});
        }
      }
    };


module.exports.help = {
    name: 'help'
}

module.exports.conf = {
    aliases: ['helpme']
}