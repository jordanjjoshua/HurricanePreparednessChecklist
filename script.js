
let counter = 1;

const advanceContent = () => {
  if (counter <14) {
    counter++;
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.remove("hidden");
  }
}

const returnContent = () => {
  if (counter > 1) {
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.add("hidden");
    counter--;
  }
};

