export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

class Logger {
  private level: LogLevel = LogLevel.INFO

  setLevel(level: LogLevel) {
    this.level = level
  }

  private format(level: string, message: string): string {
    const now = new Date().toLocaleTimeString()
    return `[${now}] [${level}] ${message}`
  }

  debug(message: string) {
    if (this.level <= LogLevel.DEBUG) {
      console.log(this.format('DEBUG', message))
    }
  }

  info(message: string) {
    if (this.level <= LogLevel.INFO) {
      console.log(this.format('INFO', message))
    }
  }

  warn(message: string) {
    if (this.level <= LogLevel.WARN) {
      console.warn(this.format('WARN', message))
    }
  }

  error(message: string, error?: Error) {
    if (this.level <= LogLevel.ERROR) {
      console.error(this.format('ERROR', message))
      if (error) console.error(error)
    }
  }
}

export const logger = new Logger()
