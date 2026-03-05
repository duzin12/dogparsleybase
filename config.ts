import 'dotenv/config'
import { logger } from './utils/logger'

interface Config {
  token: string
  ownerId: string
  prefix: string
}

function validateEnv(): Config {
  const token = process.env.TOKEN?.trim()
  const ownerId = process.env.OWNER_ID?.trim()
  const prefix = process.env.PREFIX?.trim() || '!'

  if (!token) {
    logger.error('❌ TOKEN não configurado no .env')
    process.exit(1)
  }

  if (!ownerId) {
    logger.error('❌ OWNER_ID não configurado no .env')
    process.exit(1)
  }

  logger.info(`✅ Variáveis de ambiente validadas`)
  logger.info(`📌 Prefix configurado: "${prefix}"`)

  return { token, ownerId, prefix }
}

export const config = validateEnv()