
import React from 'react';
import { COMBOS, FEATURES } from './constants';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const PIX_LINK = "https://typebot.co/ativadordecachos";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Banner */}
      <div className="bg-purple-900 text-white text-center py-2 text-xs md:text-sm font-semibold uppercase tracking-widest px-4">
        🔥 Estoque promocional limitado • Frete fixo Nordeste: R$19,90
      </div>

      {/* Nova Faixa Laranja Chamativa */}
      <div className="bg-amber-500 text-white py-3 px-4 shadow-md relative z-20">
        <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4">
          <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <span className="text-sm md:text-lg font-bold uppercase tracking-tight text-center">
            Entregamos no seu endereço com toda segurança
          </span>
          <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24 border-b border-slate-50">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
              Definição Profissional <br/>
              <span className="text-purple-600 underline decoration-purple-200 underline-offset-8">Para seus Cachos</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Resultado de salão, zero frizz e definição intensa. Hidratação profunda com brilho imediato que dura o dia todo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#combos" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
                Ver Promoções de Hoje
              </a>
              <a href="#sobre" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all">
                Saber Mais
              </a>
            </div>
            
            {/* User Requested Image */}
            <div className="mt-12 flex justify-center px-4">
              <img 
                src="https://i.ibb.co/0vL9gsW/Whats-App-Image-2026-02-17-at-12-37-33.jpg" 
                alt="Resultado Cachos" 
                className="w-full max-w-3xl rounded-3xl shadow-2xl border-8 border-white transform hover:scale-[1.01] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section id="combos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha seu Combo Ideal</h2>
            <p className="text-slate-500">Aproveite nossos descontos progressivos e garanta seu estoque</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-8">
            {COMBOS.map((combo) => (
              <div 
                key={combo.id} 
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg border-t-4 ${
                  combo.color === 'emerald' ? 'border-emerald-500' : 
                  combo.color === 'purple' ? 'border-purple-600' : 
                  'border-blue-500'
                } transition-all hover:shadow-2xl flex flex-col`}
              >
                {combo.tag && (
                  <div className={`absolute top-4 right-4 z-20 px-4 py-1 rounded-full text-white text-xs font-bold ${
                    combo.color === 'emerald' ? 'bg-emerald-500' : 
                    combo.color === 'purple' ? 'bg-purple-600 shadow-lg scale-110' : 
                    'bg-blue-500'
                  }`}>
                    {combo.tag}
                  </div>
                )}
                
                {/* Image & Price Area */}
                <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden bg-white">
                  <img 
                    src={combo.imageUrl} 
                    alt={combo.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-2" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <p className="text-sm opacity-90 line-through font-bold">De R$ {combo.oldPrice.toFixed(2)}</p>
                    <p className="text-3xl font-black drop-shadow-md">R$ {combo.newPrice.toFixed(2)}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{combo.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{combo.description}</p>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {combo.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <svg className={`w-5 h-5 ${
                          combo.color === 'emerald' ? 'text-emerald-500' : 
                          combo.color === 'purple' ? 'text-purple-600' : 
                          'text-blue-500'
                        }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {b}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <p className="text-center text-slate-900 font-semibold mb-1 text-lg">
                      ou <span className="text-purple-600">{combo.installments}</span> no cartão
                    </p>
                    <p className="text-center text-emerald-600 text-[10px] md:text-xs font-bold mb-4 uppercase tracking-tighter">
                      ✅ Frete fixo de R$ 19,90 já incluso • Sem taxas extras
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <a 
                        href={PIX_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 rounded-xl text-white font-bold text-sm shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                          combo.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' : 
                          combo.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : 
                          'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        QUERO NO PIX
                      </a>
                      
                      <form method='post' action='https://cieloecommerce.cielo.com.br/transactionalvnext/order/buynow' target='blank'>
                        <input type='hidden' name='id' value={combo.cieloId} />
                        <button type="submit" className={`w-full py-3 rounded-xl text-white font-bold text-sm shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                          </svg>
                          CARTÃO DE CRÉDITO
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Branca: Comprar em maior volume */}
      <section className="bg-white py-12 border-t border-slate-100 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white px-8 md:px-12 py-6 rounded-3xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 group border-b-4 border-emerald-700"
          >
            <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xl md:text-3xl font-black leading-tight uppercase tracking-tight">Quero comprar em maior volume</p>
              <p className="text-base md:text-lg font-bold opacity-90 mt-1 flex items-center gap-2">
                Falar com atendente humano
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Private Label B2B Section */}
      <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Sua própria marca de cosméticos</h2>
          <p className="text-xl md:text-2xl text-purple-200 mb-10 max-w-3xl mx-auto">
            Sabia que com investimentos acima de <strong>R$ 1.000</strong> você pode tener este mesmo produto de alta performance com a <strong>sua própria logo</strong>?
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-purple-900 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase">
            Quero ter minha marca própria
          </button>
        </div>
      </section>

      {/* Benefits Detailed */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img 
                src="https://i.ibb.co/YF57w8LS/Whats-App-Image-2026-02-17-at-13-24-03.jpg" 
                alt="Nosso Ativador" 
                className="rounded-3xl shadow-2xl w-full max-w-lg object-contain" 
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Por que nosso ativador é diferente de tudo que você já viu?</h2>
              <ul className="space-y-6">
                {FEATURES.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-lg font-semibold text-slate-800">{feature}</span>
                      <p className="text-slate-500 text-sm mt-1">Resultado visível desde a primeira aplicação, devolvendo a vitalidade dos seus fios.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Como funciona a compra?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Escolha seu combo", desc: "Aproveite as ofertas exclusivas" },
              { step: "2", title: "Pagamento seguro", desc: "Checkout criptografado" },
              { step: "3", title: "Confirmado", desc: "Processamento automático" },
              { step: "4", title: "Enviamos rápido", desc: "Em até 72 horas úteis" },
              { step: "5", title: "Entrega Regional", desc: "Foco total no Nordeste" }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Highlight */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl max-w-4xl mx-auto border-2 border-emerald-100">
            <span className="text-4xl mb-4 block">🚚</span>
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Entrega Regional Nordeste</h2>
            <p className="text-lg text-emerald-700 mb-6">
              Temos estoque local para garantir o envio mais rápido do Brasil para o nosso povo.
            </p>
            <div className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg">
              Frete Fixo: R$ 19,90
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Last Call */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Última Chamada</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Estoque promocional limitado. Quando acabar, os valores retornarão ao preço normal de tabela. Não perca esta oportunidade de profissionalizar seu tratamento.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <a href={PIX_LINK} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-bold transition-all text-sm py-3 px-6">COMPRAR NO PIX</a>
            <a href="#combos" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-bold transition-all text-sm py-3 px-6">VER COMBOS NO CARTÃO</a>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">© 2024 Definição Profissional para Cachos. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <span className="text-slate-500 text-sm">Política de Privacidade</span>
              <span className="text-slate-500 text-sm">Termos de Uso</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a href="#combos" className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-bold shadow-lg animate-pulse-gold">
          GARANTIR PROMOÇÃO AGORA
        </a>
      </div>

      <ChatBot />
    </div>
  );
};

export default App;
