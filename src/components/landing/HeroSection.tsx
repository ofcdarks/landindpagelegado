import { Button } from "@/components/ui/button";
import heroLuxury from "@/assets/hero-luxury.jpg";

const HeroSection = () => {
  return (
    <section className="section-fullpage"  style={{ scrollSnapAlign: 'start' }}>
      {/* Premium Background with parallax effect */}
      <div className="absolute inset-0">
        <img
          src={heroLuxury}
          alt="Ambiente elegante com Bíblia e flores"
          className="w-full h-full object-cover scale-110"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-40" />
      </div>

      {/* Animated decorative elements - hidden on mobile for performance */}
      <div className="absolute top-1/4 left-[5%] w-32 md:w-64 h-32 md:h-64 rounded-full bg-gold/10 blur-[60px] md:blur-[100px] floating-element" />
      <div className="absolute bottom-1/4 right-[5%] w-40 md:w-80 h-40 md:h-80 rounded-full bg-gold/8 blur-[80px] md:blur-[120px] floating-element-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gold/5 blur-[100px] md:blur-[150px] animate-pulse-soft" />
      
      {/* Decorative corner elements - smaller on mobile */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-l-2 border-t-2 border-gold/30 rounded-tl-xl md:rounded-tl-3xl" />
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-24 md:h-24 border-r-2 border-t-2 border-gold/30 rounded-tr-xl md:rounded-tr-3xl" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-l-2 border-b-2 border-gold/30 rounded-bl-xl md:rounded-bl-3xl hidden sm:block" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-24 md:h-24 border-r-2 border-b-2 border-gold/30 rounded-br-xl md:rounded-br-3xl hidden sm:block" />

      {/* Gold vertical line decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-8 md:px-12 py-16 sm:py-24 md:py-28">
        {/* Premium badge with glow */}
        <div className="animate-fade-up">
          <span className="premium-badge inline-flex items-center gap-3 mb-8 sm:mb-10 shine-effect">
            <span className="w-2 h-2 rounded-full bg-off-white animate-pulse" />
            Mentoria Exclusiva de 12 Meses
            <span className="w-2 h-2 rounded-full bg-off-white animate-pulse" />
          </span>
        </div>

        {/* Brand name in script font */}
        <div className="animate-fade-up delay-50 mb-6 pb-4">
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-gold drop-shadow-lg leading-[1.3] py-2">
            Estação Lar e Legado
          </h2>
        </div>

        {/* Main headline - cinematic typography */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-3 animate-fade-up delay-100 drop-shadow-md">
          <span className="inline">Restaure seu </span>
          <span className="inline text-gradient-shine italic text-shadow-gold">coração</span>
        </h1>

        <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground font-medium mb-6 animate-fade-up delay-200 drop-shadow-sm">
          e alinhe seu lar à vontade de <span className="text-gold font-semibold">Deus</span>
        </p>

        {/* Decorative divider */}
        <div className="flex justify-center mb-6 animate-fade-up delay-300">
          <div className="decorative-line" />
        </div>

        {/* Subheadline */}
        <p className="text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-2 animate-fade-up delay-300 leading-snug font-semibold drop-shadow-md">
          Nos próximos <span className="font-bold text-gold drop-shadow-lg">12 meses</span>, você será guiada pessoalmente para viver seu chamado feminino com
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-display font-bold text-foreground mb-6 animate-fade-up delay-400 drop-shadow-md">
          leveza, sabedoria e firmeza espiritual.
        </p>

        <p className="text-sm md:text-base text-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-500 leading-snug font-semibold drop-shadow-md">
          Torne-se uma mulher segundo o coração de Deus — curada das feridas da infância,
          vivendo como <span className="text-gold font-bold italic drop-shadow-lg">Maria</span> em tempos de Marta.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up delay-600 mb-6 sm:mb-8 flex flex-col items-center justify-center gap-4">
          <Button
            variant="premium"
            size="3xl"
            className="group pulse-glow text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 whitespace-normal h-auto w-full max-w-md"
            onClick={() => window.open("https://pay.kiwify.com.br/CdpFbFD", "_blank")}
          >
            <span className="text-center leading-tight">APENAS R$47 PARA VIVER ESTA ESTAÇÃO</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-700 group-hover:translate-x-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        {/* Secondary CTA */}
        <p className="text-sm text-muted-foreground animate-fade-up delay-700 mb-10">
          ⚡ <span className="text-gold font-semibold">Vagas limitadas</span> • Garantia de 7 dias
        </p>

        {/* Trust indicators - premium style - responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-fade-up delay-800 mb-16 sm:mb-32">
          {[
            { icon: "shield", text: "Garantia", subtext: "7 dias" },
            { icon: "calendar", text: "Acesso", subtext: "12 meses" },
            { icon: "lock", text: "Pagamento", subtext: "Seguro" },
            { icon: "star", text: "Famílias", subtext: "+2000" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-2 px-3 py-3 rounded-xl bg-card/70 backdrop-blur-md border border-gold/20 hover:border-gold/40 hover:shadow-gold transition-all duration-500"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-off-white" fill="currentColor" viewBox="0 0 20 20">
                  {item.icon === "shield" && (
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  )}
                  {item.icon === "calendar" && (
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  )}
                  {item.icon === "lock" && (
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  )}
                  {item.icon === "star" && (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  )}
                </svg>
              </div>
              <div className="text-center min-w-0">
                <p className="font-semibold text-foreground text-xs sm:text-sm">{item.text}</p>
                <p className="text-xs text-gold font-medium">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator - elegant - hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Descubra</span>
        <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
