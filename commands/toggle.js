const request = require('request');

module.exports.run = async (bot, message, args) => {
  if (args == 0) {
    message.reply('Proszę podać model do schowania/pokazania!')
      .then(msg => {
        setTimeout(() => {
          message.delete();
          msg.delete();
        }, 5000)
      }).catch();
  } else {
    if (!bot.userInfo[message.author.id]) {
      message.reply('Proszę podłączyć konto minecraft komendą `$register <nick>`!')
        .then(msg => {
          setTimeout(() => {
            message.delete();
            msg.delete();
          }, 5000)
        }).catch();
      return;
    }
    message.reply(`Włączono/wyłączono ${args} gracza ${bot.userInfo[message.author.id]}!`)
      .then(msg => {
        setTimeout(() => {
          message.delete();
          msg.delete();
        }, 5000)
      }).catch();
    var url = `http://77.55.208.191/toggle/${args}/${bot.userInfo[message.author.id]}`;
    request({
      url: url,
      method: "get",
    });
  }
}

module.exports.config = {
  name: "toggle",
  description: "Podstawowa komenda.",
  usage: "toggle <model>",
  accessibility: "Użytkownicy",
  permission: "NONE",
  aliases: []
}