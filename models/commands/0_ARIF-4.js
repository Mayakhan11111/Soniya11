////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
const fs = require("fs");
module.exports.config = {
	name: "ARIF-KISS-1",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ARIF BABU", 
	description: "THIS BOT IS MR ARIF BABU",
	commandCategory: "NO PREFIX",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😘") ||
     react.includes("😘😘") || react.includes("uma") || react.includes("umha") ||
react.includes("💋") ||
react.includes("😽")) {
		var msg = {
				body: `Ummmmmmaaaahhhhhh😗😗 Baby🙈`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
//____________MADE BY ARIF BABU______________