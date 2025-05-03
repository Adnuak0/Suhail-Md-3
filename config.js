const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348163707678";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_54_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzBXNnpZUmx5MFNtcUVBSXRYRERFRG5qS2NodXljVDZrRzdRU20rVEZyWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVZqYzg0c2xUZVM0OHVEa1U5MDJ0QVwiLFxuICBcInBob25lSWRcIjogXCJmZTVjNzFmNy1mMTZiLTQxMzItYmFkYS1mMjZkMjlkYTQ5ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICA0OSxcbiAgICAgIDE2NyxcbiAgICAgIDQwLFxuICAgICAgNDcsXG4gICAgICA3MSxcbiAgICAgIDMsXG4gICAgICAxNjgsXG4gICAgICA2LFxuICAgICAgMTEsXG4gICAgICAxODQsXG4gICAgICA2NSxcbiAgICAgIDI4LFxuICAgICAgMTAwLFxuICAgICAgMzMsXG4gICAgICAyMjMsXG4gICAgICAxMDAsXG4gICAgICAyNDEsXG4gICAgICAxOTEsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyMjksXG4gICAgICA0NCxcbiAgICAgIDIwMyxcbiAgICAgIDE1MixcbiAgICAgIDEwLFxuICAgICAgMjA2LFxuICAgICAgOTIsXG4gICAgICAxNzgsXG4gICAgICAxMzUsXG4gICAgICA0OSxcbiAgICAgIDEwOCxcbiAgICAgIDE4MyxcbiAgICAgIDQwLFxuICAgICAgMjQyLFxuICAgICAgMTk0LFxuICAgICAgMTk4LFxuICAgICAgMjQ1LFxuICAgICAgMTM2LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjhDTVdFREVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM3MDc2Nzg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3Nzc1MDg3MjU1NjM5OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01yVHU5NEJFSXo3MXNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3BtOUlCK3dGVGgyd0xUSnJTVEVGWHZ2bGM1OTJ3ckdhclZvNlZMUkFVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBcEU2NGJJaE53T3JjYzVXdHplak9ScThCWGdhV3ZJY1FVRkE5Uk45Rno4WVowU2NZa1FXOUZQNldxdUVlRmQyd2RjaDJod3AyM0JVMVpkc0pPcE5EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMitQQWplRW1WNnNnd2hzSGVqRFJSaVZUd1QycDZyNCt3d2tHckFqVXBJUFNrU0tIVXJCd3pOdEd5YjdqamF2eEUvUGVqdmdCbFNnc2pTTHdSNmFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYzNzA3Njc4OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2MjU1MjQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2M1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzeGlnMTE2ckw0MWsyVFpnUkI5ZWtVZ3ZlbUphWWtWQUp1ZklyN3EzZVo4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NjU0NTA5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjI1NTIxNjI5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
