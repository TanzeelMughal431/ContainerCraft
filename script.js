function create() {
  let maincontner = document.getElementById("blogcontanier");
  let newfilm = document.getElementById("gfx").value;
  maincontner.innerHTML = "";
  console.log(newfilm);
  let film = 0;
  for (film = 0; film <= newfilm; film++) {
    // for random number funtion 
    let mixer = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // ------------
    let fulltextk = "film no:" + film + mixer;
    console.log(film + "no film");
    let divr = document.createElement("div");
    divr.classList.add("blogCard");
    maincontner.appendChild(divr);
    divr.style.backgroundColor = mixer;
    // now add inner appendChild
    let imgx = document.createElement("img");
    let titlex = document.createElement("h2");
    let paragx = document.createElement("p");
    // now add somethin in
    imgx.src = "https://placehold.co/600x400";
    titlex.innerHTML = fulltextk;
    paragx.innerHTML =
      "This is most famous film in the history of hollywood we love all film of hollywood but this is top rated on my galley beacuse some resons";
    //now install
    divr.appendChild(imgx);
    divr.appendChild(titlex);
    divr.appendChild(paragx);
  }
}
