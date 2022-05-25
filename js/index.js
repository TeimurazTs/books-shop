let fragment = new DocumentFragment();
const section = document.querySelector(".section");

// create header

let header = document.createElement("header");
header.classList.add("header", "container");
section.append(header);

// create main

let main = document.createElement("main");
main.classList.add("main", "container");
section.append(main);

// create chartDiv

let chartDiv = document.createElement("div");
chartDiv.classList.add("chartDiv", "container");
section.append(chartDiv);

// add header stuff

let headerLogo = document.createElement("p");
headerLogo.classList.add("headerLogo");
headerLogo.textContent = "BookShop";
header.append(headerLogo);

let headerNav = document.createElement("nav");
headerNav.classList.add("nav");
header.append(headerNav);

let headerUl = document.createElement("ul");
headerUl.classList.add("headerUl");
headerNav.append(headerUl);

let headerLiFirst = document.createElement("li");
headerLiFirst.classList.add("headerLiFirst", "headerLi");
headerLiFirst.textContent = "Home";
headerUl.append(headerLiFirst);

let headerLiSecond = document.createElement("li");
headerLiSecond.classList.add("headerLiSecond", "headerLi");
headerLiSecond.textContent = "News";
headerUl.append(headerLiSecond);

let headerLiThird = document.createElement("li");
headerLiThird.classList.add("headerLiThird", "headerLi");
headerLiThird.textContent = "Contact";
headerUl.append(headerLiThird);

let headerLiFourth = document.createElement("li");
headerLiFourth.classList.add("headerLiFourth", "headerLi");
headerLiFourth.textContent = "Blog";
headerUl.append(headerLiFourth);

// create main stuff

let mainP = document.createElement("p");
mainP.classList.add("mainP");
mainP.textContent = "Knowledge is power";
main.append(mainP);

let mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
main.append(mainDiv);

// create chartDiv stuff
let chartDivP = document.createElement("p");
chartDivP.classList.add("chartDivP");
chartDivP.textContent = "Chart";
main.append(chartDivP);

// create chartDiv price
let chartDivPrice = document.createElement("p");
chartDivPrice.classList.add("chartDivPrice");
chartDivPrice.textContent = "Total: " + 0 + "$";
chartDiv.append(chartDivPrice);

// craete confirm order button

let confirmOrderButtonA = document.createElement("a");
confirmOrderButtonA.classList.add("confirmOrderButtonA");
confirmOrderButtonA.textContent = "Confirm order";
confirmOrderButtonA.setAttribute("href", "./index2.html");
chartDiv.append(confirmOrderButtonA);

// main P stuff

let wisdom = [
  "Wisdom is not a product of schooling but of the lifelong attempt to acquire it",
  "It isn't what the book costs; it's what it will cost if you don't read it.",
  "One idea discovered in one book can change the way you see the world.",
  "It does not matter how many books you have, but how good the books are which you have.",
  "Many time the reading of a book has made the future of a man.",
  "No matter how busy you may think you are you must find time for reading, or surrender yourself to self-chosen ignorance.",
  "My best friend is a person who will give me a book I have not read.",
  "Seeking knowledge is a duty upon every men.",
  "A room without books is like a body without a soul",
  "One's mind once streched by a new idea never regains it's original dimensions.",
];

function addText(textData) {
  let i = 0;
  setInterval(() => {
    mainP.textContent = textData[i];
    i++;
    if (i > 10) {
      mainP.textContent = "Knowledge is power";
      i = 0;
    }
  }, 6000);
}

addText(wisdom);

fetch("./js/books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createBooks(data);
  });

function createBooks(bookData) {
  for (let i = 0; i < bookData.length; i++) {
    //create Div
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv", `index-${i}`);
    // add author
    let authorName = document.createElement("p");
    authorName.textContent = bookData[i].author;
    authorName.classList.add("authorName");
    bookDiv.append(authorName);
    // add image
    let image = document.createElement("img");
    image.setAttribute("src", bookData[i].imageLink);
    image.classList.add("image");
    bookDiv.append(image);
    // add title
    let title = document.createElement("p");
    title.textContent = bookData[i].title;
    title.classList.add("title");
    bookDiv.append(title);
    // add price
    let price = document.createElement("p");
    price.textContent = bookData[i].price;
    price.classList.add("price");
    bookDiv.append(price);
    // add description
    let description = document.createElement("p");
    description.textContent = bookData[i].description;
    description.classList.add("description", `show-${i}`);
    bookDiv.append(description);
    // add X close
    let close = document.createElement("p");
    close.textContent = "X";
    close.classList.add("close", `show-${i}`);
    close.addEventListener("click", descriptionToggle);
    description.append(close);
    // add button
    let button = document.createElement("button");
    button.textContent = "Show more";
    button.classList.add("button", `show-${i}`);
    button.addEventListener("click", descriptionToggle);
    bookDiv.append(button);
    // add addToChart button
    let addToChartButton = document.createElement("button");
    addToChartButton.textContent = "Add to chart";
    addToChartButton.classList.add(
      "addToChartButton",
      `index-${i}`,
      `button-index-${i}`
    );
    addToChartButton.addEventListener("click", addToChartFunc);
    bookDiv.append(addToChartButton);
    // add bookDiv to mainDiv
    mainDiv.append(bookDiv);
  }
}

function descriptionToggle(e) {
  document.querySelector(`.${e.target.classList[1]}`).classList.toggle("show");
}

function addToChartFunc(e) {
  if (e.target.parentElement.parentElement.classList[0] === "chartDiv") {
    mainDiv.appendChild(document.querySelector(`.${e.target.classList[1]}`));
    document.querySelector(`.${e.target.classList[2]}`).textContent =
      "Add to chart";
    document
      .querySelector(`.${e.target.classList[1]}`)
      .childNodes[1].classList.remove("display-none");
    document
      .querySelector(`.${e.target.classList[1]}`)
      .childNodes[5].classList.remove("display-none");
    countPrice();
  } else {
    document.querySelector(`.${e.target.classList[1]}`);
    chartDiv.append(document.querySelector(`.${e.target.classList[1]}`));
    document.querySelector(`.${e.target.classList[2]}`).textContent = "Remove";
    document
      .querySelector(`.${e.target.classList[1]}`)
      .childNodes[1].classList.add("display-none");
    document
      .querySelector(`.${e.target.classList[1]}`)
      .childNodes[5].classList.add("display-none");
    countPrice();
  }
}

function countPrice() {
  let prices = [];
  for (let i = 2; i < chartDiv.childNodes.length; i++) {
    let priceCount = chartDiv.childNodes[i].childNodes[3].textContent;
    prices.push(parseInt(priceCount));
  }
  let totalPrice = prices.reduce((a, b) => a + b, 0);
  document.querySelector(".chartDivPrice").textContent =
    "Total: " + totalPrice + "$";
}

section.append(fragment);
