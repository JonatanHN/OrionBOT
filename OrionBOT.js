const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

// Viendo
// const wow = client.user.setPresence({name : `${client.users.cache.size} Usuarios en ${client.guilds.cache.size} Servidores`, type: 'WATCHING', status: 'online'});

// Activities
const activities_list = [
    'Website: www.orion-bot-ds.web.app',
    'Use: >>help',
    'v1.0.3',
    'Info Server: >>server',
    'Made with ❤ and JavaScript',
    'Credits: JonatanHN',
    'Admin help: >>adm',
    // creates an arraylist containing phrases you want your bot to switch through.
];
const colors = [
    0,
    3066993,
    // 3447003,
    // 10181046,
    // 15844367,
    // 15105570,
    // 15158332,
    // 9807270,
    // 8359053,
    // 3426654,
    // 1146986,
    // 2067276,
    // 2123412,
    // 7419530,
    // 12745742,
    // 11027200,
    // 10038562,
    // 9936031,
    // 12370112,
    // 2899536,
    // 16580705,
    // 12320855,

];
// cambio de colores en mensajes
const change = Math.floor(Math.random() * (colors.length - 1) + 1);
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity({ name: activities_list[index], type: 'WATCHING' });
    }, 3000);
    console.log(`BOT [ONLINE]: ${client.users.cache.size} Users in ${client.channels.cache.size} Channels inside of ${client.guilds.cache.size} Servers.`);
});

const welcometoserver = new Discord.MessageEmbed()
    .setTitle('Thanks for adding me to your server!')
    .setDescription('Muchas Gracias!!! por unirme a tu servidor...')
    .setThumbnail('https://i.imgur.com/JGTQcYG.png')
    .addFields({
        name: 'Commands of administrator',
        value: '>>adm',
    })
    .setColor(3066993)
    .setFooter('Copyright orion-bot-ds.web.app');
/* Or RANDOM */
client.on('guildCreate', server => {
    // const embed = new Discord.MessageEmbed()
    //     .setAuthor(message.author.username)
    //     .setDescription("Usuario rikolino.")
    //     .setColor("#3535353")
    //     .addField("Usuario", '${message.author.username}#${message.author.discriminator}')
    //     .addField("ID", message.author.id)
    //     .addField("Creación", message.author.createdAt);

    // message.channel.send(embed);

    server.owner.send(welcometoserver);
    // , {
    //     name: '\u200B',
    //     value: '\u200B'
    // }, {
    //     name: 'Inline field title',
    //     value: 'Some value here',
    //     inline: true
    // }, {
    //     name: 'Inline field title',
    //     value: 'Some value here',
    //     inline: true
    // },


});
//
// Termino de confirmacion de bot

// Iniciamos la funcion de comandos

