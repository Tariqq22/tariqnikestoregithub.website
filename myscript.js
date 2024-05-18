const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FRANCE JERSEY 2024",
    price: 499,
    colors: [
      {
        code: "black",
        img: "images/file.png",
      },
      {
        code: "darkblue",
        img: "images/file.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 339,
    colors: [
      {
        code: "black",
        img: "images/jordan.png",
      },
      {
        code: "green",
        img: "images/jordan.png",
      },
    ],
  },
  {
    id: 3,
    title: "football shoes",
    price: 700,
    colors: [
      {
        code: "lightgray",
        img: "images/nikef.png",
      },
      {
        code: "grey",
        img: "images/nikef.png",
      },
    ],
  },
  {
    id: 4,
    title: "Sneakers",
    price: 421,
    colors: [
      {
        code: "brown light",
        img: "images/file (1).png",
      },
      {
        code: "beige",
        img: "images/file (1).png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "aed" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

  
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});