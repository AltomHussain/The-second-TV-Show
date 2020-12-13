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

    episodeTitle.innerText = `${episode.name} - S${episode.season} E${episode.number}`;
    episodeImage.src = `${episode.image.medium}`;
    episodeSummary.innerHTML = `${episode.summary}`
    mainDiv.appendChild(episodeTitle);
    mainDiv.appendChild(episodeImage);
    mainDiv.appendChild(episodeSummary);
    rootElem.appendChild(mainDiv);
  });
}

window.onload = setup;
