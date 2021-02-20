const bypass = ["528340380064677891","563749920683720709"]
const Discord = require('discord.js');
module.exports.run = (client, message, args, con) => {
        if (bypass.indexOf(message.author.id) === -1) return message.channel.send("<:AP_warning:794749366891315240> Erreur ! Vous n'avez pas la permission.")
        try {
            let util = require("util");
            let code = message.content.split(" ").slice(1).join(" ");
            let ev = eval(code)
            let str = util.inspect(ev, {
                depth: 1
            })
            str = `${str.replace(new RegExp(`${client.token}|${process.env.TOKEN}`, "g"), "")}`;
        if (str.length > 1800) {
        for (let i = 0; i < str.length; i = i + 1800) {
        ss = str.substr(i, (i + 1800))
        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username + " • Page (" + Math.floor(i / 1800) + "/" + (Math.ceil(str.length / 1800) - 1) + ") ", client.user.avatarURL())
        .setDescription("\`\`\`js\n" + ss.substr(0, 1800) + "\`\`\`")
        message.channel.send(embed)
        }
        } else {
        str = str.substr(0, 1800)
        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username + " • Page (" + 1 + "/" + 1 + ") ", client.user.avatarURL())
        .setDescription("\`\`\`js\n" + str + "\`\`\`")
        message.channel.send(embed)
        }
        } catch (err) {
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username + " • Page (" + 1 + "/" + 1 + ") ", client.user.avatarURL())
        .setDescription("\`\`\`js\n" + err + "\`\`\`")
        message.channel.send(embed)
        }
    }
    module.exports.help = {
        name: "eval",
        alias: "e",
        category: "dev",
        dm: true
}