client.on('message', (message) => {

    // generates a random number between 1 and the length of the activities array list (in this case 5).

    // Evitar un bucle infinito
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    // End bucle inifito
    // Termino de constantes
    // Variables
    // basicas
    const author = message.author.username;
    const encargado = client.user.username;
    // const usermessage = client.message.username;
    // no tienes permiso de ejecutar este comando

    const rolenf = {
        embed: {
            color: colors[change],
            author: {
                icon_url: client.user.avatarURL(),
            },
            description: '**No eres digno de usar este comando ⚠**',
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: encargado,
            },
        },
    };
    const saludo = {
        embed: {
            color: colors[change],
            author: {
                icon_url: client.user.avatarURL,
            },
            description: '**Wooooolaaaa ' + author + ' Bienvenido a esta gran comunidad!!! Esperemos la estancia en la misma sea de tu agrado, si tienes alguna duda no dudes en consultarla con el comando ```>>help``` Goodbye.**',
        },
    };
    // baneo de dragon lengendario
    const dragonban = {
        embed: {
            color: colors[change],
            author: {
                icon_url: client.user.avatarURL,
            },
            description: '**⚠Lamento informar que: No tienes permisos suficientes para banear a tu superior o usuarios del mismo rango....**',
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: encargado,
            },
        },
    };
    // sintaxis de baneo y kickeos
    const malsintax = {
        embed: {
            color: colors[change],
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL,
            },
            description: '**Escriba un razón, `>>ban @username [razón] o en caso de kick >>kick @username [razón]**`',
        },
    };
    const malsintax1 = {
        embed: {
            color: colors[change],
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL,
            },
            description: '**Debes mencionar a alguien.**`',
        },
    };
    // end sintax errors
    // init
    const revisa = {
        embed: {
            color: colors[change],
            author: {
                icon_url: client.user.avatarURL(),
            },
            description: `**${author}**, Revisa tus mensajes privados. 📩`,
        },
    };

    // End variables

    // Argumentos
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    const texto = args.join(' ');
    const user = message.mentions.users.first();
    const razon = args.slice(1).join(' ');
    const argscode = args.slice(0).join(' ');
    // Fin de argumentos
    // Comandos
    // AmongUS
    if (command === 'codeamong') {
        if (!args.length) {
            return message.channel.send(`No haz introducido el codigo en el campo, ${message.author}!`);
        }
        else if (args[0] === 'undefined') {
            return message.channel.send('ingresa datos');
        }
        message.channel.send({
            embed: {
                color: colors[change],
                description: 'Codigo de partida para among @everyone',
                'fields': [{
                    'name': 'CODIGO',
                    'value': '```' + args[0] + '```',
                    'inline': true,
                }],
            },
        });
    }
    if (message.content.startsWith(prefix + 'credits')) {
        message.channel.send({
            embed: {
                color: colors[change],
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                title: 'JonatanHN',
                url: 'https://github.com/jonatanhn',
                description: '🐱‍👤||**Programmer 🐱‍💻 and Streamer 🎮**||🐱‍👤',
                fields: [{
                    name: 'Twitch',
                    value: '[**JonatanHN Twitch**](https://Twitch.tv/jonatanhnoficial) ',
                },
                {
                    name: 'Youtube',
                    value: '[**JonatanHN YT**](https://youtube.com/#)',
                },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: 'JonatanHN 🐱‍👤',
                },
            },
        });
    }
    // End JonatanHN
    // more commands
    // switch
    switch (command) {
    // Ping
    case 'ping':
        message.channel.send('Calculando ping! please wait moment....').then(m => {
            // The math thingy to calculate the user's ping
            const ping = m.createdTimestamp - message.createdTimestamp;

            // Basic embed
            const embed = new Discord.MessageEmbed()
                .setAuthor(`Tú ping es de ${ping}`)
                .setColor(0);

            // Then It Edits the message with the ping variable embed that you created
            m.edit(embed);
        });
        break;
        // End ping
        // Avisos
    case 'aviso':
        if (!texto) return message.channel.send('Escriba un contenido pára decir.');
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({
                embed: {
                    color: colors[change],
                    fields: [{
                        'name': 'AVISO ⚠ \n',
                        'value': `@everyone **${texto}** \n`,
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: 'Avisos ⚠',
                    },
                },
            });
        }
        else {
            message.channel.send(rolenf);
        }
        break;
        // End Avisos
        // deleted messages

        /*

                                                                                                                                                                                                                                   START SECTION ADMINISTRATION

                                                                                                                                                                                                                                */
        // Ban
    case 'ban':
        if (message.member.hasPermission(['ADMINISTRATOR'])) {
            if (message.mentions.users.size < 1) return message.reply(malsintax1).catch(console.error);
            if (!razon) return message.channel.send(malsintax);
            if (!message.guild.member(user).bannable) return message.channel.send(dragonban);
            message.guild.member(user).ban(razon);
            message.channel.send(`**${client.user.username} El usuario ${user.username} fue baneado por ||${message.author.username}|| razón: ${razon}.**`);
        }
        else {
            message.channel.send(rolenf);
        }
        break;
        // End Ban
        // Kick
    case 'kick':
        if (message.member.hasPermission(['KICK_MEMBERS'])) {
            if (message.mentions.users.size < 1) return message.reply(malsintax1).catch(console.error);
            if (!razon) return message.channel.send(malsintax);
            if (!message.guild.member(user).bannable) return message.reply(dragonban);
            message.guild.member(user).kick(razon);
            message.channel.send(`**${client.user.username} El usuario ${user.username} fue kickeado temporalmente por ||${message.author.username}|| razón: ${razon}.**`);
        }
        else {
            message.channel.send(rolenf);
        }
        break;
        /*

                                                                                                                                                                                                                                    END SECTION ADMINISTRATION

                                                                                                                                                                                                                                */
        // Hola
    case 'hola':
        message.channel.send(saludo);
        break;
        // avatar
    case 'avatar':
        message.reply({
            embed: {
                color: colors[change],
                description: '**Este es tu avatar**',
                image: {
                    url: message.author.displayAvatarURL(),
                },
            },
        });
        break;
    case 'server':
        message.channel.send({
            embed: {
                color: colors[change],
                description: '** ✨ Orion Data Server ✨ **',
                'fields': [{
                    'name': 'Username 🐱‍👤',
                    'value': '**```' + message.author.username + '```**',
                    'inline': true,
                },
                {
                    'name': 'ID 🔐',
                    'value': '**```' + message.author.id + '```**',
                    'inline': true,
                },
                {
                    'name': 'Servidor Actual 🌀',
                    'value': '**```' + message.guild.name + '```**',
                    'inline': true,
                },
                {
                    'name': 'Usuarios del Servidor 🌟',
                    'value': '**```↢ ' + message.guild.memberCount + ' ↣```**',
                    'inline': true,
                },

                {
                    'name': 'Canales 📺',
                    'value': '**```' + message.guild.channels.cache.size + '```**',
                    'inline': true,
                },
                {
                    'name': 'Región 🌏',
                    'value': '**```' + message.guild.region + '```**',
                    'inline': true,
                },
                {
                    'name': 'Usuarios disponibles en Servidores 👀 \n',
                    'value': '**```' + client.users.cache.size + '```**',
                    'inline': true,
                },
                {
                    'name': 'Servídores donde se ecuentra Orion 🌟 \n',
                    'value': '**```' + client.guilds.cache.size + '```**',
                    'inline': true,
                },
                {
                    'name': 'Canales donde se encuentra Orion 📺 \n',
                    'value': '**```' + client.channels.cache.size + '```**',
                    'inline': true,
                },
                {
                    'name': 'Creador del Gremío 🧔🏻 \n',
                    'value': `\n **${message.guild.owner}**`,
                    'inline': true,
                },
                ],
            },
        });
        break;
    case 'welcomesvr':
        message.author.send(welcometoserver);
        message.channel.send('Se ha enviado tu mensaje');
        break;
    case 'codejs':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in js',
                    value: '```js' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {
                    text: 'Code create in JS For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codecss':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in css',
                    value: '```css' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {
                    text: 'Code create in CSS For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codehtml':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in html',
                    value: '```html' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in HTML For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codephp':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in php',
                    value: '```php' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in Php For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codets':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in typescript',
                    value: '```ts' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in Typescript For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codejava':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in java',
                    value: '```java' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in Java For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codec#':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in c#',
                    value: '```c#' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in C# For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });
        break;
    case 'codepython':
        message.channel.send({
            embed: {
                color: colors[change],
                title: 'Codigo',
                fields: [{
                    name: 'code made in python',
                    value: '```py' + '\n' + argscode + '```',
                }],
                timestamp: new Date(),
                footer: {

                    text: 'Code create in PYTHON For: ' + author,
                    icon_url: message.author.avatarURL(),
                },
            },
        });

        break;
    case 'purge':
        if (message.member.hasPermission(['KICK_MEMBERS'])) {
            // Delete the command message before having the bot execute the command
            if (args[0] <= 100) {
                message.channel.bulkDelete(`${args[0]}`).then(() => {
                    message.channel.send({
                        embed: {
                            color: colors[change],
                            description: 'Se han eliminado ' + '**' + args[0] + '**' + ' Mensajes',
                            timestamp: new Date(),
                            footer: {
                                icon_url: message.author.avatarURL(),
                                text: author + ' Se ha encargado de limpiar',
                            },
                        },
                    }).then(m => m.delete({
                        timeout: 2000,
                    }));
                });
            }
            else {
                message.channel.send({
                    embed: {
                        color: colors[change],
                        description: 'Lo sentimos, seguimos trabajando para poder mejorar este comando, dado a que discord tiene un control de eliminacion en su BD, Thaks!!! \n **Message Type Error: No puedes ingresar un numero mayor a 100**',
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: author + ' Se ha encargado de limpiar',
                        },
                    },
                }).then(m => m.delete({
                    timeout: 5000,
                }));
            }

        }
        else {
            message.channel.send(rolenf);
        }
        break;


    }

    // INICIO DE AYUDA PARA ADD
    if (message.member.hasPermission(['ADMINISTRATOR'])) {
        if (message.content.startsWith(prefix + 'adm')) {
            message.channel.send(revisa);
            message.author.send('**COMANDOS DEL SV PARA LA ADD **\n```\n' +
                '👉🏻 ' + prefix + 'ping               :: Chequeas el funcionamiento del bot.\n' +
                '👉🏻 ' + prefix + 'ban  <@user> Razón :: Baneas un usuario.\n' +
                '👉🏻 ' + prefix + 'kick <@user> Razón :: Kickeas un usuario.\n' +
                '👉🏻 ' + prefix + 'aviso              :: Hace que el bot diga un mensaje.\n' +
                '👉🏻 ' + prefix + 'purge <cantidad>   :: Eliminar cierta cantidad de mensajes.\n' +
                '👉🏻 ' + prefix + 'coomingsoon <@user>:: Nada aun.\n' +
                '👉🏻 ' + prefix + 'coomingsoon <@user>:: Nada aun.\n' +
                '👉🏻 ' + prefix + 'coomingsoon        :: Nada aun.\n```\n\n' +
                '**OrionBOT ✨ - Server guía**\nhttps://discord.gg/BBSjpkK');
        }
    }
    // TERMINO DE AYUDA PARA ADMINISTRACION
    if (message.content.startsWith(prefix + 'programmers')) {
        message.channel.send('**COMANDOS PARA PROGRAMADORES**\n```\n' +
            '👉🏻 ' + prefix + 'codehtml   :: codigo html.\n' +
            '👉🏻 ' + prefix + 'codejs     :: codigo js.\n' +
            '👉🏻 ' + prefix + 'codets     :: codigo ts.\n' +
            '👉🏻 ' + prefix + 'codecss    :: codigo css.\n' +
            '👉🏻 ' + prefix + 'codec#     :: codigo c#.\n' +
            '👉🏻 ' + prefix + 'codejava   :: codigo java.\n' +
            '👉🏻 ' + prefix + 'codepython :: codigo python.\n' +
            '👉🏻 ' + prefix + 'Coomingsoon:: Proximamente.\n' +
            '👉🏻 ' + prefix + 'Coomingsoon:: Proximamente.\n' +
            '👉🏻 ' + prefix + 'Coomingsoon:: Proximamente.\n```\n');
    }
    // Termino de ayuda
    // Ayuda
    if (message.content.startsWith(prefix + 'help')) {
        message.channel.send(revisa);
        message.author.send('**COMANDOS DEL SERVIDOR **\n```\n' +
            '👉🏻 ' + prefix + 'hola :: Retorna un saludo como mensaje.\n' +
            '👉🏻 ' + prefix + 'ping :: Comprueba la latencia del bot y de tus mensajes.\n' +
            '👉🏻 ' + prefix + 'server      :: te da un listado de informacion basica sobre el servidor y tus datos de usuario.\n' +
            '👉🏻 ' + prefix + 'avatar      :: Muestra tu imagen de perfil.\n' +
            '👉🏻 ' + prefix + 'programmers :: Solo para programadores.\n' +
            '👉🏻 ' + prefix + 'trollfriends:: Comandos tontos para disfrutar con amigos.\n' +
            '👉🏻 ' + prefix + 'adm         :: Comandos de administración.\n' +
            '👉🏻 ' + prefix + 'comingsoon  :: Aun se trabaja en mas comandos.\n' +
            '👉🏻 ' + prefix + 'credits     :: Conoce al creador de este BOT.\n```\n\n' +
            '**OrionBOT ✨ - Server guía y de soporte Únete :**\nhttps://discord.gg/BBSjpkK');
        // eslint-disable-next-line no-inline-comments
    } // Termino de ayuda

    // eslint-disable-next-line no-inline-comments
}); // Termino de la funcion de comandos

client.login(config.token);
