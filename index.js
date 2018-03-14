const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});

const prefix = '!';
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage('pong');
  }
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  var messages = [
    "hi", 
    "┏┓┏┓┏┳━━━━┳━━━\n┃┃┃┃┃┣━┓┏━┫┏━━┛\n┃┃┃┃┃┃╱┃┃╱┃┗━┓╱\n┃╰┛╰┛┃╱┃┃╱┃┏━┛╱\n╰━━━━┛╱┗┛╱┗┛╱╱╱",
    "░░▄░░░▄░▄▄▄▄░░░░░░░░░░░░░░░\n░░█▀▄▀█░█▄▄░░░░░░░░░░░░░░░░\n░░█░░░█░█▄▄▄░░░░░░░░░░░░░░░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░\n░▄▄▄░▄░░░▄░░▄▄▄░▄▄▄▄▄░░▄▄▄░\n█░░░░█░░░█░█░░░░░░█░░░█░░░█\n█░▀█░█░░░█░░▀▀▄░░░█░░░█▀▀▀█\n░▀▀▀░░▀▀▀░░▄▄▄▀░░░▀░░░▀░░░▀"
  
  ];
var text = "";
var i;
  if (message.content.startsWith(prefix + 'spam')) {
    for (i = 0; i < messages.length; i++) {
    text += messages[i] + "<br>";
      message.channel.sendMessage(messages[i]);
    }
  }
    
});

client.login(process.env.TOKEN);