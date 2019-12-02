const {
    parse
} = require('fast-html-parser');
const {
    get
} = require('snekfetch');
const {
    parse: qs
} = require('querystring');
const {
    lazy: uf
} = require('unfluff');
const {
    RichEmbed
} = require('discord.js');

const gcolor = ['#4285FA', '#0F9D58', '#F4B400', '#DB4437'];

module.exports.run = async(Tag, msg, args) => {
    
    const time = Date.now();
    const term = args.join(' ');
    const searchurl = 'http://google.com/search?safe=active&q=' + encodeURIComponent(term);
    const searchmessage = await msg.channel.send('Searching for ' + term);
    const body = await get(searchurl);
    const $ = new parse(body.text);

    const result = (await Promise.all(
        $.querySelectorAll('.r').filter(e => e.childNodes[0].tagName === 'a' && e.childNodes[0].attributes.href).slice(0, 5).map(async(e) => {
            let url = e.childNodes[0].attributes.href.replace('/url?', '');
            if (url.startsWith('/')) url = 'http://google.com' + url;
            else url = qs(url).q || url;

            const body = await get(url);
            const details = uf(body.text);
            const obj = {
                url,
                snippet: () => {
                    const x = (details.description() || '').substring(0, 240);
                    const y = (details.text() || '').substring(0, 240) + '...';
                    return y.includes(x) ? y : x + '\n' + y;
                },
                image: () => details.image()
            };
            try {
                obj.title = new parse(body.text).querySelector('head').childNodes.find(e => e.tagName === 'title').childNodes[0].text;
            } catch (e) {
                obj.title = details.title() || 'No title found';
            }
            return obj;
        })
    ));

    msg.delete();

    if (!result.length) return searchmessage.edit('No results found for ' + term);
    const first = result.shift();
    const embed = new RichEmbed()
        .setColor(gcolor[Math.floor(Math.random() * gcolor.length)])
        .setAuthor(`Results for "${term}"`, 'https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAADwkE/KyrKDjjeV1o/photo.jpg', searchurl)
        .setTitle(`${first.title} - ${first.url}`)
        .setURL(first.url);
    try {
        embed.setThumbnail(first.image().replace(/^\/(.*)/, `${first.url}$1`));
    } catch (e) {} 
    embed.setDescription(first.snippet())
        .setTimestamp()
        .setFooter(Date.now() - time + ' ms')
        .addField('Top results', result.map(r => {
            const t = `${r.title}\n[${r.url}](${r.url})`;
            return t.length > 600 ? `${r.title}\n[snipped]` : t;
        }).join('\n'));
    searchmessage.edit({
        embed
    });
}

module.exports.help = {
    name: 'google',
    description: 'Searches Google for whatever you want',
    usage: 'google'
};

module.exports.conf = {
    aliases : ['g']
}