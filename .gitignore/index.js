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
        message.channel.sendMessage("Liste des commandes: \n - *help \n - *salut \n - *création \n - *fabriquant \n - *info \n - *tchoin");
        console.log("commande help effectué");
    }

    if (message.content === prefix + "salut"){
        message.reply("Bien le bonjour. :)");
        console.log("commande Salut effectué");
    }

    if (message.content === prefix + "création"){
        message.reply("SalBotY a été crée le 14/02/2018 à 19h33.");
        console.log("commande Création effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("SalBotY a été crée par Saltchy.");
        console.log("commande Création effectué");
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("Bot SalBotY à vos services !")
            .setDescription("J'ai été crée par Saltchy le 14/02/2018 à 19H33")
            .addField("Besoin d'aide avec mes différentes commandes ?","Tapez la commande *help")
            .addField("Mes autres copains bots:","Il y a les bots DJ FredBoat♪♪ et Rythm qui mettrons une ambiance de folie dans vos salons et le bot Fortnite Stats qui vous permet de voir vos statistiques sur Fortnite.")
            .addField("Rythm","Pour voir ces différentes commandes d'utilisation, tapez !help, il vous enverra un jolie lien qui vous renverra sur une page Google avec toutes ces commandes d'utilisation.")
            .addField("FredBoat♪♪","Pour voir ces différentes commandes d'utilisation, tapez ;;help, il vous enverra un jolie pavé en message privé vous expliquant tout ce qu'il y a besoin de connaitre.")
            .addField("Fortnite","Pour voir votre niveau, tapez !ftn + votre pseudo sur le jeu.")
            .addField("GTAV","Rejoignez le crew des zizi dans le cul !")
            .setColor("0xFF8000")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "tchoin"){
        message.reply("Lèche mon paff sale tchoin");
        console.log("commande Tchoin effectué");
    }
});
