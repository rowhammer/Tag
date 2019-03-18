module.exports.run = async (Tag, msg, args) => {
    if (msg.author.id === '391736039879999489') {
        if (msg.guild.region !== 'london') {
            msg.guild.setRegion('london').then(updated => console.log(`Updated guild region to ${msg.guild.region}`)).catch(console.error);
            msg.delete();
            msg.channel.send('Man\'s in the not hot country now fam');
        } else return msg.channel.send('Already in Camden m8');
    };
};

module.exports.help = {
    name: 'setlondon'
};

module.exports.conf = {
    aliases: ['london']
}