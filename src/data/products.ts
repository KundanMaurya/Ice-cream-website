export interface IceCream {
  id: number;
  name: string;
  flavor: string;
  price: number;
  category: string;
  description: string;
  image: string;
  ingredients: string[];
  dietary: string[];
}

export const flavors = [
  'Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Coffee',
  'Caramel', 'Pistachio', 'Mango', 'Blueberry', 'Cookie Dough'
];

export const categories = [
  'Classic', 'Premium', 'Seasonal', 'Vegan', 'Limited Edition'
];

export const dietaryOptions = [
  'Vegan', 'Gluten-Free', 'Nut-Free', 'Dairy-Free', 'Sugar-Free'
];

export const products: IceCream[] = [
  {
    id: 1,
    name: "Classic Vanilla Bean",
    flavor: "Vanilla",
    price: 4.99,
    category: "Classic",
    description: "Rich and creamy vanilla ice cream made with real Madagascar vanilla beans.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80",
    ingredients: ["Cream", "Milk", "Sugar", "Vanilla Beans"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 2,
    name: "Double Chocolate Fudge",
    flavor: "Chocolate",
    price: 5.99,
    category: "Premium",
    description: "Decadent chocolate ice cream with rich fudge swirls.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
    ingredients: ["Chocolate", "Cream", "Milk", "Cocoa"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 3,
    name: "Fresh Strawberry Fields",
    flavor: "Strawberry",
    price: 5.49,
    category: "Classic",
    description: "Made with fresh strawberries and a hint of vanilla.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80",
    ingredients: ["Strawberries", "Cream", "Sugar", "Vanilla"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 4,
    name: "Mint Chocolate Chip",
    flavor: "Mint",
    price: 5.99,
    category: "Premium",
    description: "Cool mint ice cream with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
    ingredients: ["Mint", "Chocolate Chips", "Cream", "Sugar"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 5,
    name: "Vegan Coconut Bliss",
    flavor: "Vanilla",
    price: 6.99,
    category: "Vegan",
    description: "Creamy coconut-based vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80",
    ingredients: ["Coconut Milk", "Vanilla", "Sugar"],
    dietary: ["Vegan", "Dairy-Free", "Gluten-Free"]
  },
  {
    id: 6,
    name: "Caramel Swirl",
    flavor: "Caramel",
    price: 5.99,
    category: "Premium",
    description: "Vanilla ice cream with rich caramel swirls.",
    image: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&q=80",
    ingredients: ["Cream", "Caramel", "Sugar", "Vanilla"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 7,
    name: "Pistachio Dream",
    flavor: "Pistachio",
    price: 6.99,
    category: "Premium",
    description: "Rich pistachio ice cream with real nut pieces.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80",
    ingredients: ["Pistachios", "Cream", "Milk", "Sugar"],
    dietary: ["Gluten-Free"]
  },
  {
    id: 8,
    name: "Mango Tango",
    flavor: "Mango",
    price: 5.99,
    category: "Seasonal",
    description: "Refreshing mango ice cream with real fruit pieces.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80",
    ingredients: ["Mangoes", "Cream", "Sugar", "Vanilla"],
    dietary: ["Gluten-Free"]
  }
];