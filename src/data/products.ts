export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  priceValue: number;
  reviews: number;
  image: string | null;
  combo?: boolean;
  category: string;
  description: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "classic-ridged-chips",
    name: "Classic Ridged Chips",
    subtitle: "Crispy. Tasty. Always a hit!",
    price: "$2.49",
    priceValue: 2.49,
    reviews: 124,
    image: "/products/classic-chips.png",
    category: "Chips",
    description:
      "Our signature ridged chips — golden, crunchy, and packed with classic flavor kids and families love. Perfect for lunchboxes, movie nights, and everyday snacking.",
    highlights: ["Kid approved crunch", "No artificial colors", "Great for sharing"],
  },
  {
    slug: "spicy-chips",
    name: "Spicy Chips",
    subtitle: "Bold heat in every crunch!",
    price: "$2.49",
    priceValue: 2.49,
    reviews: 98,
    image: "/products/spicy-chips.png",
    category: "Chips",
    description:
      "A bold, zesty kick in every bite. These spicy ridged chips bring the heat without losing that Brianna-approved crunch — made for snack lovers who like it spicy.",
    highlights: ["Zesty spice blend", "Extra crunchy ridges", "Party favorite"],
  },
  {
    slug: "apple-juice",
    name: "Apple Juice",
    subtitle: "Sweet, fresh & refreshing!",
    price: "$1.99",
    priceValue: 1.99,
    reviews: 156,
    image: "/products/apple-juice.png",
    category: "Drinks",
    description:
      "Sweet, refreshing apple juice in a fun pack kids love. Ideal for school, sports, and pairing with Brianna's chips for the perfect snack combo.",
    highlights: ["Refreshing taste", "Lunchbox friendly", "Pairs with chips"],
  },
  {
    slug: "cola-drink",
    name: "Cola Drink",
    subtitle: "Fizzy fun in every sip!",
    price: "$1.99",
    priceValue: 1.99,
    reviews: 87,
    image: "/products/cola-drink.png",
    category: "Drinks",
    description:
      "Classic fizzy cola fun in every sip. A crowd-pleaser for parties, picnics, and stacking with chips for happier snack moments.",
    highlights: ["Classic cola taste", "Ice-cold ready", "Bundle friendly"],
  },
  {
    slug: "snack-combo-pack",
    name: "Snack Combo Pack",
    subtitle: "Chips + drinks. More smiles!",
    price: "$5.99",
    priceValue: 5.99,
    reviews: 203,
    image: null,
    combo: true,
    category: "Bundles",
    description:
      "More snacks, more smiles! Our combo pack stacks classic chips, spicy crunch, apple juice, and cola — perfect for parties, school, or family fun.",
    highlights: ["Best value bundle", "4 tasty treats", "Perfect for parties"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}
