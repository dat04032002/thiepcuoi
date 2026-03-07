import { WeddingData } from './types';

// Images
const GROOM_IMG = new URL('./image/chure.jpg', import.meta.url).href;
const BRIDE_IMG = new URL('./image/codau.jpg', import.meta.url).href;


// Music - Using a royalty free sample for demo
const MUSIC_URL = new URL('./audio/nhac.mp3', import.meta.url).href; 

export const WEDDING_DATA: WeddingData = {
  weddingDate: "2026-03-30T11:00:00",
  musicUrl: MUSIC_URL,
  groom: {
    fullName: "Lê Thực",
    shortName: "Lê Thực",
    image: GROOM_IMG,
    description: "Chàng trai tháng 12, yêu công nghệ và thích đi phượt.",
    parents: {
      father: "Lê Đình Thành",
      mother: "Lê Thị Vinh",
    },
    event: {
      time: "11:00",
      dateSolar: "30/03/2026",
      dateLunar: "12/02/2026 (Bính Ngọ)",
      locationName: "Trung tâm Tiệc cưới White Palace",
      address: "194 Hoàng Văn Thụ, Phường 9, Phú Nhuận, TP.HCM",
      mapLink: "https://maps.app.goo.gl/abcdef",
    },
    bank: {
      bankName: "MB Bank",
      accountNumber: "9999999999",
      accountName: "NGUYEN THANH DAT",
      template: "compact2",
      qrPrompt: "Mừng hạnh phúc Chú Rể",
    },
  },
  bride: {
    fullName: "Nguyễn Nhung",
    shortName: "Nguyễn Nhung",
    image: BRIDE_IMG,
    description: "Cô gái hay cười, yêu mèo và thích nấu ăn.",
    parents: {
      father: "",
      mother: "Chu Thị Huấn",
    },
    event: {
      time: "15:00",
      dateSolar: "28/03/2026",
      dateLunar: "10/02/2026 (Bính Ngọ)",
      locationName: "Tư gia Nhà Gái",
      address: "Thôn Phú Xuân, Xã Hoằng Thành, Tỉnh Thanh Hóa",
      mapLink: "https://maps.app.goo.gl/aKZGgd6BiEwByHLD9",
    },
    bank: {
      bankName: "Vietcombank",
      accountNumber: "8888888888",
      accountName: "LE THU HA",
      template: "compact2",
      qrPrompt: "Mừng hạnh phúc Cô Dâu",
    },
  },
  album: [
    new URL('./image/anh1.jpg', import.meta.url).href,
    new URL('./image/anh2.jpg', import.meta.url).href,
    new URL('./image/anh3.jpg', import.meta.url).href,
    new URL('./image/anh4.jpg', import.meta.url).href,
    new URL('./image/anh5.jpg', import.meta.url).href,
    new URL('./image/anh6.jpg', import.meta.url).href,
    new URL('./image/anh7.jpg', import.meta.url).href,
    new URL('./image/anh8.jpg', import.meta.url).href,
    new URL('./image/anh9.jpg', import.meta.url).href,
  ]
};

// Social Contact Links
export const CONTACT_LINKS = {
  facebook: "https://facebook.com",
  zalo: "https://zalo.me",
  tiktok: "https://tiktok.com",
};
