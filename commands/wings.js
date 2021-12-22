const request = require('request');

module.exports.run = async (bot, message, args) => {
  if (args == 0) {
    message.reply('Proszę podać id krzydeł!')
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
    if (message.member.roles.cache.has(bot.roleInfo['wing-access'])) {
      message.reply(`Zmieniono skrzydła gracza ${bot.userInfo[message.author.id]} ${args}!`)
        .then(msg => {
          setTimeout(() => {
            message.delete();
            msg.delete();
          }, 5000)
        }).catch();
      var url = `http://77.55.208.191/templates?name=${bot.userInfo[message.author.id]}&model=wings&texture=${args}`;
      request({
        url: url,
        method: "POST",
      });
    } else {
      message.reply('Nie masz dostępu do skrzydeł!')
        .then(msg => {
          setTimeout(() => {
            message.delete();
            msg.delete();
          }, 5000)
        }).catch();
    }
  }
}

module.exports.config = {
  name: "wings",
  description: "Podstawowa komenda.",
  usage: "wings <id>",
  accessibility: "Użytkownicy",
  permission: "NONE",
  aliases: []
}