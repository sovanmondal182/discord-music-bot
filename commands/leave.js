module.exports = {
    name: "leave",
    description: "To leave the vc",
    aliases: ["dc"],
    execute(message) {
        const vc = message.member.voice.channel;
        if(vc) {
            const connection = vc.leave();
            message.react('👋')
        } else {
            message.reply('Ýou need to join vc first');
        }
    }
}