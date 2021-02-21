const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const { Client, MessageEmbed, Collection } = require('discord.js');

client.on('ready', async () => {
        console.log('Brick is a cunt.');
        console.log('Created by matsu#3622.')
        client.user.setActivity('with Brick\'s mom')
        console.log('Ready to fuck those motherfuckers up.');

//Boot up sequence
});

      const prefix = '&';
          client.on("message", function(message) {
              if (message.author.bot) return;
              if (!message.content.startsWith(prefix)) return;

                const commandBody = message.content.slice(prefix.length);
                const args = commandBody.split(' ');
                const command = args.shift().toLowerCase();
                const UserID = '397177896684224513';
                const Avatar = message.author.avatarURL();
                const prediction = Math.floor(Math.random() * 11);

                const help = new Discord.MessageEmbed()
                  .setColor('#00000')
                  .setTitle('Brick is a retard that needs help.')
                  .setAuthor(message.author.username, Avatar)
                  .addFields(
                    { name:'&brick', value:'is a cunt.'},
                    { name:'$help', value:'Brings up this embed.'},
                    { name:'$cunt', value:'Shows the cunt.'},
                    { name:'&predict', value:'Shows how much **you** are a cunt in a scale of 1 to 10. (WIP)'}
                  )

              const cunt = new Discord.MessageEmbed()
                    .setColor('#00000')
                    .setTitle('Brick is a retard that needs help.')
                    .setAuthor(message.author.ID, Avatar)
                    .setImage('https://cdn.discordapp.com/avatars/397177896684224513/72d2fae9aa2bfa0d1733a808e5e0ca32.png')
                    .setFooter('Showing you the massive cunt.');

              const pred = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setTitle('Here, you cunt.')
                    .setImage(message.author.avatarURL())
                    .setDescription(`From a scale of 1 to 10, you\'re a ${prediction}`)
                    .setTimestamp();

                    if ( command === 'brick' ){
                        if (message.author.ID === UserID) {
                        message.channel.send('Shut the fuck up Brick.');
                      } else {
                        message.channel.send('Brick is a cunt.');
                      }
                    }
                    if ( command === 'help'){
                        if (message.author.ID === UserID) {
                        message.channel.send('Shut the fuck up Brick.');
                      }else{
                        message.channel.send(help);
                        }
                      }
                    if ( command === 'cunt'){
                        if (message.author.ID === UserID) {
                        message.channel.send('Shut the fuck up Brick.');
                      } else {
                        message.channel.send(cunt);
                      }
                    }
                    if (command === 'predict') {
                      if (message.author.ID === UserID) {
                      message.channel.send('Shut the fuck up Brick.');
                    } else {
                        message.channel.send(pred);
                      }
                  }
          });
          client.login(config.BOT_TOKEN);
