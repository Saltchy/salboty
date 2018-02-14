const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ("*")

bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDA0MjUzODEzODkwMDg4OTYx.DWYPBg._01Tf6fB6G4GC21HW0MU4Y9q3Aw");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("commande Salut effectué");
    }
});
