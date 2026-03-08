import { readdir } from 'fs/promises'
import path from 'path'
import { BotClient, BotEvent } from '../types/index'
import { logger } from '../utils/logger'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function loadEvents(client: BotClient) {
  try {
    const eventsPath = path.join(__dirname, '../events')
    const folders = await readdir(eventsPath)

    for (const folder of folders) {
      const folderPath = path.join(eventsPath, folder)
      const files = await readdir(folderPath)

      for (const file of files) {
        if (!file.endsWith('.ts') && !file.endsWith('.js')) continue

        const filePath = path.join(folderPath, file)
        const eventModule = await import(filePath)
        const event: BotEvent = eventModule.default

        if (!event.name) {
          logger.warn(`⚠️  Evento sem name em ${file}`)
          continue
        }

        if (event.once) {
          client.once(event.name, (...args) => event.execute(...args, client))
        } else {
          client.on(event.name, (...args) => event.execute(...args, client))
        }
      }
    }

    logger.info('✅ Eventos carregados')
  } catch (error) {
    logger.error('❌ Erro ao carregar eventos', error as Error)
  }
}