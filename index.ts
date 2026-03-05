import { Client, GatewayIntentBits, Collection } from 'discord.js'
import { BotClient } from './types/index'
import { config } from './config'
import { logger } from './utils/logger'
import { loadPrefixCommands, loadSlashCommands } from './handlers/commandHandler'
import { loadEvents } from './handlers/eventHandler'

// Criar cliente tipado
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
}) as BotClient

// Inicializar coleções
client.commands = new Collection()
client.slashCommands = new Collection()

// Carregar handlers
logger.info('📦 Carregando comandos e eventos...')

await loadPrefixCommands(client)
await loadSlashCommands(client)
await loadEvents(client)

logger.info('🚀 Iniciando bot...')

// Login
client.login(config.token).catch((error) => {
  logger.error('❌ Erro ao fazer login', error)
  process.exit(1)
})