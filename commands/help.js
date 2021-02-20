const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, con, lang) => {
let embed = new MessageEmbed()
            .setColor("#FF9898")
            .setTitle("Menu d'aide")
            .setFooter("")
            .setDescription("```" + client.commands.map(com => com.help.name).sort().join(", ") + "```")
        message.channel.send(embed).catch(err => err)
}

module.exports.help = {
    name: "help",
    category: "x",
}