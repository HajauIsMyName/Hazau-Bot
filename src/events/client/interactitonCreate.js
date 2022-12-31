module.exports = {
    name: "interationCreate",
    async execute(interation, client) {
        if (interation.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interation;
            const command = command.get(commandName);

            if (!command) {
                return;
            }

            try {
                await command.execute(interation, client);
            } catch ( err ) {
                console.error(err);

                await interation.reply({
                    content: "Something went wrong while executing this command"
                });
            }
        }
    }
}