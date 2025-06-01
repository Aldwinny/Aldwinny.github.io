const DEFAULTS_UNKNOWN_IMAGE =
  "https://singular.ad/wp-content/uploads/woocommerce-placeholder-600x600.png";

let search_query = "";
let isSearching = false;
let filter_list = [];

let books = [
  {
    isbn: "9780008283643",
    title: "The Alchemist",
    subtitle: "30th Anniversary Edition",
    author: "Paulo Coelho",
    published: "2018-01-01",
    publisher: "Harper Thorsons",
    description:
      '"The Alchemist" is a novel about a young shepherd boy, Santiago, who embarks on a journey to find a hidden treasure, ultimately realizing the treasure is the path he took and the wisdom he gained along the way',
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    categories: ["Fantasy", "Fiction", "Adventure", "Novel"],
    price: 599.75,
  },
  {
    isbn: "9780987654321",
    title: "Code & Coffee",
    subtitle: "Daily Musings of a Software Developer",
    author: "Juan Dela Cruz",
    published: "2022-09-30",
    publisher: "TechLit Publishing",
    description: "A humorous and honest reflection on life behind the screen.",
    image: "",
    categories: ["Technology", "Memoir", "Humor"],
    price: 420.0,
  },
  {
    isbn: "9781122334455",
    title: "Beyond the Islands",
    subtitle: "Exploring the Philippine Archipelago",
    author: "Liza Tan",
    published: "2021-12-01",
    publisher: "Isla Books",
    description:
      "A stunning travel guide to the hidden gems of the Philippines.",
    image: "",
    categories: ["Travel", "Culture", "Photography"],
    price: 899.5,
  },
  {
    isbn: "9781646090358",
    title: "Wandering Witch",
    subtitle: "The Journey of Elaina",
    author: "Jougi Shiraishi",
    published: "2020-07-14",
    publisher: "SB Creative",
    description:
      "Wandering Witch: The Journey of Elaina follows the whimsical adventures of Elaina, a young witch with a curious heart and a love for travel. As she journeys from town to town, she encounters unique people, strange customs, and magical mysteries. Each chapter is a new tale, blending wonder, melancholy, and humor as Elaina observes the world with a storyteller’s gaze—rarely interfering, but always learning.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582000629l/51922726.jpg",
    categories: ["Adventure", "Fantasy", "Fiction", "Light Novel"],
    price: 799,
  },
];

function sortBooks() {
  books = books.sort((prev, curr) => parseInt(prev.isbn) - parseInt(curr.isbn));
}

function toggleBookSection(show) {
  let bookSection = document.getElementById("modify-book-section");

  bookSection.style.display =
    show == null
      ? bookSection.style.display === "none"
        ? "block"
        : "none"
      : show
      ? "block"
      : "none";

  let content = document.getElementById("s-content");
  content.style.display = bookSection.style.display == "block" ? "none" : "";
}

