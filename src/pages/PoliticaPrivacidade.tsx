import { Link } from "react-router-dom";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-8 py-12 md:py-20 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">Última atualização: {new Date().getFullYear()}</p>
        </div>

        {/* Content */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gold/10">
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                1. Introdução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O Estação Lar & Legado ("nós", "nosso" ou "empresa") está comprometido com a proteção da 
                privacidade e dos dados pessoais de nossos usuários. Esta Política de Privacidade descreve como 
                coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a 
                Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos as seguintes informações quando você utiliza nossos serviços:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Informações de Cadastro:</strong> nome completo, e-mail, telefone</li>
                <li><strong>Informações de Pagamento:</strong> processadas através de plataformas seguras de pagamento (não armazenamos dados completos de cartão de crédito)</li>
                <li><strong>Dados de Uso:</strong> informações sobre como você acessa e utiliza nossos serviços, incluindo endereço IP, tipo de navegador, páginas visitadas</li>
                <li><strong>Comunicações:</strong> mensagens, comentários e interações através de nossa plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                3. Como Utilizamos suas Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar pagamentos e gerenciar sua conta</li>
                <li>Enviar comunicações relacionadas ao serviço, incluindo atualizações e notificações</li>
                <li>Responder a suas solicitações e fornecer suporte ao cliente</li>
                <li>Personalizar sua experiência e recomendar conteúdo relevante</li>
                <li>Garantir a segurança e prevenir fraudes</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Provedores de Serviços:</strong> com empresas que nos auxiliam a operar nossa plataforma (processamento de pagamentos, hospedagem, análise de dados), sujeitos a acordos de confidencialidade</li>
                <li><strong>Obrigações Legais:</strong> quando necessário para cumprir leis, regulamentações ou processos legais</li>
                <li><strong>Proteção de Direitos:</strong> para proteger nossos direitos, propriedade ou segurança, bem como de nossos usuários</li>
                <li><strong>Com seu Consentimento:</strong> em outras situações, quando você nos autorizar explicitamente</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia SSL, 
                sistemas de segurança, controle de acesso restrito e monitoramento regular. No entanto, nenhum 
                método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                6. Retenção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
                descritos nesta política, a menos que um período de retenção mais longo seja exigido ou 
                permitido por lei. Quando não houver mais necessidade de reter seus dados, eles serão excluídos 
                ou anonimizados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                7. Seus Direitos (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Acesso:</strong> solicitar uma cópia dos dados pessoais que mantemos sobre você</li>
                <li><strong>Correção:</strong> solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Exclusão:</strong> solicitar a exclusão de dados pessoais desnecessários ou tratados em desconformidade</li>
                <li><strong>Portabilidade:</strong> solicitar a portabilidade de seus dados para outro fornecedor</li>
                <li><strong>Revogação de Consentimento:</strong> retirar seu consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> opor-se ao tratamento de dados em certas circunstâncias</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer esses direitos, entre em contato conosco através do e-mail: 
                <a href="mailto:contato@estacaolar.com.br" className="text-gold hover:underline ml-1">
                  contato@estacaolar.com.br
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do 
                site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas 
                isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                9. Menores de Idade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossos serviços são destinados a pessoas com pelo menos 18 anos. Não coletamos intencionalmente 
                informações de menores de idade. Se tomarmos conhecimento de que coletamos dados de um menor, 
                tomaremos medidas para excluir essas informações imediatamente.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                10. Alterações nesta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre 
                mudanças significativas publicando a nova política nesta página e atualizando a data de 
                "Última atualização". Recomendamos que você revise esta política periodicamente.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                11. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade 
                ou ao tratamento de seus dados pessoais, entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>E-mail:</strong> <a href="mailto:contato@estacaolar.com.br" className="text-gold hover:underline">contato@estacaolar.com.br</a>
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>Responsável pelo Tratamento de Dados:</strong> Tali Almeida
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;

