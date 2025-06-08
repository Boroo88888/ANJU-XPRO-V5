//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5NY1lRTzFibXhLdGF2UkJNdmwzTThnWlkvWDN0bFJTNzhrampWSnZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXRnRlZGWXBYY3pFd1R6aGZ4SHluYldlT3QwUnpwWlY3QkZPR0VLdkUxYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTjRvUytZb1pjbjYyMXQ4V214QkgrVW8xTzJLQ1RCb001aUlDQU9QTjNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVZGp0c3NhbyswcGdLNE1GSDNUVGtlTXZab0ZOZC9tV2Y2K3grYjZsMVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLTTNPMjlTaEllczU4NFo3dXZ2bzlZM2pFOGUxZDFzeWFQRkthRmxHMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkxM2JTMTQyaTJEaGs1c2FDbkNqT2VVbXNRUXdDWGJuRlUwN1l4Lzg0Ums9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK081UlRYYU40bGhLV0tuWVNNVHZ6K084RWE0T3VlODQ2K2hYbCtEOWQzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXdpQy9VTm1BcDZwUnRtQVVjZ0Q1Qlp3OWRTYkJpL0dwUDhES2oxUlNCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNcE04L0J0bnNWenJGYjBNWVZvZ3RhSkkrUkoxTmhZQkdvL1hSMGgwcWhuZTNxVW1uWjY0OW56c01ORkZ6Ky81bkFlQkhjN3I5cnhZRTA5QUNRVEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJleEdYUjdYbWFESXFMZkhHQ0l6bEN6NnFjOE9ablEwRWdRazlpQW5UVnY4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVTDlzbVZWWVNydTNHZ3FxQk9QRTFBIiwicGhvbmVJZCI6IjA2YWI1MTQwLTcyYmMtNDdmNy1hN2NmLTNlMzY5YjI1YThmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdTVmRnBzT256TUswdFgzSFp5em9IYzN1MVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVk1ZHNCSGd2K0thZUsvN2VtQ3gwaml2S3E4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZXOUNZRThZIiwibWUiOnsiaWQiOiI5NDcwMzk5NDQxMDozMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtLXhtLThtKzhtL/htKwiLCJsaWQiOiIyNTQyMDY4MzMzNzMxODk6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNjh6WllHRUpEbGxzSUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrNHlaQ0g4bEZEclAwdVU4WHZ1dGx0dXhFVWR6NDR6S01jV0xNTkFtYXpnPSIsImFjY291bnRTaWduYXR1cmUiOiJnYVdQRUs3UHZWcmNOcUlMMzd4UGc4ZmhUb3NPc2NaMXZCNDhTbmJkbThldEt6RHJYbFo3VXVobnhBVFVjRU9LdXV3b0xWVjhxTTVOT1hUdGlLKzVEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNFgzMXVxVURiOS9YV3NvVXExKzM4cjczSkk2MzdRalF4MytzU3VCRjVBUGVVbDkyazRCRlpoeC9yMkN6TkdlUEhobDlNVExocXlidHh3bTI2U0M3QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMzk5NDQxMDozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaT01tUWgvSlJRNno5TGxQRjc3clpiYnNSRkhjK09NeWpIRml6RFFKbXM0In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDkzOTgxNzQsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRytIIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94703994410",
  PASSWORD: 
    process.env.PASSWORD || "Ihara12@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
