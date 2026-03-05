export default {
  name: "ready",
  once: true,
  execute(client: any) {
    console.log(`🤖 Logado como ${client.user.tag}`)
  }
}