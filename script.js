
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
const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist");

  html2canvas(contentToPrint, {}).then((canvas) => {
    let a = document.createElement("a");
    a.download = "checklist.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
};

const toggleChecklist = () => {
  let myChecklist = document.querySelector("#checklist");
  myChecklist.classList.toggle("hidden");

  let toggleButton = document.querySelector("#toggle-checklist");

  if (myChecklist.classList.contains("hidden")) {
    toggleButton.innerHTML = "Open Checklist";
  } else {
    toggleButton.innerHTML = "Close Checklist";
  }
};
