'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      alert('Por favor, insira seu e-mail');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erro ao criar checkout. Tente novamente.');
      }
    } catch (error) {
      alert('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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

      {/* Pricing Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
            🔥 OFERTA LIMITADA - Apenas 847 vagas restantes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plano simples e transparente
          </h1>
          <p className="text-xl text-gray-600">
            Sem pegadinhas. Sem taxas ocultas. <span className="text-red-600 font-bold">US$ 3/mês</span> para os primeiros 1000 usuários.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Grátis</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                US$ 0<span className="text-lg font-normal text-gray-600">/mês</span>
              </div>
              <p className="text-gray-600 mb-6">Perfeito para testar nossas ferramentas</p>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">10 tarefas por dia</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">Acesso a todas as 120 ferramentas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">Sem anúncios</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-3">✗</span>
                  <span className="text-gray-400">Histórico limitado</span>
                </li>
              </ul>
              
              <a 
                href="/auth/signup"
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 block text-center"
              >
                Começar Grátis
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-red-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                🔥 OFERTA LIMITADA
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ilimitado</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                US$ 3<span className="text-lg font-normal text-gray-600">/mês</span>
              </div>
              <div className="text-sm text-red-600 mb-4 line-through">
                Preço normal: US$ 5/mês
              </div>
              <p className="text-red-700 mb-6">Apenas para os primeiros 1000 usuários</p>
              
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700 font-medium">Tarefas ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Acesso a todas as 120 ferramentas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Sem anúncios</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Histórico completo</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Suporte prioritário</span>
                </li>
              </ul>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu e-mail para checkout"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50"
                >
                  {loading ? 'Processando...' : 'Garantir Desconto de 40%'}
                </button>
                <p className="text-xs text-red-600 mt-2 text-center">⏰ Restam apenas 847 vagas</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600 text-sm">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Há limite de tamanho de arquivo?</h3>
              <p className="text-gray-600 text-sm">Arquivos de até 100MB para usuários gratuitos e 500MB para assinantes premium.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Os arquivos ficam salvos?</h3>
              <p className="text-gray-600 text-sm">Não, processamos e excluímos seus arquivos automaticamente por segurança.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Aceita quais formas de pagamento?</h3>
              <p className="text-gray-600 text-sm">Cartão de crédito, débito e PIX através do Stripe com segurança total.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
