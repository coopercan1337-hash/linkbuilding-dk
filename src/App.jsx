import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-indigo-700">Link-Eksperten.dk</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-indigo-600 transition-colors">Forside</a>
            <a href="#hvad-er-linkbuilding" className="hover:text-indigo-600 transition-colors">Hvad er linkbuilding?</a>
            <a href="#sammenlign" className="hover:text-indigo-600 transition-colors">Sammenlign</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-indigo-700 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Boost din SEO med professionel linkbuilding
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Find de bedste danske linkbuilding pakker og klatr til tops i Google. Vi har sammenlignet kvalitet, pris og resultater.
          </p>
          <a 
            href="#sammenlign" 
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Se linkbuilding pakker →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Comparison Section */}
        <section id="sammenlign" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Anbefalede SEO & Linkbuilding partnere</h2>
            <p className="text-gray-600 mb-8">Opdateret Februar 2026 - Testet og verificeret af vores eksperter</p>
            
            <div className="space-y-6">
              {/* Provider 1 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">Next Level SEO</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">Højeste ROI</span>
                  </div>
                  <p className="text-gray-600 mb-2">Specialister i danske backlinks af høj kvalitet. Fokus på white-hat metoder.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Kun relevante danske sider</li>
                    <li>✓ Månedlig rapportering</li>
                    <li>✓ Ingen binding</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-sm text-indigo-600 font-semibold mb-2">Fra 2.500 DKK/md</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=11120&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                  >
                    Se pakker →
                  </a>
                </div>
              </article>

              {/* Provider 2 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">SEO Service Danmark</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Komplet løsning</span>
                  </div>
                  <p className="text-gray-600 mb-2">Fuld SEO-optimering inkl. linkbuilding, on-page og teknisk SEO.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Alt-i-én SEO pakke</li>
                    <li>✓ Dedikeret kontaktperson</li>
                    <li>✓ Garanterede resultater</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-sm text-gray-500 mb-2">Kontakt for pris</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=12194&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                  >
                    Læs mere →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* What is Linkbuilding Section */}
        <section id="hvad-er-linkbuilding" className="mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Hvad er linkbuilding?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Linkbuilding</strong> er processen med at få andre hjemmesider til at linke til din side. Disse links kaldes også backlinks eller indgående links, og de er en af Googles vigtigste rangeringsfaktorer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Når en respekteret hjemmeside linker til dig, ser Google det som en "stemme" for din sides kvalitet og relevans. Jo flere kvalitetslinks du har, jo højere vil du typisk ranke i søgeresultaterne.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Hvorfor er links så vigtige for SEO?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Autoritet</strong> - Links fra troværdige sider øger din domæneautoritet</li>
              <li>• <strong>Opdagelse</strong> - Google finder nye sider ved at følge links</li>
              <li>• <strong>Trafik</strong> - Gode links sender også direkte besøgende</li>
              <li>• <strong>Relevans</strong> - Links fra relaterede sider signalerer din niche</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">White-hat vs black-hat linkbuilding</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>White-hat linkbuilding</strong> fokuserer på at skabe værdi der naturligt tiltrækker links - f.eks. godt indhold, PR og outreach. Dette er den sikre og bæredygtige metode.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Black-hat metoder</strong> som linkkøb fra linkfarme eller PBN'er kan give hurtige resultater, men risikerer Google-straffe der kan ødelægge din ranking permanent.
            </p>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om linkbuilding</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvor mange links har jeg brug for?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Det afhænger af din niche og konkurrence. Nogle brancher kræver hundredvis af links, andre kun en håndfuld kvalitetslinks. Kvalitet er vigtigere end kvantitet.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvor lang tid tager det at se resultater?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Typisk 3-6 måneder før du ser markante forbedringer i rankings. SEO er et langsigtet spil, og linkbuilding tager tid at få effekt.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Er det sikkert at købe links?
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Det handler om kvaliteten. Links fra relevante, ægte sider via outreach er fint. Undgå billige links fra linkfarme eller udenlandske netværk.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Link-Eksperten.dk</h4>
              <p className="text-sm">
                Vi hjælper danske virksomheder med at finde de bedste linkbuilding og SEO-løsninger.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Forside</a></li>
                <li><a href="#hvad-er-linkbuilding" className="hover:text-white transition-colors">Hvad er linkbuilding?</a></li>
                <li><a href="#sammenlign" className="hover:text-white transition-colors">Sammenlign pakker</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privatlivspolitik" className="hover:text-white transition-colors">Privatlivspolitik</a></li>
                <li><a href="/om-os" className="hover:text-white transition-colors">Om os</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Link-Eksperten.dk - Alle rettigheder forbeholdes</p>
            <p className="mt-2 text-gray-500">
              Denne side indeholder affiliate links. Vi modtager provision ved køb gennem vores links.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
