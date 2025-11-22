const ALL_TOOLS = {
  pdf: [
    'Comprimir PDF', 'Converter PDF para Word', 'Converter PDF para Excel', 'Converter PDF para PowerPoint',
    'Converter PDF para JPG', 'Converter PDF para PNG', 'Mesclar PDF', 'Dividir PDF',
    'Rotacionar PDF', 'Desbloquear PDF', 'Proteger PDF', 'Assinar PDF',
    'Extrair páginas PDF', 'Numerar páginas PDF', 'Marca d\'água PDF', 'OCR PDF'
  ],
  image: [
    'Comprimir JPG', 'Comprimir PNG', 'Comprimir WebP', 'Converter JPG para PNG',
    'Converter PNG para JPG', 'Converter HEIC para JPG', 'Converter RAW para JPG', 'Redimensionar imagem',
    'Cortar imagem', 'Rotacionar imagem', 'Converter para WebP', 'Converter para AVIF',
    'Remover fundo', 'Adicionar marca d\'água', 'Filtros de imagem', 'Converter SVG'
  ],
  video: [
    'Comprimir vídeo', 'Converter MP4 para AVI', 'Converter AVI para MP4', 'Converter MOV para MP4',
    'Converter MKV para MP4', 'Converter WebM para MP4', 'Converter FLV para MP4', 'Cortar vídeo',
    'Extrair áudio do vídeo', 'Adicionar legenda', 'Rotacionar vídeo', 'Redimensionar vídeo',
    'Converter para GIF', 'Estabilizar vídeo', 'Ajustar velocidade', 'Mesclar vídeos'
  ],
  audio: [
    'Comprimir áudio', 'Converter MP3 para WAV', 'Converter WAV para MP3', 'Converter FLAC para MP3',
    'Converter AAC para MP3', 'Converter OGG para MP3', 'Converter M4A para MP3', 'Cortar áudio',
    'Normalizar áudio', 'Remover ruído', 'Ajustar volume', 'Extrair áudio',
    'Mesclar áudios', 'Converter para ringtone', 'Reverso de áudio', 'Fade in/out'
  ],
  document: [
    'Converter Word para PDF', 'Converter Excel para PDF', 'Converter PowerPoint para PDF', 'Converter TXT para PDF',
    'Converter RTF para PDF', 'Converter ODT para PDF', 'Converter EPUB para PDF', 'Converter HTML para PDF',
    'Comprimir Word', 'Comprimir Excel', 'Comprimir PowerPoint', 'Mesclar documentos',
    'Dividir documentos', 'Extrair texto', 'Converter formatos', 'OCR documentos'
  ],
  archive: [
    'Comprimir ZIP', 'Extrair ZIP', 'Comprimir RAR', 'Extrair RAR',
    'Comprimir 7Z', 'Extrair 7Z', 'Comprimir TAR', 'Extrair TAR',
    'Converter ZIP para RAR', 'Converter RAR para ZIP', 'Proteger arquivo', 'Desproteger arquivo',
    'Visualizar conteúdo', 'Comprimir pasta', 'Extrair seletivo', 'Reparar arquivo'
  ],
  other: [
    'Converter CSV para Excel', 'Converter JSON para CSV', 'Converter XML para JSON', 'Minificar CSS',
    'Minificar JavaScript', 'Minificar HTML', 'Converter Base64', 'Gerar QR Code',
    'Ler QR Code', 'Converter cores', 'Gerar hash', 'Validar JSON',
    'Formatar código', 'Converter unidades', 'Calcular hash MD5', 'Calcular hash SHA'
  ]
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CompressConverter</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Login
              </a>
              <a href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Começar Grátis
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Badges */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center text-green-700">
              <span className="mr-2">🔒</span>
              <span className="font-medium">SSL 256-bit</span>
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">🛡️</span>
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">🗑️</span>
              <span className="font-medium">Auto-delete em 1h</span>
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">⚡</span>
              <span className="font-medium">Processamento local</span>
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">🌍</span>
              <span className="font-medium">Servidores globais</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
            🚀 NO ADS • SEO-FIRST APPROACH
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            120 file compression and
            <span className="block text-blue-600">conversion tools</span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
              for just <span className="text-green-600 font-bold">$5/month</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CompressConverter.com is the ultimate hub for file compression, conversion and extraction. 
            No invasive ads, 100% focused on productivity and organic search ranking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/auth/signup" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-lg text-center">
              Start Free (10 tasks/day)
            </a>
            <a href="/pricing" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 text-center">
              View Unlimited Plan
            </a>
          </div>

          {/* Limited Offer */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 mb-12 shadow-xl">
            <div className="text-center">
              <div className="text-sm font-bold mb-2">🔥 LIMITED OFFER</div>
              <div className="text-2xl font-bold mb-2">First 1000 users pay only $3/month</div>
              <div className="text-sm opacity-90 mb-4">
                Regular price: $5/month • Save 40% • Limited time only
              </div>
              <div className="flex justify-center items-center gap-4 text-sm">
                <span>⏰ Only 847 spots left</span>
                <span>•</span>
                <span>💎 Lifetime access at promotional price</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { name: 'PDF', desc: 'Comprima, converta e una PDFs sem perda de qualidade', icon: '📄' },
            { name: 'Imagens', desc: 'Otimização agressiva sem perder nitidez visual', icon: '🖼️' },
            { name: 'Vídeo', desc: 'Reduza o tamanho de vídeos para web e mobile', icon: '🎬' },
            { name: 'Áudio', desc: 'Converta e compacte áudios em segundos', icon: '🎵' }
          ].map((tool) => (
            <div key={tool.name} className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm">{tool.desc}</p>
              <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-700">
                Acessar ferramentas →
              </button>
            </div>
          ))}
        </div>

        {/* Todas as 120 Ferramentas */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Todas as 120 Ferramentas Disponíveis
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Encontre exatamente a ferramenta que você precisa. Todas incluídas no plano único.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(ALL_TOOLS).map(([category, tools]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category === 'pdf' ? 'PDF' : 
                   category === 'image' ? 'Imagens' :
                   category === 'video' ? 'Vídeo' :
                   category === 'audio' ? 'Áudio' :
                   category === 'document' ? 'Documentos' :
                   category === 'archive' ? 'Arquivos' : 'Outros'}
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Privacidade e Segurança */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-sm border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🔒 Seus Dados Estão 100% Seguros
            </h2>
            <p className="text-xl text-gray-600">
              Garantia absoluta de privacidade. Seus arquivos NUNCA são armazenados ou compartilhados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🗑️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Delete</h3>
              <p className="text-sm text-gray-600">Arquivos deletados automaticamente em 1 hora</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Criptografia SSL</h3>
              <p className="text-sm text-gray-600">Conexão 256-bit SSL em todos os uploads</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="font-semibold text-gray-900 mb-2">Zero Logs</h3>
              <p className="text-sm text-gray-600">Não registramos nem rastreamos seus arquivos</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">Totalmente conforme com leis de privacidade</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
            <h3 className="font-bold text-gray-900 mb-3">📜 Nossa Garantia de Privacidade:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Processamento local:</strong> Seus arquivos são processados em servidores seguros e nunca armazenados permanentemente</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Exclusão automática:</strong> Todos os arquivos são deletados automaticamente após 1 hora, sem exceções</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Sem acesso humano:</strong> Nenhum funcionário tem acesso aos seus arquivos durante o processamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Sem compartilhamento:</strong> Seus dados NUNCA são vendidos, compartilhados ou usados para publicidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Auditoria independente:</strong> Nossa segurança é verificada por empresas de cibersegurança terceirizadas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tecnologia Enterprise
              </h2>
              <p className="text-gray-600 mb-6">
                Cada ferramenta tem uma landing page própria, textos otimizados, hreflang em 60 idiomas 
                e performance de carregamento pensada para Core Web Vitals. Experiência premium focada 
                em produtividade e velocidade.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  +120 ferramentas entre compressão, conversão e extração
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Performance de nível enterprise em Next.js 14
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Conteúdo traduzido automaticamente para 60 idiomas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Processamento em servidores globais para máxima velocidade
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
              <div className="text-sm font-semibold text-red-800 mb-2">🔥 OFERTA LIMITADA</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                US$ 3<span className="text-lg font-normal text-gray-600">/mês</span>
              </div>
              <div className="text-sm text-red-600 mb-4 line-through">
                Preço normal: US$ 5/mês
              </div>
              <p className="text-red-700 mb-4">
                Apenas para os primeiros 1000 usuários. Preço vitalício garantido.
              </p>
              <ul className="space-y-2 text-red-700 text-sm mb-6">
                <li>• 120+ ferramentas premium</li>
                <li>• Tarefas ilimitadas</li>
                <li>• Sem anúncios, sem banners invasivos</li>
                <li>• Histórico completo e dashboard</li>
                <li>• Suporte prioritário</li>
              </ul>
              <a href="/pricing" className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 block text-center">
                Garantir Desconto de 40%
              </a>
              <p className="text-xs text-red-600 mt-2 text-center">⏰ Restam apenas 847 vagas</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="text-xl font-bold">CompressConverter</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                A plataforma mais confiável para compressão, conversão e extração de arquivos. 
                120+ ferramentas premium com foco total em privacidade e segurança.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>🔒 SSL 256-bit</span>
                <span>🛡️ GDPR Compliant</span>
                <span>🗑️ Auto-delete</span>
              </div>
            </div>

            {/* Ferramentas */}
            <div>
              <h3 className="font-semibold mb-4">Ferramentas</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/tools/pdf" className="hover:text-white">Comprimir PDF</a></li>
                <li><a href="/tools/image" className="hover:text-white">Comprimir Imagens</a></li>
                <li><a href="/tools/video" className="hover:text-white">Comprimir Vídeo</a></li>
                <li><a href="/tools/audio" className="hover:text-white">Converter Áudio</a></li>
                <li><a href="/tools" className="hover:text-white">Ver todas (120+)</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/about" className="hover:text-white">Sobre nós</a></li>
                <li><a href="/privacy" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="/terms" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="/security" className="hover:text-white">Segurança</a></li>
                <li><a href="/contact" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 CompressConverter.com. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <span>🌍 Disponível em 60 idiomas</span>
              <span>⚡ Processamento em &lt;30s</span>
              <span>🔐 100% Seguro</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
