module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARIF BABU",
	description: "THIS BOT WAS MADE BY MR ARIF BABU",
	commandCategory: "CHANGE GROUP NAME", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("बॉस साथ में ग्रुप का नाम लिखो जो आप रखना चाहते हो 😐✌️", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`अब इस ग्रुप का नाम ये है 👉 ${name}\n━━━━━━━━━━━━━━━━━━━━━━━\n❁━━[  𝐀𝐋𝐎𝐍 𝐆𝐈𝐑𝐋  ]━━❁`, event.threadID, event.messageID));
}
