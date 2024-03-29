const discord = require("discord.js")

module.exports = (bot, message) => {
  if (message.author.bot || message.channel.type === "dm") return;
  let prefix = bot.config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if (commandfile) commandfile.run(bot, message, args)
};