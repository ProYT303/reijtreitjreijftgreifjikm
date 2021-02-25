console.log("__________                _____                                      ________")
console.log("\\______   \\____   ____   /     \\   ____   _____   ___________  ___  _\\_____  \\ ")
console.log("|     ___/  _ \\ / ___\\ /  \\ /  \\_/ __ \\ /     \\_/ __ \\_  __ \\ \\  \\/ //  ____/ ")
console.log("|    |  (  <_> ) /_/  >    Y    \\  ___/|  Y Y  \\  ___/|  | \\/  \\   //       \\ ")
console.log("|____|   \\____/\\___  /\\____|__  /\\___  >__|_|  /\\___  >__|      \\_/ \\_______ \\ ")
console.log("            /_____/         \\/     \\/      \\/     \\/                      \\/ ")
const { count } = require('console');
const Discord = require('discord.js-self');
const { waitForDebugger } = require('inspector');
const client = new Discord.Client();
const { channelID, token, owner, postmemes, beg, fish, hunt, prefix, hl } = require('./config.json')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! \n Welcome to PogMemer SelfBot v2.2, ${client.user.tag}!`);
  
   

});
function send(message) {
    client.channels.cache.get(channelID).send(message)
}
var times = 0
client.on('message', msg => {
    const message = msg
    var money = 0
    var toggle = 0
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    try{
        if(message.embeds[0].description) {
           if(!message.embeds[0].description.includes("A number secret")) return
           if(message.embeds[0].author.name.includes(client.user.username)) {
             if (msg.author.id === "270904126974590976") {
                 let testlol = message.embeds[0].description.split("**")
                 testlol = testlol[1]
                 
                 if(testlol > 50){
                    message.channel.startTyping()
                    setTimeout(() => {
                        send("low")
                        message.channel.stopTyping()
                    }, 1000)
                   
                 }
                 else {
                    setTimeout(() => {
                        send("high")
                        message.channel.stopTyping()
                    }, 1000)
                 }
             }
           }
       }
     }
     catch{
       //e
     }
    const ch = client.channels.cache.get(channelID)
    var content = msg.content
    if (message.author.id === "270904126974590976") {
        if (message.content.includes("is broken lmao")) {
          if (content.includes(`<@${client.user.id}>`) | content.includes(`<@!${client.user.id}>`)) {
            message.channel.startTyping()
            setTimeout(() => {
              message.channel.stopTyping()
              message.channel.send('pls buy laptop')
            }, 1000) 
      
          }
        }
      }
    if (content.includes("`")) {
        if (content.includes("What type of meme do you want to post")) return;
        if (content.includes("EVENT TIME WOO!")) return;
        
        if (content.includes("pls ")) {
            if(msg.author.id === "270904126974590976") return;
        }
        if (msg.author.id === "270904126974590976" | msg.author.id === "610737823888310272" | msg.author.id === client.user.id | msg.author.id === owner) {
            
            msg.channel.startTyping();
            console.log('Typing.')
            setTimeout(() => {
                let test = content.split("`")
                var nw = test[1].replace(/﻿/g, "")
                msg.channel.stopTyping();
                if(nw) {
                  message.channel.send(nw)
                }
                
            }, 400)
        }
        else {return;}
    }
    function sellthing(){
        setTimeout(() => {
            if (toggle == 1){
                ch.startTyping()
                setTimeout(() => {
                    send('pls dep max')    
                }, 1000);
                setTimeout(() => {
                    send('pls sell fish max')    
                }, 2000);
                
            }
        }, 500);
    }
    function begs(){
        if(toggle ==1){
        channel.startTyping();
        console.log('Typing.')
        setTimeout(() => {
            send("pls beg");
            console.log("begged")
            times++
        channel.stopTyping();
        }, 500)
    }
    }
    function pm(){
        if(toggle == 1){
        channel.startTyping();
                    console.log('Typing.')
                    setTimeout(() => {
                        send("pls pm");
                        channel.stopTyping();
                        channel.startTyping();
                        setTimeout(function() {
                            send("f")
                            console.log("posted a fresh meme")
                            times++
                            channel.stopTyping();
                        }, 1969);
                    }, 600)
                }
    }
    function fishing(){
        if (toggle === 1) {
        times++
        channel.startTyping();
        console.log('Typing.')
        setTimeout(()=>{
            send("pls fish");
            channel.stopTyping();
        }, 300)
    }
    }
    function hunting(){
        if(toggle===1) {
        channel.startTyping();
        console.log('Typing.')
        setTimeout(() => {
            send("pls hunt");
            console.log("hunted")
            times++
        }, 600)
        channel.stopTyping();
    }
    }
    if (msg.content === `${prefix}st`) {
        if(msg.author.id === owner | msg.author.id === client.user.id) {
            msg.delete()
            channel.send("H")
            channel.startTyping();
            var toggle = 1
            var sellingthings = setInterval(sellthing, 100000);
            if(beg === "true") {
                var begvar = setInterval(begs, 46000)
            }
            if(postmemes === "true") {
                var pmvar = setInterval(pm, 61939)
            }
            if(fish === "true") {
                var fishvar = setInterval(fishing, 70000)
            }
            if(hunt === "true") {
                var huntvar = setInterval(hunting, 68000)
            }
            if (hl === "true") {
                setInterval(()=>{
                    ch.startTyping()
                    setTimeout(() => {
                        send('pls hl')
                        ch.stopTyping()    
                    }, 1200);
                    
                    times++
                }, 24312)
            }
            
            
        }
    } 
    else if(msg.content === '+stop') {
        msg.delete()
        var toggle = 0
        msg.reply('Done :pog:').then(msg => {
            setTimeout(     
                () => {
                    msg.delete()
            } , 4000)
        })
    }
    else if (msg.content === `${prefix}count` | msg.content === `${prefix}howmuch`) {
        if (times) {
            msg.reply(`${times}`).then(msg => {
                setTimeout(     
                    () => {
                        msg.delete()
                } , 4000)
            })
        }
        else {
            msg.reply("No commands launched from the bot yet! Type +st to start.")
            .then(msg => {
                setTimeout(     
                    () => {
                        msg.delete()
                } , 4000)
            })
        }
    }
    else if (msg.content === `${prefix}version`) {
        msg.reply('v2.2 69 Man').then(msg => {
            setTimeout(     
                () => {
                    msg.delete()
            } , 4000)
        })
    }
    else if(msg.content === `${prefix}credits`) {
      msg.channel.send("Cristian#6235 for help on pls hl").then(msg => {
        setTimeout(     
            () => {
                msg.delete()
        } , 4000)
    })
    }
    else if(command === `send`) {
        if(message.author.id !== owner) return;
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || client.users.fetch(args[0])
        let pingmem = `<@${member.id}>`
        let moneys = args[2]
        send(`pls share ${pingmem} ${moneys}`)
    }
    else if(command === 'say') {
        ch.startTyping()
        setTimeout(() => {
            send(args.join(' '))
            ch.stopTyping();
        }, 1200);
    }
});

client.login(token);