//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xjUHpmN1FKZFhaWHV1MUlJblZ3QjBoZG10eGlOQk14bGJqK1hXcDZYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHgwQWdsWjdGc2U4UDRya0ZiSExhTjRQNVBmT21aZGRiNzgzNFFGaGtnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTW52dGI5cVk5MC9TcnZhQTBpVmNYQlc0OFZVdFZJL0pqcnFIUUhOLzNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SFVNTWE4ZW11YVN1Q1VJNUxQNGcyM29zaWxXSytDMTJOTjlWYklFRFZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDb053ZU5TbjRqemZ6ZUV5RFRFSGpoQlU2Yk9YMmY5UzR2WjFaVjUySGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBZWWVjVTErZExTRDdtNnlWMktXNHJGb2l0TjBHUmx4ZHlzYWpnbFA4M3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURZckNUNFM2MU1nbUJMMFk4SHg5YmV6RFRpVVJqMCtIZXNzS1VMeUtGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjA4MTM3SkNvaWh0aVFDWmNRM3Y4MXZhNE14SzdpVkx6R29xd0Q0U2V6OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im52TzJoU2k1SmQzczFEU2pTeGp4V2V4T09qQnM4aFYxUmNtNmdMVm5ybm9lUHNLRnJ6bjVGQWt5RWNlMWhMMWtmYk5NNnVTMXptNGZZVXJkbThHd2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IlpQRnI1OE5ZNXN2eTBJYzN6eDRldU9XM2NCL0JlVmthQ2tqeHRCWGk0N3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVac3RGQXZKUWxXaHloVnM0cGk0M2ciLCJwaG9uZUlkIjoiZDM5ZjBhODAtYWY5MS00NjM4LTk0OTItMzU5OTgxNzc5NmU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81MDREeXc2QnY3ZWlBK082T1lGMHcxTnZOST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOVXhGZXZ4UzNVakZzQ2d2RUxNNndzTVVxYkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEg3UktOUUoiLCJtZSI6eyJpZCI6IjIzNDcwNDA0NjMzOTE6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+VMKlRyDDl82cw5cgR0hPU1Q/wr/CpVR+4oC64oC64oC64oC64oC68JODtSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlYenJRR0VPYWFtN2NHR0I0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2ExNFB1eTFTOUdDZ0FKd29tRko3MWJuekFqZnZHdDBtYTNMYy82RTRuND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaXhnU3pkcFJuOFVEeGhsMG1BZG03ald5bCtBNUhlQmxkWTZRMStVK2JhdXNiVm9yYmtoNjNIU0Qwelg1VHlsOTdnMTVIQzhkUW00WjMwMk5qVVEvRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImdTT0haUmdvaDVzYnJMNlRISTROU1piK3ROczZuQkxXSWJmOXl5QXd2QTNBRERzS0cza2ZWWHIzSVd1TEYraTByNmU0UUNKZGxkaDZpdEoyWmV5NWdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDQ2MzM5MTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQydGVEN3N0VXZSZ29BQ2NLSmhTZTlXNTh3STM3eHJkSm10eTNQK2hPSisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0MDE5MDh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
