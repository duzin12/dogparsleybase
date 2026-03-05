import { readdir } from "fs/promises"

export async function loadEvents(client: any) {
  const folders = await readdir("./events")

  for (const folder of folders) {
    const files = await readdir(`./events/${folder}`)

    for (const file of files) {
      const event = await import(`../events/${folder}/${file}`)
      client.on(event.default.name, (...args: any[]) =>
        event.default.execute(...args, client)
      )
    }
  }

  console.log("✅ Eventos carregados")
}
