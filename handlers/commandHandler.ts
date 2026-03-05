import { readdir } from 'fs/promises'
import path from 'path'
import { BotClient, PrefixCommand } from '../types/index'
import { logger } from '../utils/logger'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function loadPrefixCommands(client: BotClient) {
  try {
    const commandsPath = path.join(__dirname, '../commands/prefix')
    const folders = await readdir(commandsPath)

    for (const folder of folders) {
      const folderPath = path.join(commandsPath, folder)
      const files = await readdir(folderPath)

      for (const file of files) {
        if (!file.endsWith('.ts') && !file.endsWith('.js')) continue

        const filePath = path.join(folderPath, file)
        const command = await import(filePath)
        const prefixCommand: PrefixCommand = command.default

        if (!prefixCommand.name) {
          logger.warn(`⚠️  Comando sem name em ${file}`)
          continue
        }

        // Verificar se o comando está habilitado para prefix
        if (prefixCommand.prefix === false) {
          logger.debug(`⏭️  Comando ${prefixCommand.name} desabilitado para prefix`)
          continue
        }

        client.commands.set(prefixCommand.name, prefixCommand)
      }
    }

    logger.info(`✅ ${client.commands.size} prefix command(s) carregado(s)`)
  } catch (error) {
    logger.error('❌ Erro ao carregar prefix commands', error as Error)
  }
}

export async function loadSlashCommands(client: BotClient) {
  try {
    const commandsPath = path.join(__dirname, '../commands/slash')
    const files = await readdir(commandsPath)

    for (const file of files) {
      if (!file.endsWith('.ts') && !file.endsWith('.js')) continue

      const filePath = path.join(commandsPath, file)
      const command = await import(filePath)

      if (!command.default) continue

      const slashCommand = command.default
      if (!slashCommand.name) {
        logger.warn(`⚠️  Slash command sem name em ${file}`)
        continue
      }

      // Verificar se o comando está habilitado para slash
      if (slashCommand.slash === false) {
        logger.debug(`⏭️  Comando ${slashCommand.name} desabilitado para slash`)
        continue
      }

      client.slashCommands.set(slashCommand.name, slashCommand)
    }

    logger.info(`✅ ${client.slashCommands.size} slash command(s) carregado(s)`)
  } catch (error) {
    logger.error('❌ Erro ao carregar slash commands', error as Error)
  }
}