const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var prefix = config.prefix;



// Confirmamos si el bot esta encendido
client.on('ready', () => {
    console.log('lbfcrew encendido correctamente!!!');
    client.user.setPresence({ activity: { name: `${client.users.cache.size} miembros`, type: 'WATCHING' }, status: 'online' })
});

// Termino de confirmacion de bot

// Iniciamos la funcion de comandos
client.on("message", (message) => {
    // Evitar un bucle infinito
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    // End bucle inifito
    // constantes
    const member = message.mentions.members.first();
    // Termino de constantes
    // Variables
    // basicas
    let author = message.author.username;
    let encargado = client.user.username;
    // no tienes permiso de ejecutar este comando
    let rolenf = {
        embed: {
            color: 15844367,
            author: {
                icon_url: client.user.avatarURL
            },
            description: "**No eres digno de usar este comando ⚠**",
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: encargado
            }
        }
    }
    let saludo = {
            embed: {
                color: 15158332,
                author: {
                    icon_url: client.user.avatarURL
                },
                description: '**Wooooolaaaa ' + author + ' Bienvenido a esta gran comunidad!!! Esperemos la estancia en la misma sea de tu agrado, si tienes alguna duda no dudes en consultarla con el comando ```>>help``` Goodbye.**'
            }
        }
        // baneo de dragon lengendario
    let dragonban = {
            embed: {
                color: 15158332,
                author: {
                    icon_url: client.user.avatarURL
                },
                description: "**⚠Lamento informar que: No tienes permisos suficientes para banear a tu superior o usuarios del mismo rango....**",
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: encargado
                }
            }
        }
        // sintaxis de baneo y kickeos
    let malsintax = {
        embed: {
            color: 15158332,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            description: "**Escriba un razón, `>>ban @username [razón] o en caso de kick >>kick @username [razón]**`"
        }
    }
    let malsintax1 = {
            embed: {
                color: 15158332,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                description: "**Debes mencionar a alguien.**`"
            }
        }
        //end sintax errors
        //init 
    let revisa = {
        embed: {
            color: 15158332,
            author: {
                icon_url: client.user.avatarURL
            },
            description: `**${author}**, Revisa tus mensajes privados. 📩`
        }
    }

    // End variables
    //more embeds
    const bodyembed = {embed: {
      color: 3447003,
      description: "Esto es un simple mensaje embed."
    }}

    // Argumentos
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    // Fin de argumentos
    // Comandos
    //AmongUS
   if (command === 'codeamong') {
    if (!args.length) {
        return message.channel.send(`No haz introducido el codigo en el campo, ${message.author}!`);
    }
    else if (args[0] === 'undefined') {
        return message.channel.send('ingresa datos');
    }
    message.channel.send({embed: {
      color: 15158332,
      description: `Codigo de partida para among @everyone`,
      "fields": [
                {
                "name": "CODIGO",
                 "value": '```' + args[0] + '```',
                 "inline": true
                }
                ]
    }})

    } //End codeamong
    // JonatanHN
    if (message.content.startsWith(prefix + "JonatanHN")) {
        message.channel.send({
            embed: {
                color: 3066993,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "JonatanHN",
                url: "https://github.com/jonatanhn",
                description: "🐱‍👤||**Programmer 🐱‍💻 and Streamer 🎮**||🐱‍👤",
                fields: [{
                        name: "Twitch",
                        value: "[**JonatanHN Twitch**](https://Twitch.tv/jonatanhnoficial) "
                    },
                    {
                        name: "Youtube",
                        value: "[**JonatanHN YT**](https://youtube.com/#)"
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "JonatanHN 🐱‍👤"
                }
            }
        });
    }
    // End JonatanHN
    //more commands
    // switch
    switch (command) {
        // Ping
        case "ping":
            message.channel.send('Pong!');
            break;
            // End ping
        case "🥚🥚":
            message.channel.send(`webos pal ${user.username} 🥚🥚`);
            break;
            // Avisos
        case "aviso":
            if (!texto) return message.channel.send(`Escriba un contenido pára decir.`);
            message.channel.send('**' + texto + '**');
            break;
            // End Avisos
            // Ban
        case "ban":
            if (message.member.hasPermission(['ADMINISTRATOR'])) {
                if (message.mentions.users.size < 1) return message.reply(malsintax1).catch(console.error);
                if (!razon) return message.channel.send(malsintax);
                if (!message.guild.member(user).bannable) return message.channel.send(dragonban);
                message.guild.member(user).ban(razon);
                message.channel.send(`**${client.user.username} El usuario ${user.username} fue baneado por ||${message.author.username}|| razón: ${razon}.**`);
            } else {
                message.channel.send(rolenf);
            }
            break;
            //End Ban
            // Kick
        case "kick":
            if (message.member.hasPermission(['KICK_MEMBERS'])) {
                if (message.mentions.users.size < 1) return message.reply(malsintax1).catch(console.error);
                if (!razon) return message.channel.send(malsintax);
                if (!message.guild.member(user).bannable) return message.reply(dragonban);
                message.guild.member(user).kick(razon);
                message.channel.send(`**❌${client.user.username} El usuario ${user.username} fue kickeado temporalmente por ||${message.author.username}|| razón: ${razon}.**`);
            } else {
                message.channel.send(rolenf);
            }
            break;
        case "kickadm":
            if (message.member.hasPermission(['KICK_MEMBERS'])) {
                if (message.mentions.users.size < 1) return message.reply(malsintax1).catch(console.error);
                if (!razon) return message.channel.send(malsintax);
                message.guild.member(user).kick(razon);
                message.channel.send(`**❌${client.user.username} El usuario ${user.username} fue kickeado temporalmente por ||${message.author.username}|| razón: ${razon}.**`);
            } else {
                message.channel.send(rolenf);
            }
            break;
            // Hola
        case "hola":
            message.channel.send(saludo);
            break;
        case "servidor":
            message.channel.send();
            break;
        case "lbf":
            message.channel.send('en desarrollo mi crack');
            break;
        case "cmsr":
            message.channel.send(`${author} le ha sacado la csmr a ${user.username}`);
            break;
        case "fckyou":
            message.channel.send(`${author} se ha cogido a ${user.username}`);
            break;
        case "ctm":
            message.channel.send(`${user.username} haz chingado a tu madre de parte de ${author}`);
            break;
            //avatar
        case "avatar": 
             message.reply({embed: {
                color: 3066993,
                description: `**Este es tu avatar**`,
                image: {
                url: message.author.displayAvatarURL()
                }
             }})
            break;
        case "server":
            message.channel.send({embed: {
                color: 3066993,
                description: `** ✨ Orion Data Server ✨ **`,
                "fields": [
                {
                "name": "Username 🐱‍👤",
                 "value": `**${message.author.username}**`,
                 "inline": true
                },
                {
                  "name": "ID 🔐",
                  "value":  `${message.author.id}`,
                  "inline": true
                },
                {
                  "name": "Servidor Actual 🌀",
                  "value": `**(ツ) ${message.guild.name} (ツ) **`
                },
                {
                  "name": "Usuarios del Servidor 🌟",
                  "value": `↢ ${message.guild.memberCount} ↣`
                }
                ]
            }});
            break;
            
    } //end switch

    // Ayuda
        if (message.content.startsWith(prefix + 'trollfriends')) {
            message.channel.send('**COMANDOS DEL SERVIDOR **\n```\n' +
                '-> ' + prefix + 'fckyou   :: Le das amor a tu oponente.\n' +
                '-> ' + prefix + 'cmsr     :: Le sacas la cmsr a tu oponente.\n' +
                '-> ' + prefix + 'ctm      :: Mandas a chingar a su madre a tu oponente.\n' +
                '-> ' + prefix + 'comingsoon   :: Proximamente.\n' +
                '-> ' + prefix + 'comingsoon   :: Proximamente.\n' +
                '-> ' + prefix + 'comingsoon   :: Proximamente.\n```\n\n' +
                '**OrionBOT ✨ - Server guía y de soporte Únete :**\nhttps://discord.gg/2Q72uhv');
        } // Termino de ayuda
    // Ayuda
    if (message.content.startsWith(prefix + 'help')) {
        message.channel.send(revisa);
        message.author.send('**COMANDOS DEL SERVIDOR **\n```\n' +
            '-> ' + prefix + 'ping :: Comprueba la latencia del bot y de tus mensajes.\n' +
            '-> ' + prefix + 'coomingsoon       :: Proximamente.\n' +
            '-> ' + prefix + 'coomingsoon      :: Proximamente.\n' +
            '-> ' + prefix + 'coomingsoon 	       :: Proximamente.\n' +
            '-> ' + '!>' + 'play   :: Este comando funciona para reproducir musica solo agg el nombre de la cancion dejando un espacio entre la palabra play namesong.\n' +
            '-> ' + prefix + 'hola :: Retorna un saludo como mensaje.\n```\n\n' +
            '**OrionBOT ✨ - Server guía y de soporte Únete :**\nhttps://discord.gg/2Q72uhv');
    } // Termino de ayuda
    // INICIO DE AYUDA PARA ADD
    if (message.member.hasPermission(['ADMINISTRATOR'])) {
        if (message.content.startsWith(prefix + 'addhelp')) {
            message.channel.send(revisa);
            message.author.send('**COMANDOS DEL SV PARA LA ADD **\n```\n' +
                '-> ' + prefix + 'ping         :: Chequeas el funcionamiento del bot.\n' +
                '-> ' + prefix + 'ban  <@user> :: Baneas un usuario.\n' +
                '-> ' + prefix + 'kick <@user> :: Kickeas un usuario.\n' +
                '-> ' + prefix + 'aviso        :: Hace que el bot diga un mensaje.\n' +
                '-> ' + prefix + 'coomingsoon <@user>   :: Nada aun.\n' +
                '-> ' + prefix + 'coomingsoon <@user>   :: Nada aun.\n' +
                '-> ' + prefix + 'coomingsoon <@user>   :: Nada aun.\n' +
                '-> ' + prefix + 'coomingsoon :: Nada aun.\n```\n\n' +
                '**OrionBOT ✨ - Server guía y de soporte Únete :**\nhttps://discord.gg/2Q72uhv');
        }
    }
    //TERMINO DE AYUDA PARA ADMINISTRACION
}); // Termino de la funcion de comandos

client.login(config.token);