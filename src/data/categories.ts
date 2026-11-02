import { Category } from '../types';
import electricKettleImg from '../assets/images/electric_kettle_1793611148613.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    description: 'Modern Android and iOS mobile phones for reliable daily communication and work.',
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    itemCount: 18,
  },
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Dependable laptops designed for students, remote work, business, and everyday use.',
    iconName: 'Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    itemCount: 14,
  },
  {
    id: 'tablets',
    name: 'Tablets',
    description: 'Compact and capable tablets ideal for study, reading, video calls, and media.',
    iconName: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    itemCount: 9,
  },
  {
    id: 'televisions',
    name: 'Televisions',
    description: 'Energy-saving Smart TVs and 4K UHD screens for crystal-clear home viewing.',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    itemCount: 12,
  },
  {
    id: 'fans',
    name: 'Electric Fans',
    description: 'Pedestal standing fans and rechargeable cooling solutions built for reliability.',
    iconName: 'Fan',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
    itemCount: 10,
  },
  {
    id: 'kettles',
    name: 'Electric Kettles',
    description: 'Rapid-boil stainless steel and cordless electric kettles with auto shut-off safety.',
    iconName: 'Coffee',
    image: electricKettleImg,
    itemCount: 8,
  },
  {
    id: 'audio',
    name: 'Audio Devices',
    description: 'Bluetooth speakers, noise-isolating wireless earbuds, and over-ear headphones.',
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    itemCount: 22,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'High-capacity power banks, fast charging adapters, heavy-duty cords, and stands.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1609592426861-41584b1ce3d3?auto=format&fit=crop&w=800&q=80',
    itemCount: 30,
  },
];
