module.exports = {
  config: {
    name: "info",
    prefix: "auto",
    credits: "Nayan",
    aliases: ["info", "details"],
    permission: 0,
    description: "Displays detailed information about the admin, bot, and server",
    tags: ["Utility"],
  },
  start: async ({ event, api }) => {
    const { threadId } = event;

    const n = await api.getMe();

    
    const formatUptime = (uptime) => {
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const uptime = formatUptime(process.uptime());

    
    const adminInfo = `
《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》💫
♡︎🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : 『 ⩸__𝙽𝚒𝚜𝚊𝚗𝙶𝚙𝚝𝙱𝚘𝚝__⩸ 』
♡︎👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : /
♡︎💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : 『 ⩸__𝙽𝙸 𝚂 𝙰𝙽__⩸ 』
♡︎📝彡𝐴𝑔𝑒  : 『 ⩸__20__⩸ 』
☺︎︎💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: 𝚂𝙸𝙽𝙶𝙻𝙴 𝙿𝚁𝙾 𝙼𝙰𝚇
♡︎🌐彡𝑊𝑝 : _017××××××98
♡︎🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : https://www.facebook.com/profile.php?id=61567840496026
♡︎🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 :⩸__ https://m.me/61567840496026 __⩸
•===============•
`;

    
    const botInfo = `
𝐁𝐨𝐭 𝐈𝐧𝐟𝐨
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐍𝐚𝐦𝐞: ${n.username || "N/A"}
𝐁𝐨𝐭 𝐍𝐚𝐦𝐞       : ${n.first_name || "N/A"}
𝐁𝐨𝐭 𝐔𝐬𝐞𝐫 𝐈𝐃     : ${n.id || "N/A"}
`;

    
    const serverInfo = `
𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨
𝐒𝐞𝐫𝐯𝐞𝐫 𝐔𝐩𝐭𝐢𝐦𝐞      : ${uptime}
𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐨𝐝𝐞 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${process.version}
𝐌𝐞𝐦𝐨𝐫𝐲 𝐔𝐬𝐞𝐝      : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
`;

    const fullInfo = `${adminInfo}\n${botInfo}\n${serverInfo}`;
    await api.sendMessage(threadId, fullInfo.trim());
  },
};
