const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  for (var i = 1; i <= 6; i++) {
    const embed = new discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Skrzydła ` + '`ID`' + `: ${i}`)
      .setDescription(`Ustaw skrzydła za pomocą komendy $wings <${i}>`)
      .setImage(`http://77.55.208.191/wings/${i}.png`)
      .setTimestamp()
      .setFooter('LemonCosmetics');

    message.channel.send({ embeds: [embed] });
  }
}

module.exports.config = {
  name: "showWings",
  description: "Wysyla embedy z wingsami.",
  usage: "showWings",
  accessibility: "ADMIN",
  permission: "ADMIN",
  aliases: []
}