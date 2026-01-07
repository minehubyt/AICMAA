
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import { aicmaaAi } from '../services/geminiService';
import { ChatMessage } from '../types';

const PolicyAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the AICMAA AI Policy Assistant. How can I help you with Indian economic policy or management accounting insights today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await aicmaaAi.askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[380px] h-[500px] shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-100">
          <div className="bg-blue-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h3 className="font-bold text-sm">Policy AI Assistant</h3>
                <p className="text-[10px] opacity-70 font-semibold">AICMAA Research</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-blue-900" />
                  <span className="text-xs text-gray-500">Assistant is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about CMA policy..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-900 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center gap-3 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 font-bold whitespace-nowrap text-sm">
            Policy Assistant
          </span>
          <Bot size={28} />
        </button>
      )}
    </div>
  );
};

export default PolicyAssistant;
