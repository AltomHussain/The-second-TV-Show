//You can edit ALL of the code here
const rootElem = document.getElementById("root");
let episodesContainer = document.createElement("div");
let displayNumberOfEpisode = document.createElement("p");
let searchBarContainer = document.createElement("div");
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  let header = document.createElement("header");
  searchBarContainer.className = "search-bar-div";
  let searchBarInput = document.createElement("input");
  displayNumberOfEpisode.id = "display-filtered";
  searchBarInput.className = "search-bar-input";
  selectEpisode(episodeList);

  searchBarContainer.appendChild(searchBarInput);
  header.appendChild(searchBarContainer);
  header.appendChild(displayNumberOfEpisode);
  rootElem.appendChild(header);
  episodeList.forEach((episode) => {
    let mainDiv = document.createElement("div");
    let episodeTitle = document.createElement("h3");
    let episodeImage = document.createElement("img");
    let episodeSummary = document.createElement("p");
    mainDiv.className = "main-div";
    episodeTitle.className = "title";
    episodeImage.className = "episode-image";
    episodeSummary.className = "episode-summary";
    episodesContainer.className = "episodes-container";
    episode.season < 10 && episode.number < 10
      ? (episodeTitle.innerText = `${episode.name} - S0${episode.season} E0${episode.number}`)
      : (episodeTitle.innerText = `${episode.name} - S0${episode.season} E${episode.number}`);
    episodeImage.src = `${episode.image.medium}`;
    episodeSummary.innerHTML = `${episode.summary}`;
    mainDiv.appendChild(episodeTitle);
    mainDiv.appendChild(episodeImage);
    mainDiv.appendChild(episodeSummary);
    episodesContainer.appendChild(mainDiv);
    rootElem.appendChild(episodesContainer);
  });
  //Calling the Search bar function
  let getTheMainDiv = Array.from(document.querySelectorAll(".main-div"));
  searchBar(getTheMainDiv, searchBarInput, displayNumberOfEpisodes);
  //Calling disNumberOfFilteredEpisodes

  displayNumberOfEpisodes(episodeList, episodeList);
  //Selection function
  footerInfo();
}

function searchBar(getTheMainDiv, searchBarInput, displayNumberOfEpisodes) {
  searchBarInput.addEventListener("keyup", function (e) {
    let searchTerm = e.target.value.toLowerCase();
    getTheMainDiv.forEach((text) => {
      let getTextFromDiv = text.innerText;
      if (getTextFromDiv.toLowerCase().indexOf(searchTerm) !== -1) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    });
    let displayNum = getTheMainDiv.filter(
      (val) => val.style.display === "block"
    );
    displayNumberOfEpisodes(displayNum, getTheMainDiv);
  });
}

function displayNumberOfEpisodes(displayNum, getTheMainDiv) {
  console.log(displayNumberOfEpisode);
  return (displayNumberOfEpisode.innerText = `Display ${displayNum.length}/ ${getTheMainDiv.length} Episodes`);
}
function footerInfo() {
  let footer = document.createElement("footer");
  let createP = document.createElement("p");
  createP.innerText = "This information originally comes from the TV Maz";
  footer.appendChild(createP);
  rootElem.appendChild(footer);
}
function selectEpisode(episodeList) {
  let select = document.createElement("select");
  let defaultOption = document.createElement("option");
  defaultOption.innerText = "select all";
  select.appendChild(defaultOption);
  episodeList.forEach((episode) => {
    let option = document.createElement("option");
    //to refactor to small reusable function
    episode.season < 10 && episode.number < 10
      ? (option.innerText = `${episode.name} - S0${episode.season} E0${episode.number}`)
      : (option.innerText = `${episode.name} - S0${episode.season} E${episode.number}`);
    select.appendChild(option);
    searchBarContainer.appendChild(select);
  });
}
window.onload = setup;
