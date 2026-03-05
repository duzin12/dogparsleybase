import { BotEvent, BotClient } from '../../types/index'
import { config } from '../../config'
import { logger } from '../../utils/logger'
import { Message } from 'discord.js'

const messageCreate: BotEvent = {
  name: 'messageCreate',
  async execute(message: Message, client: BotClient) {
    if (message.author.bot) return

    // Prefix commands
    if (message.content.startsWith(config.prefix)) {
      const args = message.content.slice(config.prefix.length).trim().split(/ +/)
      const commandName = args.shift()?.toLowerCase()

      if (!commandName) return

      const command = client.commands.get(commandName)
      if (!command) return

      try {
        await command.execute(message, args, client)
      } catch (error) {
        logger.error(`Erro ao executar comando ${commandName}`, error as Error)
        message.reply('❌ Erro ao executar comando').catch(() => {})
      }
    }
  }
}

export default messageCreate