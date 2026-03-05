import { Client, GatewayIntentBits, Collection } from 'discord.js'
import config from './config'
import { loadCommands } from './handlers/commandHandler'
import { loadEvents } from './handlers/eventHandler'

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

;(client as any).commands = new Collection()

await loadCommands(client)
await loadEvents(client)

client.login(config.token)