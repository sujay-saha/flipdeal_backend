const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

const sortProductsBasedOnKeyAscending = (products, key) => {
  return products.sort((p1, p2) => {
    return p1[key] - p2[key];
  });
};

const sortProductsBasedOnKeyDescending = (products, key) => {
  return products.sort((p1, p2) => {
    return p2[key] - p1[key];
  });
};

const filterProductsBasedOnKey = (products, key, value) => {
  return products.filter((p) => p[key] === value);
};

const filterProductsBasedOnKeyCaseInsensitive = (products, key, value) => {
  return products.filter((p) => p[key].toLowerCase() === value.toLowerCase());
};

const filterProductsBasedOnKeyLessThanOrEqualToValue = (
  products,
  key,
  value
) => {
  return products.filter((p) => p[key] <= value);
};

app.get('/products/sort/popularity', (req, res) => {
  let result = products.slice();
  let sortedProducts = sortProductsBasedOnKeyDescending(result, 'rating');
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  let result = products.slice();
  let sortedProducts = sortProductsBasedOnKeyDescending(result, 'price');
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  let result = products.slice();
  let sortedProducts = sortProductsBasedOnKeyAscending(result, 'price');
  res.json({ products: sortedProducts });
});

app.get('/products/filter/ram', (req, res) => {
  let value = parseInt(req.query.ram);
  let result = products.slice();
  let filteredProducts = filterProductsBasedOnKey(result, 'ram', value);
  res.json({ products: filteredProducts });
});

app.get('/products/filter/rom', (req, res) => {
  let value = parseInt(req.query.rom);
  let result = products.slice();
  let filteredProducts = filterProductsBasedOnKey(result, 'rom', value);
  res.json({ products: filteredProducts });
});

app.get('/products/filter/brand', (req, res) => {
  let value = req.query.brand;
  let result = products.slice();
  let filteredProducts = filterProductsBasedOnKeyCaseInsensitive(
    result,
    'brand',
    value
  );
  res.json({ products: filteredProducts });
});

app.get('/products/filter/os', (req, res) => {
  let value = req.query.os;
  let result = products.slice();
  let filteredProducts = filterProductsBasedOnKeyCaseInsensitive(
    result,
    'os',
    value
  );
  res.json({ products: filteredProducts });
});

app.get('/products/filter/price', (req, res) => {
  let value = parseInt(req.query.price);
  let result = products.slice();
  let filteredProducts = filterProductsBasedOnKeyLessThanOrEqualToValue(
    result,
    'price',
    value
  );
  res.json({ products: filteredProducts });
});

app.get('/products', (req, res) => {
  res.json({ products: products });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
