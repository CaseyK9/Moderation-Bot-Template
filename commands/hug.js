const Discord = module.require("discord.js");
var rando_imgs = [
    'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
    'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
    'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
];


module.exports.run = async (client, message, args) => {
    let member = await message.mentions.members.first();

    if (!member) {
        message.delete();
        return message.channel.send({embed: {
            color: 3447003,
            title: "Mention a valid member of this server!"
        }}).then(msg => msg.delete(2132));
    }
  
    message.channel.send(`${message.author} gave ${member} a hug!`, {
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    });
}

module.exports.help = {
    name: "hug",
    description: "Hugs a user",
    usage: "hug <user>",
    type: "Fun" 
}