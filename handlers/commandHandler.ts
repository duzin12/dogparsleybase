import { readdir } from "fs/promises"

export async function loadCommands(client: any) {
  const folders = await readdir("./commands")

  for (const folder of folders) {
    const files = await readdir(`./commands/${folder}`)

    for (const file of files) {
      const command = await import(`../commands/${folder}/${file}`)
      client.commands.set(command.default.name, command.default)
    }
  }

  console.log("✅ Comandos carregados")
}