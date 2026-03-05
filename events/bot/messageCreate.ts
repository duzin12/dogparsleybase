import prefixes from "../../prefixes.json"

export default {
  name: "messageCreate",
  async execute(message: any, client: any) {
    if (message.author.bot) return

    const prefix = prefixes.default
    if (!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const cmd = args.shift()?.toLowerCase()

    const command = client.commands.get(cmd)
    if (command) command.execute(message, args, client)
  }
}