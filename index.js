const discord = require('discord.js');
const bot = new discord.Client({ disableEveryone: true, intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] });
const botConfig = require('./config.json');
const userInfo = require('./data/user-info.json');
const roleInfo = require('./data/info.json');

bot.config = botConfig;
bot.userInfo = userInfo;
bot.roleInfo = roleInfo;
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

require('./handlers/commandHandler')(bot);
require('./handlers/eventHandler')(bot);

bot.login(bot.config.token);