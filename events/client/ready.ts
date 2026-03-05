import { BotEvent, BotClient } from '../../types/index'
import { logger } from '../../utils/logger'

const ready: BotEvent = {
  name: 'ready',
  once: true,
  execute(client: BotClient) {
    logger.info(`✅ Bot logado como ${client.user?.tag}`)
  }
}

export default ready