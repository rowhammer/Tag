module.exports.run = async (Tag, msg, args) => {
    function pluck(array) {
        return array.map(function (item) {
            return item["name"];
        });
    }

    function hasRole(member, role) {
        if (pluck(member.roles).includes(role)) {
            return true;
        } else {
            return false;
        }
    }
    if (msg.member.id === "236243553569865728") { // Tom
        msg.channel.send("M8 you never sleep anyway :joy:")
        console.log("Said night to Tom")
    } else if (msg.member.id === ("391736039879999489")) { //Vatch
        msg.channel.send(`Goodnight Vatchy, remember to UPDATE YOUR SHIT AND DON'T LEAVE ME THE FUCK ALONE ALL NIGHT`);
        console.log(`Said night to Vatch`);
    } else if (msg.member.id === "143129339066580993") { //Blurry
        msg.channel.send(`Goodnight ${msg.author.username}, have sweet dreams of **THREADRIPPER AND VEGA 64 MOTHERFUCKER!!!! YEAHHHHHH GRAPHICS BITCH!!1!!ONE**`)
        console.log(`Said night to Blurryface`)
    } else if (hasRole(msg.member, "Constantly Drunk")) { //Sam
        msg.channel.send(`Night ${msg.author.username}, try not to get too drunk :wink:`)
        console.log(`Said night to drunk ${msg.author.username}`)
    } else if (msg.member.id === "165126937952387072") { //Hippo
        msg.channel.send(`Ah ${msg.author.username}, have a beautiful night's sleep :kiss:`)
    } else if (hasRole(msg.member, "Admins")) {
        msg.channel.send(`${msg.author.username}, you are relieved for the night. Resume duties in the morning`)
        console.log(`Said night to Staff`)
    } else if (hasRole(msg.member, "Manager")) {
        msg.channel.send(`Goodnight ${msg.author.username}, thanks for a great day of managing :wink:`)
    } else if (hasRole(msg.member, "Supervisor")) {
        var hydrogen = "<:hydrogen:324532579812507658>"
        var hydroheart = "<:hydroheart:336931730600493056>"
        msg.channel.send(`Ayyyyyyy ${msg.author.username}, *give* yourself a good night's sleep :wink:`)
        console.log(`Said night to Tester: ${msg.author.username}`)
    } else if (hasRole(msg.member, "Active")) {
        msg.channel.send(`Night 🌚`)
        console.log(`Said night to Site Member ${msg.author.username}`)
    } else msg.channel.send(`Night :slight_smile:`);
};

module.exports.help = {
    name: "night"
}

module.exports.conf = {
    aliases : ['nighty']
}