import { SlashCommand } from '../../types/index'

const ping: SlashCommand = {
  name: 'ping',
  description: 'Responde com Pong!',
  slash: true, // Apenas slash
  async execute(interaction) {
    const sent = await interaction.reply({ content: '🏓 Pong!', fetchReply: true })
    const latency = sent.createdTimestamp - interaction.createdTimestamp
    await interaction.editReply(`🏓 Pong! (\`${latency}ms\`)`)
  }
}

export default ping