function showBookCreator() {
  let modify_form = document.getElementById("modify-book");

  let image = document.getElementById("modify-book-image");
  let inputs = modify_form.getElementsByTagName("input");

  let button_create = document.getElementById("s-modify-button-create");
  let button_modify = document.getElementById("s-modify-button-modify");
  let button_delete = document.getElementById("s-modify-button-delete");

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  image.src = DEFAULTS_UNKNOWN_IMAGE;
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
  inputs[4].value = "";
  inputs[5].value = "";
  inputs[6].value = "";
  inputs[7].value = "";
  inputs[8].value = "";

  button_create.onclick = function () {
    let modify_form = document.getElementById("modify-book");
    let inputs = modify_form.getElementsByTagName("input");
    let [
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      description,
      categories,
      price,
    ] = Array.from(inputs).map((input) => input.value);
    let publish_date = new Date(published);
    published = `${publish_date.getFullYear()}-${String(
      publish_date.getDate()
    ).padStart(2, "0")}-${String(publish_date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    categories = categories.split(",").map((e) => e.trim());
    price = parseFloat(price);
    addBook(
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      description,
      categories,
      price
    );
    toggleBookSection(false);
  };
  button_create.style.display = "";
  button_modify.style.display = "none";
  button_delete.style.display = "none";
  toggleBookSection(true);
  console.log("Showing book creation form..");
}

function viewBook(index) {
  let book = books.at(index);
  let modify_form = document.getElementById("modify-book");

  let image = document.getElementById("modify-book-image");
  let inputs = modify_form.getElementsByTagName("input");

  let button_create = document.getElementById("s-modify-button-create");
  let button_modify = document.getElementById("s-modify-button-modify");
  let button_delete = document.getElementById("s-modify-button-delete");

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  if (book != null) {
    image.src =
      book.image == "" || book.image == null
        ? DEFAULTS_UNKNOWN_IMAGE
        : book.image;
    inputs[0].value = book.isbn;
    inputs[1].value = book.title;
    inputs[2].value = book.subtitle;
    inputs[3].value = book.author;
    inputs[4].value = book.published;
    inputs[5].value = book.publisher;
    inputs[6].value = book.description;
    inputs[7].value = book.categories;
    inputs[8].value = book.price;

    button_create.style.display = "none";
    button_modify.style.display = "";
    button_delete.style.display = "";
    button_modify.onclick = function () {
      modifyBook(index);
      toggleBookSection(false);
    };
    button_delete.onclick = function () {
      deleteBook(index);
      toggleBookSection(false);
    };
    toggleBookSection(true);
    console.log("Viewing book..");
  }
}

function addBook(
  isbn,
  title,
  subtitle,
  author,
  published,
  publisher,
  description,
  categories,
  price
) {
  books.push({
    isbn: isbn,
    title: title,
    subtitle: subtitle ?? "",
    author: author,
    published: published,
    publisher: publisher,
    description: description,
    categories: categories,
    price: price,
  });
  refreshBooks();
}
function deleteBook(index) {
  console.log(`Deleting book ${index}..`);
  books.splice(index, 1);
  refreshBooks();
}
function modifyBook(index) {
  console.log(`Modifying book ${index}..`);

  let modify_form = document.getElementById("modify-book");
  let inputs = modify_form.getElementsByTagName("input");
  let book = books[index];
  book.isbn = inputs[0].value;
  book.title = inputs[1].value;
  book.subtitle = inputs[2].value;
  book.author = inputs[3].value;
  book.published = inputs[4].value;
  book.publisher = inputs[5].value;
  book.description = inputs[6].value;
  let categories = inputs[7].value.split(",").map((e) => e.trim());
  book.categories = categories;
  book.price = inputs[8].value;

  refreshBooks();
}

function refreshBooks() {
  console.log("Refreshing books..");
  let bookElements = document.querySelectorAll(".item-book:not(:first-child)");
  console.log(bookElements);
  bookElements.forEach((e) => e.remove());
  prepareCategories();
  prepareBooks();
}

function search(query) {
  search_query = query ?? "";

  if (search_query.trim() != "") {
    isSearching = true;
  } else {
    isSearching = false;
  }

  refreshBooks();
}

function prepareCategories() {
  // Build categories using the JSON data we have
  let categories = new Set();
  books.forEach((book) => {
    let categorySet = book.categories.map((e) => {
      let result = e[0].toUpperCase();
      result = result + e.slice(1).toLowerCase();
      return result;
    });
    categorySet.forEach((category) => categories.add(category));
  });

  let targetParent = document.getElementById("categories");
  let children = targetParent.querySelectorAll(".checkbox-parent");
  children.forEach((e) => e.remove());

  categories.forEach((category) => {
    let div = document.createElement("div");
    div.classList.add("checkbox-parent");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.checked = filter_list.some(
      (filter) => filter.toLowerCase() == category.toLowerCase()
    );
    input.onchange = () => {
      input.checked
        ? filter_list.push(category.toLowerCase())
        : filter_list.splice(filter_list.indexOf(category.toLowerCase()), 1);

      refreshBooks();
    };

    let p = document.createElement("p");
    p.textContent = category;

    div.appendChild(input);
    div.appendChild(p);

    targetParent.appendChild(div);
  });
  console.log(categories);
}

function prepareBooks() {
  sortBooks();
  let bookSection = document.getElementById("books");

  for (const book of books) {
    if (isSearching) {
      console.log(`searching for ${search_query}`);
      if (
        book.title.indexOf(search_query) == -1 &&
        book.description.indexOf(search_query) == -1 &&
        book.author.indexOf(search_query) == -1 &&
        book.publisher.indexOf(search_query) == -1
      ) {
        console.log(`Skipping ${book.title}..`);
        continue;
      }
    }

    if (filter_list.length > 0) {
      let filter_matches = false;
      for (const filter of filter_list) {
        let hasMatch = book.categories.some(
          (e) => e.toLowerCase() === filter.toLowerCase()
        );
        if (hasMatch) {
          filter_matches = true;
          break;
        }
      }
      if (!filter_matches) {
        continue;
      }
    }

    let displayTitle = book.title;
    let displayCategories = book.categories.reduce(
      (prev, curr) => `${prev}, ${curr}`
    );
    let displayISBN = `ISBN ${book.isbn}`;

    console.log(
      `Displaying book as ${displayTitle}, ${displayCategories}, ${displayISBN}`
    );

    let bookParent = document.createElement("div");
    bookParent.classList.add("item-book", "margin-small");
    let bookImage = document.createElement("img");
    bookImage.setAttribute(
      "src",
      book.image != null && book.image.length > 2
        ? book.image
        : DEFAULTS_UNKNOWN_IMAGE
    );
    let bookTitle = document.createElement("p");
    bookTitle.textContent = displayTitle;
    let bookCategories = document.createElement("p");
    bookCategories.textContent = displayCategories;
    let bookISBN = document.createElement("p");
    bookISBN.textContent = displayISBN;
    let bookModify = document.createElement("button");
    bookModify.textContent = "Modify";
    bookModify.onclick = function () {
      console.log(`Opening book.. ${i}`);
      viewBook(i);
    };

    bookParent.appendChild(bookImage);
    bookParent.appendChild(bookTitle);
    bookParent.appendChild(bookCategories);
    bookParent.appendChild(bookISBN);
    bookParent.appendChild(bookModify);

    bookSection.appendChild(bookParent);
  }
}

addEventListener("load", (e) => {
  prepareCategories();
  prepareBooks();
});
