module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARIF BABU",
	description: "THIS BOT WAS MADE BY MR ARIF BABU",
	commandCategory: "CHANGE GROUP EMOJI", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("बॉस साथ में एक इमोजी डालो जो सेट करना है 😐✌️", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`बॉस मैंने ग्रुप का इमोजी बदल दिया\nअब इस ग्रुप का ये वाला इमोजी है 👉 ${emoji}\n━━━━━━━━━━━━━━━━━━━━━━━\n❁━━[  𝐀𝐋𝐎𝐍 𝐆𝐈𝐑𝐋  ]━━❁`, event.threadID, event.messageID));
}
