const config = require("../config.js");
const functions = require("../functions.js");

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "ready",
    async execute(client) {
        client.user.setPresence({ activities: [{ name: `My eyes are always on you๐` }], status: "online" });
        client.channels.cache.get(config.logch.ready).send({
            embeds: [
                new EmbedBuilder()
                .setTitle("่ตทๅๅฎไบ")
                .setDescription("> Botใ่ตทๅใใพใใใ\n> ้ๅถๆๅฝ่ใฏๅไฝใใงใใฏใใ้กใใใพใใ")
                .setColor(config.color)
                .setTimestamp()
            ]
        });
        console.log(`[${functions.timeToJST(Date.now(), true)}] Logged in as ${client.user.tag}!`);
        client.users.cache.get(config.dev.developer[0]).send('่ตทๅใใใงใ')
    }
}