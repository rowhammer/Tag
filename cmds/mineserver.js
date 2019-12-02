module.exports.run = async(Tag, msg, args) => {
    const Discord = require("discord.js");
    const config = require("../config.json");
    const mineHook = new Discord.WebhookClient(config.minecraftServerID, config.minecraftServerToken);
    // mineHook.send("Test Logging");
    const mineEmbed = new Discord.RichEmbed()
        .setColor(0x00bb00)
        .setThumbnail(msg.guild.iconURL)
        .setAuthor("Minecraft Server Information", msg.author.avatarURL)
        .setDescription(`requested by ${msg.author.username}`)
        .addField("IP Address", "3.10.3.61", true)
        .addField("Running", "Yes (or no)", true)
        .addField("Modpacks Installed", "0",true)
        .addField("Modpacks Active", "0", true)
        .setFooter(Tag.user.username, Tag.user.avatarURL)
        .setTimestamp()
    msg.delete();
    msg.channel.send({
        embed : mineEmbed
    });
}

module.exports.help = {
    name: "mineserver"
}

module.exports.conf = {
    aliases: ["mineserver"]
}