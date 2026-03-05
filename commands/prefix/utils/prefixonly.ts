import { PrefixCommand } from '../../types/index'

const prefixOnly: PrefixCommand = {
  name: 'prefixonly',
  description: 'Comando apenas prefix!',
  prefix: true, // Apenas prefix
  async execute(message) {
    message.reply('🔒 Este comando só funciona com prefix!')
  }
}

export default prefixOnly