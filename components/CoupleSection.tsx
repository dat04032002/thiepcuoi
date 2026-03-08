import React, { useState } from 'react';
import { MapPin, Calendar, QrCode, X, Copy } from 'lucide-react';
import { EventDetails, PersonProfile } from '../types';

interface CoupleSectionProps {
  groom: PersonProfile;
  bride: PersonProfile;
}

const CoupleSection: React.FC<CoupleSectionProps> = ({ groom, bride }) => {
  const [activeQR, setActiveQR] = useState<PersonProfile | null>(null);

  const EventBlock = ({
    event,
    title,
    align,
    compact = false
  }: {
    event: EventDetails;
    title: string;
    align: 'left' | 'right';
    compact?: boolean;
  }) => (
    <div className={`space-y-3 ${compact ? 'bg-rose-50/50 border border-rose-100 rounded-xl p-4 mt-4' : ''}`}>
      <h5 className={`font-serif ${compact ? 'text-lg' : 'text-xl'} font-bold text-rose-600 uppercase tracking-widest`}>
        {title}
      </h5>

      <div className={`flex items-center gap-2 text-stone-600 justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
        <Calendar size={18} className="text-rose-400" />
        <span>{event.time} | {event.dateSolar}</span>
      </div>

      <div className={`flex items-center gap-2 text-stone-500 text-sm justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
        <span>(Âm lịch: {event.dateLunar})</span>
      </div>

      <div className={`flex items-start gap-2 text-stone-600 justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
        <MapPin size={18} className="text-rose-400 mt-1 flex-shrink-0" />
        <span className="max-w-xs">{event.locationName} <br/> <span className="text-sm text-stone-500">{event.address}</span></span>
      </div>

      <div className={`flex gap-3 mt-3 justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
        <a 
          href={event.mapLink} 
          target="_blank" 
          rel="noreferrer"
          className="px-4 py-2 bg-white border border-rose-200 text-rose-500 rounded-full hover:bg-rose-50 transition-colors text-sm font-bold shadow-sm"
        >
          Xem Bản Đồ
        </a>
      </div>
    </div>
  );

  const ProfileCard = ({ person, title, align }: { person: PersonProfile, title: string, align: 'left' | 'right' }) => (
    <div className={`flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''} gap-8 items-center mb-24`}>
      {/* Image Frame */}
      <div className="w-full md:w-1/2 relative group">
        <div className={`absolute inset-0 border-2 border-rose-300 rounded-full transform ${align === 'left' ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'} transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500 hidden md:block`}></div>
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4] max-w-sm mx-auto">
          <img 
            src={person.image} 
            alt={person.fullName} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/400/600?grayscale" }}
          />
        </div>
      </div>

      {/* Info */}
      <div className={`w-full md:w-1/2 text-center ${align === 'left' ? 'md:text-left' : 'md:text-right'} space-y-4`}>
        <h3 className="text-3xl font-script text-rose-500">{title}</h3>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">{person.fullName}</h2>
       
     
        <div className="py-4 space-y-2">
           {person.parents.father?.trim() && (
          <p className="font-bold text-gray-700">Con ông: <span className="font-normal">{person.parents.father}</span></p>
           )}
          <p className="font-bold text-gray-700">Con bà: <span className="font-normal">{person.parents.mother}</span></p>
        </div>
     


        <div className={`border-t border-b border-rose-100 py-6 my-6 space-y-3 ${align === 'left' ? 'md:pl-0' : 'md:pr-0'}`}>
          {person.extraEvents?.map((extraEvent, index) => (
            <EventBlock
            
              event={extraEvent}
              title={extraEvent.eventTitle}
              align={align}
              compact
            />
          ))}

          <EventBlock
            event={person.event}
            title={title === "Chú Rể" ? "Lễ Thành Hôn" : "Lễ Ăn Hỏi"}
            align={align}
          />

          <div className={`flex gap-3 mt-4 justify-center ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
            <button 
              onClick={() => setActiveQR(person)}
              className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors text-sm font-bold shadow-md flex items-center gap-2"
            >
              <QrCode size={16} />
              Mừng Cưới
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-20 overflow-hidden" id="couple">
      <ProfileCard person={groom} title="Chú Rể" align="left" />
      <ProfileCard person={bride} title="Cô Dâu" align="right" />

      {/* QR Modal */}
      {activeQR && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative">
            <button 
              onClick={() => setActiveQR(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Hộp Mừng Cưới</h3>
              <p className="text-rose-500 font-script text-2xl mt-1">{activeQR.shortName}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mb-4 flex justify-center">
              {activeQR.bank.qrImage ? (
                <img 
                  src={activeQR.bank.qrImage} 
                  alt="QR chuyển khoản" 
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <p className="text-sm text-gray-500">Chưa cấu hình ảnh QR cho tài khoản này</p>
              )}
            </div>

            <div className="space-y-3 text-sm text-gray-600">
               <div className="flex justify-between items-center border-b pb-2">
                 <span>Ngân hàng:</span>
                 <span className="font-bold">{activeQR.bank.bankName}</span>
               </div>
               <div className="flex justify-between items-center border-b pb-2">
                 <span>Chủ TK:</span>
                 <span className="font-bold uppercase">{activeQR.bank.accountName}</span>
               </div>
               <div className="flex justify-between items-center">
                 <span>Số TK:</span>
                 <div className="flex items-center gap-2">
                   <span className="font-bold text-rose-600 text-lg">{activeQR.bank.accountNumber}</span>
                   <button 
                    onClick={() => navigator.clipboard.writeText(activeQR.bank.accountNumber)}
                    className="text-gray-400 hover:text-blue-500"
                    title="Copy"
                   >
                     <Copy size={16} />
                   </button>
                 </div>
               </div>
            </div>
            
            <p className="text-xs text-center text-gray-400 mt-6">Quét mã QR hoặc chuyển khoản theo thông tin trên</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoupleSection;
