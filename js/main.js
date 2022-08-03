const elList = document.querySelector(".list");
const elSelect = document.querySelector(".js-select");
const sortFilmsAToZ = document.querySelector(".sort-js-a__z");
const sortFilmsZToA = document.querySelector(".sort-js-z__a");
const date = function (a) {
  return Math.round(a / 31536000) + 1970;
};

function appendToDom(array, node) {
  for (items of array) {
    let newItem = document.createElement("li");
    let elTitle = document.createElement("h2");
    let elId = document.createElement("span");
    let elImg = document.createElement("img");
    let elGenres = document.createElement("p");
    let elOverview = document.createElement("p");
    let data = document.createElement("time");
    elTitle.textContent = `${items.title}`;
    elId.textContent = `${items.id}`;
    elImg.src = `${items.poster}`;
    elGenres.textContent = `action: ${items.genres}`;
    elOverview.textContent = `${items.overview}`;
    data.textContent = `Release date of the film: ${date(items.release_date)}`;

    elImg.setAttribute("class", "img");
    newItem.setAttribute("class", "box");

    newItem.appendChild(elImg);
    newItem.appendChild(elTitle);
    newItem.appendChild(elId);
    newItem.appendChild(elGenres);
    newItem.appendChild(elOverview);
    newItem.appendChild(data);

    node.appendChild(newItem);
  }
}

appendToDom(films, elList);

let result = [];
elSelect.addEventListener("change", () => {
  result = [];
  elList.innerHTML = "";
  let elSelectVal = elSelect.value;
  films.forEach((res) => {
    if (res.genres.includes(elSelectVal)) {
      result.push(res);
    }
  });
  appendToDom(result, elList);
});

let optionList = new Set();


films.forEach((item) => {
  optionList.add(...item.genres);
});

optionList.forEach((elment) => {
  let newOption = document.createElement("option");
  newOption.textContent = elment;
  newOption.value = elment;
  newOption.setAttribute("class","options")
  elSelect.appendChild(newOption);
});
elSelect.setAttribute("class","select")

sortFilmsAToZ.addEventListener("click", () => {
    let sortArray = films.sort((a,b) => (a.title > b.title) ? 1 : -1)
    elList.innerHTML = ""
    appendToDom(sortArray,elList)
})

sortFilmsZToA.addEventListener("click", () => {
    let sortArray = films.sort((a,b) => (a.title > b.title) ? -1 : 1)
    elList.innerHTML = ""
    appendToDom(sortArray,elList)
})