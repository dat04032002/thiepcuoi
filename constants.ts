import { WeddingData } from './types';

// Images
const GROOM_IMG = new URL('./image/chure.jpg', import.meta.url).href;
const BRIDE_IMG = new URL('./image/codau.jpg', import.meta.url).href;
const GROOM_QR_IMG = new URL('./image/qrchure.jpg', import.meta.url).href;
const BRIDE_QR_IMG = new URL('./image/qrcodau.jpg', import.meta.url).href;

// Music - Using a royalty free sample for demo
const MUSIC_URL = new URL('./audio/SaveTik.io_7557148808237288718.mp3', import.meta.url).href; 

export const WEDDING_DATA: WeddingData = {
  weddingDate: "2026-03-30T11:00:00",
  musicUrl: MUSIC_URL,
  groom: {
    fullName: "Lê Thực",
    shortName: "Lê Thực",
    image: GROOM_IMG,

    parents: {
      father: "Lê Đình Thành",
      mother: "Lê Thị Vinh",
    },
    event: {
      time: "11:00",
      dateSolar: "30/03/2026",
      dateLunar: "12/02/2026 (Bính Ngọ)",
      locationName: "Tư gia Nhà Trai",
      address: "Xã Thọ Xuân, Tỉnh Thanh Hóa",
      mapLink: "https://maps.app.goo.gl/vyNSAMWvqwc1WDUD7",
    },
    extraEvents: [
      {
        eventTitle: "Lễ Mời Cơm Thân Mật",
        time: "16:00",
        dateSolar: "29/03/2026",
        dateLunar: "11/02/2026 (Bính Ngọ)",
        locationName: "Tư gia Nhà Trai",
        address: "Xã Thọ Xuân, Tỉnh Thanh Hóa",
        mapLink: "https://maps.app.goo.gl/vyNSAMWvqwc1WDUD7",
      }
    ],
    bank: {
      bankName: "MSB",
      accountNumber: "3915081991",
      accountName: "LE DINH THUC",
      template: "compact2",
      qrImage: GROOM_QR_IMG,
      qrPrompt: "Mừng hạnh phúc Chú Rể",
    },
  },
  bride: {
    fullName: "Nguyễn Nhung",
    shortName: "Nguyễn Nhung",
    image: BRIDE_IMG,
  
    parents: {
      father: "",
      mother: "Chu Thị Huấn",
    },
    event: {
      time: "15:00",
      dateSolar: "28/03/2026",
      dateLunar: "10/02/2026 (Bính Ngọ)",
      locationName: "Tư gia Nhà Gái",
      address: "Thôn Phú Xuân, Xã Hoằng Thanh, Tỉnh Thanh Hóa",
      mapLink: "https://maps.app.goo.gl/aKZGgd6BiEwByHLD9",
    },
     bank: {
      bankName: "MB",
      accountNumber: "0962561089",
      accountName: "NGUYEN THI NHUNG",
      template: "compact2",
      qrImage: BRIDE_QR_IMG,
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
    new URL('./image/anh8.jpg', import.meta.url).href
   
  ]
};

// Social Contact Links
export const CONTACT_LINKS = {
  facebook: "https://facebook.com",
  zalo: "https://zalo.me",
  tiktok: "https://tiktok.com",
};


