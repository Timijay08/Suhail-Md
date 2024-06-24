const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347063384471";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_07_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVFdWZGc2SWNZKzluejl4Tm1oM2tzaWp4bG9wOXpZRnJYV3NsQWNHQVlzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3kwb1hlaEhRQkNMV0tvRGVRTWdvQVwiLFxuICBcInBob25lSWRcIjogXCI2OWMyZTdiZS01ZGQ3LTRkN2MtOGJjZi00MTQyYzY1MzY0MThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTE5LFxuICAgICAgMTUzLFxuICAgICAgMTAsXG4gICAgICAyMzIsXG4gICAgICAxMSxcbiAgICAgIDI0OCxcbiAgICAgIDU2LFxuICAgICAgMTQyLFxuICAgICAgMjE0LFxuICAgICAgMjQxLFxuICAgICAgMTkwLFxuICAgICAgNzgsXG4gICAgICAyMyxcbiAgICAgIDExMyxcbiAgICAgIDE3MSxcbiAgICAgIDMxLFxuICAgICAgMjEwLFxuICAgICAgOCxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMzIsXG4gICAgICAxMTQsXG4gICAgICAyNDgsXG4gICAgICAyLFxuICAgICAgMTc0LFxuICAgICAgMTM2LFxuICAgICAgNTMsXG4gICAgICAyMTYsXG4gICAgICAxNTgsXG4gICAgICA2MyxcbiAgICAgIDExMSxcbiAgICAgIDE2MCxcbiAgICAgIDE4NCxcbiAgICAgIDE5OSxcbiAgICAgIDE1LFxuICAgICAgMjcsXG4gICAgICA0LFxuICAgICAgNzgsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1NSUzJDQVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjMzODQ0NzE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRpbWkgSmF5XCIsXG4gICAgXCJsaWRcIjogXCI0NzczMDEyMjU5NjU2NzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091ZXZMWURFS2pTNUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0Z1Y0hNNWErcUNNNmpBTDEvUVlxaVA1aDZMbE5vVWNQTG1sQnFOU2N5UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZSHJsMFU1WXVHeW91NGt2YnFieXhEb3JWVDhsdEhOWEpJbnZlcmpsdzltYTU1R01CcThYN0U2MFptNnlCQXQrckdzTzJIcDcwdnRFZGZidzRtclpBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiMTlBaDlvVURmalRrd2pmTVRSR2JKeEtvZHkyUUpmWDEwY2QxRXVhZUxPclFLYllYMmJ6QVVDK2JxTHQzVE40RVhOMnNFejd0MVpUMXBsSU4vTENEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYzMzg0NDcxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjE2NDI5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
