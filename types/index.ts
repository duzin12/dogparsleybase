import { Client, Message, ChatInputCommandInteraction } from 'discord.js'

export interface PrefixCommand {
  name: string
  description?: string
  prefix?: boolean // true = habilitado, false = desabilitado, undefined = true
  execute: (message: Message, args: string[], client: BotClient) => Promise<void>
}

export interface SlashCommand {
  name: string
  description: string
  slash?: boolean // true = habilitado, false = desabilitado, undefined = true
  execute: (interaction: ChatInputCommandInteraction, client: BotClient) => Promise<void>
}

export interface BotEvent {
  name: string
  once?: boolean
  execute: (...args: any[]) => Promise<void> | void
}

export interface BotClient extends Client {
  commands: Map<string, PrefixCommand>
  slashCommands: Map<string, SlashCommand>
}
