import { PrefixCommand } from '../../types/index'

const hello: PrefixCommand = {
  name: 'hello',
  description: 'Diz olá!',
  prefix: true, // Ambos prefix e slash
  async execute(message) {
    message.reply('👋 Olá! (prefix)')
  }
}

export default hello