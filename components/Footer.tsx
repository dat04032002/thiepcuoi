import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart size={20} className="text-rose-500 animate-pulse" fill="#f43f5e" />
        </div>
        <h3 className="text-2xl font-script text-white mb-2">Lê Thực & Nguyễn Nhung</h3>
        <p className="text-sm">Cảm ơn bạn đã ghé thăm website đám cưới của chúng mình.</p>
        <div className="mt-8 pt-8 border-t border-stone-800 text-xs">
          <p>© 2024 Wedding4u. Designed with love.</p>
          <p className="mt-1">Dịch vụ thiết kế thiệp cưới Online chuyên nghiệp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;