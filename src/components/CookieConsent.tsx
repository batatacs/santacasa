import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 text-orange-500 p-3 rounded-full hidden sm:block shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold mb-1 text-lg">Nós respeitamos sua privacidade</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar navegando, você concorda com o uso de cookies e com a nossa Política de Privacidade, em conformidade com a LGPD.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <button onClick={handleAccept} className="w-full md:w-auto bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-hover transition-colors whitespace-nowrap shadow-lg shadow-secondary/20">
                  Entendi e Aceito
                </button>
                <button onClick={() => setIsVisible(false)} className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors" aria-label="Fechar">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}