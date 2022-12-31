const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Return bot ping"),

    async execute(interation, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createTimestamp - interation.createTimestamp}`

        await interation.editReply({
            content: newMessage
        });
    }
}