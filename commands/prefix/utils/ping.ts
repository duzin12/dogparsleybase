import { PrefixCommand } from '../../types/index'

const ping: PrefixCommand = {
  name: 'ping',
  description: 'Responde com Pong!',
  prefix: true, // Apenas prefix
  async execute(message) {
    const sent = await message.reply('🏓 Pong!')
    const latency = sent.createdTimestamp - message.createdTimestamp
    await sent.edit(`🏓 Pong! (\`${latency}ms\`)`)
  }
}

export default ping
