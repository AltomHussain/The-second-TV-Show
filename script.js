//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach((episode) => {
    let mainDiv = document.createElement("div");
    let episodeTitle = document.createElement("h3");
    let episodeImage = document.createElement("img");
    let episodeSummary = document.createElement("p");
    mainDiv.className = "main-div";
    episodeTitle.className = "title";
    episodeImage.className = "image";
    episodeSummary.className = "summary";
    
    episode.season < 10 && episode.number < 10
      ? (episodeTitle.innerText = `${episode.name} - S0${episode.season} E0${episode.number}`)
      : (episodeTitle.innerText = `${episode.name} - S0${episode.season} E${episode.number}`);
    episodeImage.src = `${episode.image.medium}`;
    episodeSummary.innerHTML = `${episode.summary}`;
    mainDiv.appendChild(episodeTitle);
    mainDiv.appendChild(episodeImage);
    mainDiv.appendChild(episodeSummary);
    rootElem.appendChild(mainDiv);
  });
}

window.onload = setup;
