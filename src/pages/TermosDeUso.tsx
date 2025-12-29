import { Link } from "react-router-dom";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-8 py-12 md:py-20 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
            Termos de Uso
          </h1>
          <p className="text-muted-foreground">Última atualização: {new Date().getFullYear()}</p>
        </div>

        {/* Content */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gold/10">
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site Estação Lar & Legado (https://talialmeida.com.br), você aceita estar 
                vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O Estação Lar & Legado oferece uma mentoria cristã exclusiva de 12 meses para mulheres, 
                incluindo acesso a módulos educacionais, aulas em vídeo, material de apoio, comunidade exclusiva 
                e sessões de mentoria. O serviço é fornecido através de plataforma digital com acesso mediante 
                pagamento único.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                3. Cadastro e Conta de Usuário
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para utilizar nossos serviços, você precisará criar uma conta fornecendo informações precisas e 
                atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                <li>Ser responsável por todas as atividades que ocorram sob sua conta</li>
                <li>Ter pelo menos 18 anos de idade ou ter autorização parental</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                4. Pagamento e Reembolso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O acesso à mentoria é fornecido mediante pagamento único. Oferecemos garantia de reembolso de 
                7 dias conforme nossa política de garantia. Após esse período, não serão aceitos pedidos de 
                reembolso, exceto conforme a legislação aplicável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Todos os preços estão em Reais (BRL) e podem ser alterados a qualquer momento, sendo que 
                alterações não afetarão compras já realizadas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                5. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo o conteúdo disponibilizado através da mentoria, incluindo mas não limitado a textos, 
                vídeos, áudios, imagens, materiais didáticos e design, é de propriedade exclusiva do 
                Estação Lar & Legado e/ou Tali Almeida, protegido por leis de direitos autorais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Você recebe uma licença limitada, não exclusiva e não transferível para acesso pessoal ao 
                conteúdo durante o período de sua assinatura. É expressamente proibido:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Reproduzir, distribuir ou compartilhar o conteúdo com terceiros</li>
                <li>Gravar, transmitir ou disponibilizar o conteúdo publicamente</li>
                <li>Usar o conteúdo para fins comerciais</li>
                <li>Remover marcas de propriedade ou avisos de direitos autorais</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                6. Conduta do Usuário
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao utilizar nossos serviços, você concorda em:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Respeitar outros membros da comunidade</li>
                <li>Não usar linguagem ofensiva, discriminatória ou inadequada</li>
                <li>Não compartilhar informações falsas ou enganosas</li>
                <li>Não tentar acessar áreas restritas ou violar a segurança do sistema</li>
                <li>Não usar nossos serviços para atividades ilegais</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O Estação Lar & Legado fornece os serviços "como estão". Não garantimos resultados específicos 
                e não somos responsáveis por decisões tomadas com base no conteúdo fornecido. Cada pessoa é 
                única e os resultados podem variar. Não nos responsabilizamos por danos diretos, indiretos, 
                incidentais ou consequenciais decorrentes do uso de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                8. Modificações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar estes Termos de Uso a qualquer momento. Alterações 
                significativas serão comunicadas através do site ou por e-mail. O uso contínuo de nossos 
                serviços após modificações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                9. Rescisão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de suspender ou encerrar sua conta a qualquer momento, sem aviso prévio, 
                se violar estes Termos de Uso. Você também pode encerrar sua conta a qualquer momento através 
                das configurações da plataforma.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                10. Lei Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
                tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                11. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco através do e-mail: 
                <a href="mailto:contato@estacaolar.com.br" className="text-gold hover:underline ml-1">
                  contato@estacaolar.com.br
                </a>
              </p>
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

export default TermosDeUso;

