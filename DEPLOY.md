# Guia de Deploy no Easypanel

Este guia explica como fazer o deploy desta landing page no Easypanel.

## Pré-requisitos

- Conta no Easypanel
- VPS configurada e conectada ao Easypanel
- Repositório Git com o código da aplicação

## Passos para Deploy

### 1. Preparar o Repositório

Certifique-se de que todos os arquivos necessários estão commitados:
- `Dockerfile`
- `nginx.conf`
- `.dockerignore`
- `package.json`
- Todo o código fonte

### 2. Criar Nova Aplicação no Easypanel

1. Acesse o painel do Easypanel
2. Clique em "New App" ou "Nova Aplicação"
3. Selecione "Docker" como tipo de aplicação

### 3. Configurar a Aplicação

**Configurações básicas:**
- **Name**: `landing-page` (ou o nome que preferir)
- **Source**: Selecione seu repositório Git
- **Branch**: `main` ou `master` (conforme seu repositório)
- **Dockerfile**: `Dockerfile` (deve ser detectado automaticamente)
- **Context**: `.` (diretório raiz)

**Portas:**
- Porta interna: `80`
- Porta externa: Deixe o Easypanel atribuir automaticamente ou configure conforme necessário

**Variáveis de Ambiente:**
- Não são necessárias para esta aplicação (é uma landing page estática)

### 4. Deploy

1. Clique em "Deploy" ou "Deploy Now"
2. Aguarde o build e deploy completarem
3. O Easypanel irá:
   - Fazer o build da imagem Docker
   - Criar o container
   - Iniciar o serviço

### 5. Verificar o Deploy

Após o deploy:
1. Verifique os logs no Easypanel para garantir que não há erros
2. Acesse a URL fornecida pelo Easypanel
3. Teste a aplicação para garantir que está funcionando

### 6. Configurar Domínio (Opcional)

1. No painel do Easypanel, vá em "Domains" ou "Domínios"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruções do Easypanel
4. Aguarde a propagação DNS (pode levar algumas horas)

## Estrutura dos Arquivos de Deploy

- **Dockerfile**: Define o processo de build e execução
- **nginx.conf**: Configuração do servidor web nginx
- **.dockerignore**: Arquivos ignorados no build Docker
- **easypanel.yml**: Configuração opcional para o Easypanel

## Comandos Úteis

### Build local (para testar)

```bash
docker build -t landing-page .
docker run -p 8080:80 landing-page
```

Acesse `http://localhost:8080` para testar localmente.

### Verificar logs

No Easypanel, use a aba "Logs" para ver os logs da aplicação.

## Troubleshooting

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Confirme que o Dockerfile está correto
- Veja os logs de build no Easypanel

### Aplicação não carrega
- Verifique se a porta está configurada corretamente
- Confirme que o nginx está rodando (veja os logs)
- Teste o endpoint `/health` para verificar se o servidor responde

### Rotas não funcionam (404)
- O `nginx.conf` já está configurado para lidar com SPA routing
- Certifique-se de que o arquivo `nginx.conf` está sendo copiado corretamente no Dockerfile

## Atualizações

Para atualizar a aplicação:
1. Faça commit das alterações no Git
2. No Easypanel, clique em "Redeploy" ou configure auto-deploy
3. Aguarde o novo build e deploy

## Suporte

Para mais informações sobre o Easypanel, consulte a [documentação oficial](https://easypanel.io/docs).

