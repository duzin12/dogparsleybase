import { SlashCommand } from '../../types/index'

const slashOnly: SlashCommand = {
  name: 'slashonly',
  description: 'Comando apenas slash!',
  slash: true, // Apenas slash
  async execute(interaction) {
    interaction.reply('🔒 Este comando só funciona com slash!')
  }
}

export default slashOnly