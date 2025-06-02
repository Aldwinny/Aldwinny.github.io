const API_URL = "https://dummyjson.com";

const ENDPOINTS = {
  random: "/quotes/random",
  badEndpoint: "/quotes/sdf",
};

let shouldFail = false;

function setFail(value) {
  const failBtn = document.getElementById("fail-button");

  shouldFail = value;

  if (shouldFail) {
    failBtn.textContent = "Do not simulate error.";
    return;
  }
  failBtn.textContent = "Simulate error.";
}

async function loadQuote() {
  const quoteArea = document.getElementById("quote-data");
  const pendingIcon = document.getElementById("quote-pending");
  const errorIcon = document.getElementById("quote-error");

  pendingIcon.style.display = "none";
  errorIcon.style.display = "none";
  quoteArea.style.display = "none";
  try {
    pendingIcon.style.display = "block";
    const response = await fetch(
      `${API_URL}${shouldFail ? ENDPOINTS.badEndpoint : ENDPOINTS.random}`
    );
    let jsonResponse = await response.json();

    if (response.status != 200) {
      throw new Error(`Request Error! ${response.status} ${json.message}`);
    }
    pendingIcon.style.display = "none";
    console.log(`Retrieved result: ${JSON.stringify(jsonResponse)}`);
    quoteArea.style.display = "block";
    quoteArea.textContent = `"${jsonResponse.quote}" -${jsonResponse.author}`;
  } catch (error) {
    errorIcon.style.display = "block";
    quoteArea.style.display = "block";
    pendingIcon.style.display = "none";
    quoteArea.textContent = "   Request failed..";
    console.log(error);
  }
}

addEventListener("load", async () => {
  await loadQuote();
});
