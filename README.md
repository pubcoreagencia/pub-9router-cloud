# Repositório Oficial do 9Router Cloud (PUB REC HUB)

Servidor dedicado do 9Router rodando 24/7 com painel oficial de métricas, histórico de uso e gerenciamento de provedores de IA.

## Deploy com 1 Clique:

### 1. Render.com
- Crie um novo **Web Service** no [render.com](https://render.com)
- Aponte para este repositório
- Ambiente: **Docker**
- Porta: **20128**

### 2. Railway.app
- Crie um novo projeto no [railway.app](https://railway.app)
- Selecione **Deploy from GitHub repo**
- A porta `20128` será detectada automaticamente.

## Variáveis de Ambiente Obrigatórias (Secrets)

Nunca use senhas ou segredos hardcoded. Configure no painel do provedor:

- `DB_SECRET`: Segredo criptográfico para descriptografia do banco SQLite de credenciais (`encrypted-db.enc`). Se ausente, o serviço falha com `MISSING_REQUIRED_SECRET`.
- `INITIAL_PASSWORD`: Senha do painel web/admin definida em tempo de execução.
- `PORT`: `20128` (padrão do 9router).
- `HOST`: `0.0.0.0`

