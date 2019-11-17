const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

const serverStats = {
    guildID: '638095348161576961', //Guild ID
    totalUserID: '642051478285975561', //Total Users : 0
    memberCountID: '642051528995373076', //Member Count : 0
    botCountID: '642051584137887754' //Bot Count: 0
};

client.on('ready',() =>console.log('Server Stats Ready!'));

//2 Listeners.. Add and Remove..

client.on('guildMemberAdd', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`); //Total
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); //Member
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`) //Bot
});

client.on('guildMemberRemove', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
});

// join member class
client.on('guildMemberAdd', member => {

	// asign member an role
	var role = member.guild.roles.find('name', 'Users')
	member.addRole(role)

	// send message to the chat
	member.guild.channels.get('640674378476027934').send(
		{
			embed: 
				{
					color: 3447003,
					title: "CYNICHOST.COM",
					url: "https://cynichost.com",
					description: "🥳 Welcome *" + member + "* to the discord server! 🥳🎈",
					fields: [{
					    name: "Information",
					    value: "We are glad that you have chosen to join us!",
					    value: "For any problem related to the host, please contact our team!"
					  }
					],
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL,
					  text: "© CYNICHOST 2018 - 2019"
					}
				}
		}
	);

	// send message to the member
	member.send(
		{
			embed: 
				{
					color: 3447003,
					title: "CYNICHOST.COM",
					url: "https://cynichost.com",
					description: "🥳 Welcome *" + member + "* to the discord server! 🥳🎈",
					fields: [{
					    name: "Information",
					    value: "We are glad that you have chosen to join us!",
					    value: "For any problem related to the host, please contact our team!"
					  }
					],
					timestamp: new Date(),
					footer: {
					  icon_url: client.user.avatarURL,
					  text: "© CYNICHOST 2018 - 2019"
					}
				}
		}
	);

});


client.login(config.token)