export interface BankInfo {
  bankName: string;
  accountNumber: string;
  accountName: string;
  template: string; // e.g., 'compact2' for VietQR
  qrPrompt: string;
  qrImage?: string;
}

export interface ParentInfo {
  father: string;
  mother: string;
}

export interface EventDetails {
  time: string;
  dateSolar: string; // YYYY-MM-DD
  dateLunar: string;
  locationName: string;
  address: string;
  mapLink: string;
}

export interface ExtraEventDetails extends EventDetails {
  eventTitle: string;
}

export interface PersonProfile {
  fullName: string;
  shortName: string;
  image: string;
  
  parents: ParentInfo;
  event: EventDetails;
  extraEvents?: ExtraEventDetails[];
  bank: BankInfo;
}

export interface WeddingData {
  groom: PersonProfile;
  bride: PersonProfile;
  weddingDate: string; // ISO String
  album: string[];
  musicUrl: string;
}

export interface GalleryImage {
  id: number;
  url: string;
}
