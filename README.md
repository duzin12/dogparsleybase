# 🤖 Duzin Bot - Comandos Flexíveis

Bot Discord com suporte a **prefix commands**, **slash commands** e **ambos**!

## 🎯 Sistema de Configuração de Comandos

Cada comando pode ser configurado para funcionar apenas como prefix, apenas como slash, ou ambos:

### ✅ Apenas Prefix
```typescript
const comando: PrefixCommand = {
  name: 'ping',
  prefix: true,  // Apenas prefix
  async execute(message) {
    message.reply('🏓 Pong!')
  }
}
```

### ✅ Apenas Slash
```typescript
const comando: SlashCommand = {
  name: 'ping',
  slash: true,   // Apenas slash
  async execute(interaction) {
    interaction.reply('🏓 Pong!')
  }
}
```

### ✅ Ambos (Padrão)
```typescript
// Prefix
const comandoPrefix: PrefixCommand = {
  name: 'hello',
  prefix: true,  // Funciona com prefix
  async execute(message) {
    message.reply('👋 Olá! (prefix)')
  }
}

// Slash
const comandoSlash: SlashCommand = {
  name: 'hello',
  slash: true,   // Funciona com slash
  async execute(interaction) {
    interaction.reply('👋 Olá! (slash)')
  }
}
```

### ❌ Desabilitar Comando
```typescript
const comando: PrefixCommand = {
  name: 'disabled',
  prefix: false, // Não carrega
  async execute(message) {
    // Nunca será executado
  }
}
```

## 📋 Comandos de Exemplo

### Prefix Commands (`!comando`)
- `!ping` - Apenas prefix
- `!hello` - Ambos (prefix e slash)
- `!prefixonly` - Apenas prefix

### Slash Commands (`/comando`)
- `/ping` - Apenas slash
- `/hello` - Ambos (prefix e slash)
- `/slashonly` - Apenas slash

## 🚀 Como Usar

1. **Configure o prefix no `.env`**:
```env
PREFIX=!
```

2. **Execute o bot**:
```bash
bun start
```

3. **Teste os comandos**:
- `!ping` → Funciona
- `/ping` → Funciona
- `!hello` → Funciona
- `/hello` → Funciona
- `!prefixonly` → Funciona
- `/prefixonly` → Não funciona
- `!slashonly` → Não funciona
- `/slashonly` → Funciona

## 📁 Estrutura

```
commands/
├── prefix/          # Comandos prefix
│   └── utils/
│       ├── ping.ts      # prefix: true
│       ├── hello.ts     # prefix: true
│       ├── prefixonly.ts # prefix: true
│       └── disabled.ts  # prefix: false (não carrega)
└── slash/           # Comandos slash
    ├── ping.ts      # slash: true
    ├── hello.ts     # slash: true
    ├── slashonly.ts # slash: true
    └── disabled.ts  # slash: false (não carrega)
```

## 🎨 Criando Novos Comandos

### Comando Prefix:
```typescript
// commands/prefix/utils/meucomando.ts
import { PrefixCommand } from '../../../types/index'

const meuComando: PrefixCommand = {
  name: 'meucomando',
  description: 'Descrição do comando',
  prefix: true, // ou false para desabilitar
  async execute(message, args, client) {
    message.reply('Olá!')
  }
}

export default meuComando
```

### Comando Slash:
```typescript
// commands/slash/meucomando.ts
import { SlashCommand } from '../../../types/index'

const meuComando: SlashCommand = {
  name: 'meucomando',
  description: 'Descrição do comando',
  slash: true, // ou false para desabilitar
  async execute(interaction, client) {
    interaction.reply('Olá!')
  }
}

export default meuComando
```

## ⚙️ Configurações

- **`prefix: true`** → Carrega como comando prefix
- **`prefix: false`** → Não carrega como comando prefix
- **`prefix: undefined`** → Carrega como comando prefix (padrão)
- **`slash: true`** → Carrega como comando slash
- **`slash: false`** → Não carrega como comando slash
- **`slash: undefined`** → Carrega como comando slash (padrão)

## 🔧 Funcionalidades

✅ **Flexibilidade total** - Cada comando pode escolher seu tipo
✅ **TypeScript completo** - Tipagem forte
✅ **Logger profissional** - Com timestamps
✅ **Error handling** - Tratamento de erros automático
✅ **Config validada** - Verificação de variáveis de ambiente
✅ **Hot reload** - `bun dev` para desenvolvimento