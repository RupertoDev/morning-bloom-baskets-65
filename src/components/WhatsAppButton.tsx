import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const defaultMessage = "Olá! Gostaria de saber mais sobre as cestas de café da manhã. Podem me ajudar?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip/Modal */}
      <div 
        className={`
          bg-card rounded-2xl shadow-elegant p-4 max-w-[280px] transform transition-all duration-300 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-2 pointer-events-none'}
        `}
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">Atendimento</p>
              <p className="text-xs text-muted-foreground">Online agora</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Olá! 👋 Como podemos ajudar você hoje? Tire suas dúvidas sobre nossas cestas!
        </p>
        
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Iniciar Conversa
        </button>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-xl
          flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? 'rotate-0' : 'animate-bounce-gentle'}
        `}
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Pulse effect */}
      {!isOpen && (
        <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      )}
    </div>
  );
};

export default WhatsAppButton;
