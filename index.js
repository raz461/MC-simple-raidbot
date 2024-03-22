const mineflayer = require('mineflayer');
const config = require('./config.json');
const randomUsers = require('./utils/username');

const usernames = randomUsers.generateUsers(config.bot.numberOfBots);
let botCount = 0;

for (const username of usernames) {
    const bot = mineflayer.createBot({
        host: config.server.host,
        username: username,
        auth: config.bot.auth,
        version: config.server.version,
        port: config.server.useport ? config.server.port : undefined
    });
    const percentage = Math.floor((botCount / config.bot.numberOfBots) * 100);
    console.log(`Creating bots: ${percentage}%`);

    botCount++;
    bot.once('spawn', function () {
        bot.chat(`${config.bot.message}`); 
    });
}