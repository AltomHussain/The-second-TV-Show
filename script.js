//You can edit ALL of the code here
const rootElem = document.getElementById("root");
let episodesContainer = document.createElement("div");
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
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
    episodesContainer.appendChild(mainDiv)
    rootElem.appendChild(episodesContainer);
  });

  footerInfo();
}
function footerInfo() {
  let footer = document.createElement("footer");
  let createP = document.createElement("p");
  createP.innerText = "This information originally comes from the TV Maz";
  footer.appendChild(createP);
  rootElem.appendChild(footer);
}
window.onload = setup;
