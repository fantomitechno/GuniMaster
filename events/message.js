module.exports = async(client, message) => {
    let prefix = 'm-'
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
    let args = message.content.split(" ");
    let commandName = args[0].toLowerCase().replace(prefix, "")
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (command) command.run(client, message, args);
}
