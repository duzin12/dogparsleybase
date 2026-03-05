import { PrefixCommand } from '../../types/index'

const disabled: PrefixCommand = {
  name: 'disabled',
  description: 'Este comando está desabilitado',
  prefix: false, // Desabilitado
  async execute(message) {
    message.reply('❌ Este comando não deveria funcionar!')
  }
}

export default disabled