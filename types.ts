
export interface Combo {
  id: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  installments: string;
  tag?: string;
  color: string;
  benefits: string[];
  imageUrl: string;
  cieloId?: string;
}

export enum ModelName {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview'
}
