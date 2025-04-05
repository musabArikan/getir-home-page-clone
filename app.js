const main = document.querySelector(".products");
let products = [];
const formatPrice = (price) => {
   return price.toFixed(2).replace(".", ",");
};

const listİtems = (image, title, price) => {
   let Product = document.createElement("div");
   let Image = document.createElement("img");
   let Price = document.createElement("div");
   let Title = document.createElement("div");

   Product.classList.add("product");
   Title.classList.add("products-title");
   Price.classList.add("products-price");
   Image.src = image;
   Title.textContent = truncateString(title, 20);
   Price.textContent = "₺" + formatPrice(price);
   Product.appendChild(Image);
   Product.appendChild(Price);
   Product.appendChild(Title);
   main.appendChild(Product);
   Title.style.color = "#191919";
};

const truncateString = (title, maxLength) => {
   if (title.length > maxLength) {
      return title.slice(0, maxLength) + " ";
   } else {
      return title;
   }
};

const getProducts = async () => {
   let data = await fetch("https://fakestoreapi.com/products");
   let result = await data.json();
   products = result;
   products.map((item) => {
      void listİtems(item.image, item.title, item.price);
   });
};
getProducts();
