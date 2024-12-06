const fs = require("fs");
module.exports.config = {
  name: "DP-RUHANI",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Ruhani") ||
     react.includes("ruhani") || react.includes("RUHANI") || react.includes("Ruhani khan") ||
react.includes("RUHANI KHAN") ||
react.includes("@Ruhani Khan")) {
    var msg = {
        body: `ｍ𝒆 𝓪 ģⓎι 𝕒ⓐ𝐏 𝓚丨 Ř𝐔Ⓗ𝓐ｎ𝕚 Ќ𝒽𝓪𝐧  🙂🥀`,attachment: fs.createReadStream(__dirname + `/noprefix/RUHANI-KHAN.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("♥️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      
