const products = [
  { id: 1, name: "Apple", category: "Fruits", price: 100, image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg" },
  { id: 2, name: "Banana", category: "Fruits", price: 40, image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg" },
  { id: 3, name: "Orange", category: "Fruits", price: 80, image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg" },
  { id: 4, name: "Mango", category: "Fruits", price: 120, image: "https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg" },
  { id: 5, name: "Pineapple", category: "Fruits", price: 90, image: "https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg" },
  { id: 6, name: "Grapes", category: "Fruits", price: 110, image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg" },
  { id: 7, name: "Watermelon", category: "Fruits", price: 150, image: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg" },
  { id: 8, name: "Papaya", category: "Fruits", price: 70, image: "https://images.pexels.com/photos/5945846/pexels-photo-5945846.jpeg" },
  { id: 9, name: "Strawberry", category: "Fruits", price: 200, image: "https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg" },
  { id: 10, name: "Blueberry", category: "Fruits", price: 250, image: "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg" },

  { id: 11, name: "Carrot", category: "Vegetables", price: 50, image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg" },
  { id: 12, name: "Potato", category: "Vegetables", price: 30, image: "https://www.jiomart.com/images/product/original/590001952/potato-approx-900-g-1000-g-product-images-o590001952-p611163421-0-202510272019.jpg?im=Resize=(1000,1000)" },
  { id: 13, name: "Tomato", category: "Vegetables", price: 60, image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg" },
  { id: 14, name: "Onion", category: "Vegetables", price: 45, image: "https://creativefarmer.in/cdn/shop/products/fresh-red-onion-indian--091.jpg?v=1616235843" },
  { id: 15, name: "Cabbage", category: "Vegetables", price: 35, image: "https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg" },
  { id: 16, name: "Broccoli", category: "Vegetables", price: 90, image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg" },
  { id: 17, name: "Spinach", category: "Vegetables", price: 25, image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg" },
  { id: 18, name: "Cauliflower", category: "Vegetables", price: 55, image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { id: 19, name: "Peas", category: "Vegetables", price: 65, image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg" },
  { id: 20, name: "Beans", category: "Vegetables", price: 70, image: "https://images.pexels.com/photos/5945901/pexels-photo-5945901.jpeg" },

  { id: 21, name: "Cucumber", category: "Vegetables", price: 40, image: "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg" },
  { id: 22, name: "Radish", category: "Vegetables", price: 30, image: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg" },
  { id: 23, name: "Brinjal", category: "Vegetables", price: 50, image: "https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg" },
  { id: 24, name: "Capsicum", category: "Vegetables", price: 85, image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg" },
  { id: 25, name: "Pumpkin", category: "Vegetables", price: 45, image: "https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg" },

  { id: 26, name: "Guava", category: "Fruits", price: 60, image: "https://images.pexels.com/photos/5945845/pexels-photo-5945845.jpeg" },
  { id: 27, name: "Kiwi", category: "Fruits", price: 180, image: "https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg" },
  { id: 28, name: "Pomegranate", category: "Fruits", price: 140, image: "https://images.pexels.com/photos/5945753/pexels-photo-5945753.jpeg" },
  { id: 29, name: "Litchi", category: "Fruits", price: 160, image: "https://images.pexels.com/photos/5945754/pexels-photo-5945754.jpeg" },
  { id: 30, name: "Cherry", category: "Fruits", price: 220, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Bing_Cherries_%28USDA_ARS%29.jpg/960px-Bing_Cherries_%28USDA_ARS%29.jpg" },

  { id: 31, name: "Corn", category: "Vegetables", price: 50, image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg" },
  { id: 32, name: "Zucchini", category: "Vegetables", price: 90, image: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg" },
  { id: 33, name: "Mushroom", category: "Vegetables", price: 120, image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg" },
  { id: 34, name: "Garlic", category: "Vegetables", price: 80, image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg" },
  { id: 35, name: "Ginger", category: "Vegetables", price: 100, image: "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg" },
];

export default products;