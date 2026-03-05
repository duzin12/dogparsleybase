import { SlashCommand } from '../../types/index'

const disabled: SlashCommand = {
  name: 'disabled',
  description: 'Este comando está desabilitado',
  slash: false, // Desabilitado
  async execute(interaction) {
    interaction.reply('❌ Este comando não deveria funcionar!')
  }
}

export default disabled