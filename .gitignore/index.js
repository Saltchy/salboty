const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ("*")

bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

bot.login("NDA0MjUzODEzODkwMDg4OTYx.DWYPBg._01Tf6fB6G4GC21HW0MU4Y9q3Aw");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - *help \n - *salut \n - *création \n - *fabriquant \n - *info \n - *music \n - *tchoin");
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
            .setDescription("J'ai été crée par Saltchy le 15/02/2018 à 1H08")
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

    if (message.content === prefix + "music"){
        var embed = new Discord.RichEmbed()
            .addField("Shell Shocked","https://www.youtube.com/watch?v=0LMVfQlGLnA&list=RD0LMVfQlGLnA")
            .addField("No Glory ","https://www.youtube.com/watch?v=Tc-XxqEyolU&list=RDTc-XxqEyolU")
            .addField("Dead To Me","https://www.youtube.com/watch?v=LbOwN_Ow2AQ&list=RDLbOwN_Ow2AQ")
            .addField("Nothing Is Promised","https://www.youtube.com/watch?v=vnDqIlHsEqc&index=132&list=PLiBxv_H5jxbg4tCBI2OzV9z5TbBpuiZ60")
            .addField("Crown","https://www.youtube.com/watch?v=DSX-Fp8mM-g&list=RDDSX-Fp8mM-g")
            .addField("Get Me Out","https://www.youtube.com/watch?v=OSyKhqDsW14&index=3&list=RDDSX-Fp8mM-g")
            .addField("10 Seconds From Panic","https://www.youtube.com/watch?v=cPnXC2rkX9U&t")
            .addField("Fight Back","https://www.youtube.com/watch?v=CYDP_8UTAus")
            .addField("Monody","https://www.youtube.com/watch?v=rwNFY5EioQE")
            .addField("Bring Me The Horizon"," (https://www.youtube.com/watch?v=0kop2M-jpY4")
            .addField("Worst In Me","https://www.youtube.com/watch?v=n3C04Ev1caQ")
            .addField("Numb Sadest Version","https://www.youtube.com/watch?v=vtCKYZXpVKQ")
            .setColor("0xFF8000")
            message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "tchoin"){
        message.reply("Lèche mon paff sale tchoin");
        console.log("commande Tchoin effectué");
    }

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg.startsWith(prefix + 'PURGE')) {
        async function purge() {
            message.delete();

            if (!message.member.roles.find("name", "Best-tchoin")) {
                message.channel.send('You need the \`Best-tchoin\` role to use this command.');
                return;
            }

            if (isNaN(args[0])) {
                message.channel.send('Please use a number as your arguments. \n Usage : ' + prefix + 'purge <amount>');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error ${error}`));
        }
        purge();
    }    
});
