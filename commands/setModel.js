const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const embed = new discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Jak ustawic kosmetyki`)
    .addFields({ name: 'Włączanie/Wyłączanie modeli', value: 'Komenda: $toggle `cape/wings`' })
    .addFields({ name: 'Ustawianie skrzydeł', value: 'Komenda: $wings `id`' })
    .setDescription('Więcej kosmetyków w przyszłości!')
    .setTimestamp()
    .setFooter('LemonCosmetics');

  message.channel.send({ embeds: [embed] });
}

module.exports.config = {
  name: "setModel",
  description: "Podstawowa komenda.",
  usage: "setModel",
  accessibility: "ADMIN",
  permission: "ADMIN",
  aliases: []
}