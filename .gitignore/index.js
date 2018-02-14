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
        message.channel.sendMessage("Liste des commandes: \n - *help \n -*Tchoin \n - *Salut \n - *Création \n - *Fabriquant \n - *embed");
        console.log("commande help effectué");
    }

    if (message.content === prefix + "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("commande Salut effectué");
    }

    if (message.content === prefix + "Création"){
        message.reply("SalBotY a été crée le 14/02/2018 à 19h33.");
        console.log("commande Création effectué");
    }

    if (message.content === prefix + "Fabriquant"){
        message.reply("SalBotY a été crée par Saltchy.");
        console.log("commande Création effectué");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("Bot SalBotY à vos services !")
            .setDescription("J'ai été crée par Saltchy le 14/02/2018 à 19H33")
            .addField("Besoin d'aide avec mes différentes commandes ?","Tapez la commande *help", true)
            .addField("GTAV","Rejoignez le crew des zizis dans le cul !")
            .addField("Fortnite","Pour voir votre niveau, tapez !ftn + votre pseudo sur le jeu.",true)
            .setColor("0xFF8000")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "Tchoin"){
        message.reply("Lèche mon paff sale tchoin");
        console.log("commande Tchoin effectué");
    }
});
