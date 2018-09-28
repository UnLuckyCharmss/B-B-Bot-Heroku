const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", (message) => {

    //SPECIAL(Per Request)

    //Member
    if(message.content == "?add member") {
        message.reply("Added you to role member");
        let member = message.mentions.members.first();

        message.member.addRole("487952389169479692").then(console.log).catch(console.error);
    }
});

//DO NOT CHANGE!!!
bot.login("process.env.BOT_TOKEN");
