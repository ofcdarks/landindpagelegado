# Como Configurar SSL/HTTPS no Easypanel

O site está aparecendo como "Não seguro" porque o SSL/HTTPS não está configurado. Siga estes passos:

## Opção 1: SSL Automático pelo Easypanel (Recomendado)

O Easypanel geralmente gerencia SSL automaticamente através do Traefik (proxy reverso). Você só precisa configurar o domínio corretamente:

### Passos:

1. **Acesse o painel do Easypanel**
   - Vá para sua aplicação `landing-page`

2. **Configure o Domínio**
   - Clique na aba "Domains" ou "Domínios"
   - Adicione seu domínio: `talialmeida.com.br`
   - O Easypanel irá configurar automaticamente o SSL através do Let's Encrypt

3. **Configure os Registros DNS**
   - No seu provedor de DNS (onde você gerencia o domínio):
   - Configure um registro **A** apontando para o IP do seu servidor VPS
   - Ou configure um registro **CNAME** se o Easypanel fornecer um domínio
   - Aguarde a propagação DNS (pode levar alguns minutos a algumas horas)

4. **Aguarde o Certificado SSL**
   - O Easypanel irá automaticamente:
     - Detectar o domínio
     - Gerar um certificado SSL gratuito via Let's Encrypt
     - Configurar o HTTPS
   - Isso geralmente leva alguns minutos após a propagação DNS

5. **Verifique o SSL**
   - Após alguns minutos, acesse `https://talialmeida.com.br`
   - O certificado deve estar ativo e o site deve aparecer como "Seguro"

## Opção 2: Configuração Manual (Se necessário)

Se o SSL automático não funcionar, você pode precisar verificar:

### Verificar Configuração no Easypanel:

1. **Verifique se a aplicação está exposta corretamente**
   - Porta interna: `80` (HTTP)
   - O proxy reverso do Easypanel deve redirecionar HTTPS → HTTP

2. **Verifique se o domínio está configurado**
   - Certifique-se de que `talialmeida.com.br` está adicionado como domínio
   - Verifique se não há erros na configuração

3. **Forçar HTTPS (opcional)**
   - Se necessário, adicione uma regra de redirecionamento no Easypanel
   - Geralmente há uma opção "Force HTTPS" ou "Redirect HTTP to HTTPS"

## Troubleshooting

### SSL não está funcionando

1. **Verifique os logs**
   - Veja os logs da aplicação no Easypanel
   - Verifique se há erros relacionados a SSL/certificados

2. **Verifique o DNS**
   - Use ferramentas como `nslookup talialmeida.com.br` ou `dig talialmeida.com.br`
   - Confirme que o domínio está apontando para o IP correto

3. **Aguarde mais tempo**
   - Let's Encrypt pode levar até 1 hora para gerar o certificado
   - A propagação DNS pode levar algumas horas

4. **Verifique as portas**
   - Certifique-se de que as portas 80 (HTTP) e 443 (HTTPS) estão abertas no firewall do servidor

### Certificado expirado ou inválido

- O Easypanel deve renovar automaticamente via Let's Encrypt
- Se o certificado expirar, tente remover e readicionar o domínio no painel

## Notas Importantes

- A aplicação (nginx) está configurada para escutar apenas na porta 80 (HTTP)
- O Easypanel gerencia o SSL através do seu proxy reverso (Traefik)
- Não é necessário modificar o nginx.conf para SSL quando usando o proxy do Easypanel
- O certificado Let's Encrypt é gratuito e renovado automaticamente

## Suporte

Se ainda tiver problemas:
- Consulte a [documentação oficial do Easypanel sobre SSL](https://easypanel.io/docs)
- Verifique a seção de domínios no painel do Easypanel
- Entre em contato com o suporte do Easypanel

