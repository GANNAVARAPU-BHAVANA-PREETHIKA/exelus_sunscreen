export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiance Vitamin C Serum',
    category: 'Serums',
    price: 5400,
    rating: 4.9,
    reviews: 124,
    image: '/1.jpeg',
    description: 'A potent, stabilized Vitamin C serum that brightens skin tone and reduces signs of aging.',
    ingredients: ['15% L-Ascorbic Acid', 'Ferulic Acid', 'Vitamin E'],
    benefits: ['Brightens complexion', 'Neutralizes free radicals', 'Boosts collagen'],
    stock: 45
  },
  {
    id: '2',
    name: 'Deep Hydration Cream',
    category: 'Moisturizers',
    price: 4300,
    rating: 4.8,
    reviews: 89,
    image: '/2.jpeg',
    description: 'Rich, velvety moisturizer that provides 24-hour hydration and strengthens the skin barrier.',
    ingredients: ['Hyaluronic Acid', 'Ceramides', 'Squalane'],
    benefits: ['Intense hydration', 'Barrier repair', 'Plumps skin'],
    stock: 32
  },
  {
    id: '3',
    name: 'Gentle Oat Cleanser',
    category: 'Cleansers',
    price: 2500,
    rating: 4.7,
    reviews: 215,
    image: '/3.jpeg',
    description: 'A non-foaming, pH-balanced cleanser that removes impurities without stripping moisture.',
    ingredients: ['Colloidal Oatmeal', 'Honey', 'Aloe Vera'],
    benefits: ['Calms redness', 'Gentle cleansing', 'Soothes irritation'],
    stock: 120
  },
  {
    id: '4',
    name: 'Overnight Retinol Oil',
    category: 'Treatments',
    price: 6500,
    rating: 5.0,
    reviews: 56,
    image: '/4.jpeg',
    description: 'A luxurious night oil that accelerates cell turnover to reveal smoother, younger-looking skin.',
    ingredients: ['0.5% Pure Retinol', 'Rosehip Oil', 'Bakuchiol'],
    benefits: ['Reduces fine lines', 'Improves texture', 'Evens skin tone'],
    stock: 15
  },
  {
    id: '5',
    name: 'Mineral Sun Shield SPF 50',
    category: 'Sun Protection',
    price: 3300,
    rating: 4.9,
    reviews: 167,
    image: '/5.jpeg',
    description: 'Ultra-lightweight mineral sunscreen that leaves zero white cast and protects against blue light.',
    ingredients: ['Zinc Oxide', 'Niacinamide', 'Green Tea Extract'],
    benefits: ['Broad spectrum protection', 'Anti-pollution', 'Oil control'],
    stock: 88
  },
  {
    id: '6',
    name: 'Botanical Toning Mist',
    category: 'Toners',
    price: 2200,
    rating: 4.6,
    reviews: 143,
    image: '/7.jpeg',
    description: 'A refreshing mist that balances skin pH and provides an instant burst of botanical hydration.',
    ingredients: ['Rose Water', 'Witch Hazel', 'Cucumber Extract'],
    benefits: ['Balances pH', 'Tightens pores', 'Refreshes skin'],
    stock: 64
  }
];
