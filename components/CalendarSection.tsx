import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface CalendarSectionProps {
  weddingDateStr: string;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ weddingDateStr }) => {
  const weddingDate = new Date(weddingDateStr);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now < weddingDate) {
        setTimeLeft({
          days: differenceInDays(weddingDate, now),
          hours: differenceInHours(weddingDate, now) % 24,
          minutes: differenceInMinutes(weddingDate, now) % 60,
          seconds: differenceInSeconds(weddingDate, now) % 60,
        });
      } else {
        // Stop timer if date passed
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Simple calendar generation for December 2024 (Hardcoded logic for visual stability in this demo, 
  // in production use date-fns `getDaysInMonth` etc.)
  // Wedding is 25th Dec 2024. Dec 1st 2024 is Sunday.
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startOffset = 0; // Sunday

  return (
    <div className="bg-rose-50 py-20 relative" id="event">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
       <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          {/* Calendar UI */}
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="text-center mb-6">
              <h3 className="text-lg uppercase tracking-widest text-stone-500">Tháng 03</h3>
              <h2 className="text-5xl font-serif font-bold text-gray-800 my-2">2026</h2>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-stone-400 mb-2">
              <div>CN</div><div>T2</div><div>T3</div><div>T4</div><div>T5</div><div>T6</div><div>T7</div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center font-medium text-stone-700">
               {/* Empty slots for offset */}
               {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`}></div>)}
               
               {days.map(day => {
                 const isWeddingDay = day === 30;
                 return (
                   <div 
                    key={day} 
                    className={`aspect-square flex items-center justify-center rounded-full relative ${isWeddingDay ? 'bg-rose-500 text-white shadow-lg scale-110' : 'hover:bg-rose-50'}`}
                   >
                     {day}
                     {isWeddingDay && <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span></span>}
                   </div>
                 )
               })}
            </div>
          </div>

          {/* Countdown UI */}
          <div className="text-center lg:text-left space-y-8 w-full max-w-md">
            <h3 className="text-3xl font-script text-rose-500">Cùng đếm ngược ngày hạnh phúc</h3>
            <p className="text-stone-600">
              Chúng mình rất mong chờ sự hiện diện của các bạn trong ngày trọng đại này.
            </p>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Ngày', value: timeLeft.days },
                { label: 'Giờ', value: timeLeft.hours },
                { label: 'Phút', value: timeLeft.minutes },
                { label: 'Giây', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-rose-100 shadow-sm">
                  <div className="text-3xl font-bold text-rose-600 font-serif">{item.value}</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <button className="px-8 py-3 bg-stone-800 text-white rounded-full font-bold shadow-lg hover:bg-stone-700 transition-colors uppercase tracking-widest text-sm">
                Save the Date
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;