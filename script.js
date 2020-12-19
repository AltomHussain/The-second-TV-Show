//You can edit ALL of the code here
const rootElem = document.getElementById("root");
let episodesContainer = document.createElement("div");
let displayNumberOfEpisode = document.createElement("p");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  let header = document.createElement("header");
  let searchBarContainer = document.createElement("div");
  searchBarContainer.className = "search-bar-div";
  let searchBarInput = document.createElement("input");
  displayNumberOfEpisode.id = "display-filtered";
  searchBarInput.className = "search-bar-input";
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

window.onload = setup;
