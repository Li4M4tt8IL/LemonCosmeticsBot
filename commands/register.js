const fs = require('fs');
const request = require('request');

function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) return true;
  }
  return false;
}

module.exports.run = async (bot, message, args) => {
  if (args == 0) {
    message.reply('Proszę podać nick!')
      .then(msg => {
        setTimeout(() => {
          message.delete();
          msg.delete();
        }, 5000)
      }).catch();
  } else {
    bot.userInfo[message.author.id] = args;
    fs.writeFileSync("./data/user-info.json", JSON.stringify(bot.userInfo), (err) => {
      if (err) console.log(err);
    });
    message.reply(`Zarejestrowano konto na nick ${args}!`)
      .then(msg => {
        setTimeout(() => {
          message.delete();
          msg.delete();
        }, 5000)
      }).catch();
    var url = `http://77.55.208.191/config/create?name=${args}`;
    request({
      url: url,
      method: "POST",
    });
  }
}

module.exports.config = {
  name: "register",
  description: "Rejestruje uzytkownika.",
  usage: "register user",
  accessibility: "Użytkownicy",
  permission: "NONE",
  aliases: ["reg"]
}