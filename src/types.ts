export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  itemCount: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  shortSpecs: string;
  fullDescription: string;
  specifications: ProductSpecification[];
  price: string;
  numericPrice?: number;
  availability: 'In Stock' | 'Available on Order' | 'Limited Units';
  image: string;
  tag?: string;
  brand: string;
  keyFeatures: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

export interface BusinessContactInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  location: string;
  cityCountry: string;
  openingHours: string;
}
