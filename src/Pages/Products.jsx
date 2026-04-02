import ProductsCard from "../Components/ProductsCard";

const Products = () => {
  const productsList = [
    {
      id: 1,
      sku: "TECH-001",
      name: "Apple MacBook Pro M4 Pro",
      brand: "Apple",
      category: "Laptops",
      price: 1999.0,
      rating: 4.9,
      reviews: 6120,
      inStock: true,
      stock: 18,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
      description:
        'M4 Pro chip, 14-core CPU, 20-core GPU, 24GB unified memory, 14" Liquid Retina XDR display.',
    },

    {
      id: 3,
      sku: "TECH-003",
      name: "Sony WH-1000XM5 Headphones",
      brand: "Sony",
      category: "Audio",
      price: 349.99,
      rating: 4.8,
      reviews: 23410,
      inStock: true,
      stock: 72,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      description:
        "Industry-leading ANC, 30-hour battery, multipoint connection, and crystal-clear call quality.",
    },
    {
      id: 4,
      sku: "TECH-004",
      name: 'Apple iPad Pro 13" M4',
      brand: "Apple",
      category: "Tablets",
      price: 1299.0,
      rating: 4.9,
      reviews: 4421,
      inStock: true,
      stock: 30,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
      description:
        "Ultra Retina XDR OLED display, M4 chip, Apple Pencil Pro support, thinnest Apple product ever.",
    },
    {
      id: 5,
      sku: "TECH-005",
      name: "NVIDIA GeForce RTX 4090",
      brand: "NVIDIA",
      category: "GPUs",
      price: 1599.0,
      rating: 4.9,
      reviews: 3302,
      inStock: false,
      stock: 0,
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80",
      description:
        "16384 CUDA cores, 24GB GDDR6X, DLSS 3, Ada Lovelace architecture — the ultimate gaming GPU.",
    },
    {
      id: 6,
      sku: "TECH-006",
      name: "Apple Watch Ultra 2",
      brand: "Apple",
      category: "Wearables",
      price: 799.0,
      rating: 4.7,
      reviews: 5612,
      inStock: true,
      stock: 41,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      description:
        "Titanium case, dual-frequency GPS, 36hr battery, 100m water resistance, S9 SiP chip.",
    },
    {
      id: 7,
      sku: "TECH-007",
      name: "Dell XPS 15 OLED (2024)",
      brand: "Dell",
      category: "Laptops",
      price: 1849.99,
      rating: 4.6,
      reviews: 2871,
      inStock: true,
      stock: 14,
      image:
        "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
      description:
        'Intel Core Ultra 9, RTX 4070, 15.6" 3.5K OLED touch, 64GB DDR5, CNC aluminum chassis.',
    },
    {
      id: 8,
      sku: "TECH-008",
      name: "DJI Mini 4 Pro Drone",
      brand: "DJI",
      category: "Drones",
      price: 759.0,
      rating: 4.8,
      reviews: 1988,
      inStock: true,
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80",
      description:
        "4K/60fps HDR video, omnidirectional obstacle sensing, 34-min flight time, under 249g.",
    },
    {
      id: 9,
      sku: "TECH-009",
      name: 'Samsung 49" Odyssey G9 Monitor',
      brand: "Samsung",
      category: "Monitors",
      price: 1199.99,
      rating: 4.7,
      reviews: 4102,
      inStock: true,
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
      description:
        "Dual QHD 5120×1440, 240Hz, 1ms, Mini LED, 1000R curve — the ultimate ultrawide gaming monitor.",
    },
    {
      id: 10,
      sku: "TECH-010",
      name: "Logitech MX Master 3S Mouse",
      brand: "Logitech",
      category: "Accessories",
      price: 99.99,
      rating: 4.8,
      reviews: 18760,
      inStock: false,
      stock: 0,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      description:
        "8000 DPI MagSpeed scroll, ultra-quiet clicks, Bluetooth + USB-C, works on any surface.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="pt-8 flex flex-wrap gap-7.5 justify-center">
          {productsList.map((items) => {
            return <ProductsCard details={items} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Products;
