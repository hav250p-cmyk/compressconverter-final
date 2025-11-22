export default function Footer() {
  return (
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
  );
}
