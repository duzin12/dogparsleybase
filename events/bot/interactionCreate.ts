import { BotEvent, BotClient } from '../../types/index'
import { ChatInputCommandInteraction } from 'discord.js'
import { logger } from '../../utils/logger'

const interactionCreate: BotEvent = {
  name: 'interactionCreate',
  async execute(interaction: ChatInputCommandInteraction, client: BotClient) {
    if (!interaction.isChatInputCommand()) return

    const command = client.slashCommands.get(interaction.commandName)
    if (!command) return

    try {
      await command.execute(interaction, client)
    } catch (error) {
      logger.error(`Erro ao executar slash command ${interaction.commandName}`, error as Error)
      await interaction.reply({ content: '❌ Erro ao executar comando', ephemeral: true }).catch(() => {})
    }
  }
}

export default interactionCreate
