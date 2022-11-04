let counter = 1;
//Counter to be used to keep pages going back and foward with arrows
const advanceContent = () => {
  if (counter < 14) {
    counter++;
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.remove("hidden");
  }
};

const returnContent = () => {
  if (counter > 1) {
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.add("hidden");
    counter--;
  }
};
//Whole statement used to make the download button work
const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist");
  //ignore this error - doesnt work in glitch but will in github
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
  //statement that changes the button text to reflect if it is open or closed
  if (myChecklist.classList.contains("hidden")) {
    toggleButton.innerHTML = "Open Checklist";
  } else {
    toggleButton.innerHTML = "Close Checklist";
  }
};
