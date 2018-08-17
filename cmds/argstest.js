module.exports.run = async(Tag, msg, args) => {
    let reason = args.slice(1).join(` `);
    // let person = msg.mentions.members.first();
    msg.channel.send(`Testing 6 arguments`)
    msg.channel.send(`Args 0: ${args[0]}`)
    msg.channel.send(`Args 1: ${args[1]}`)
    msg.channel.send(`Args 2: ${args[2]}`)
    msg.channel.send(`Args 3: ${args[3]}`)
    msg.channel.send(`Args 4: ${args[4]}`)
    msg.channel.send(`Args 5: ${args[5]}`)
    msg.channel.send(`Finished`)
    console.log(`Args Test`)
    console.log(args[0])
    console.log(args[1])
    console.log(args[2])
    console.log(args[3])
    console.log(args[4])
    console.log(args[5])
    msg.channel.send(reason)
    console.log(`Finished`)
}

module.exports.help = {
    name: "argstest"
}