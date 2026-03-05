import { SlashCommand } from '../../types/index'

const hello: SlashCommand = {
  name: 'hello',
  description: 'Diz olá!',
  slash: true, // Ambos prefix e slash
  async execute(interaction) {
    interaction.reply('👋 Olá! (slash)')
  }
}

export default hello