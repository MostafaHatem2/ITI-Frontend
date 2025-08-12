fetch("./rockbands.json")
  .then((result) => result.json())
  .then((full) => {
    let labelBands = document.createElement("label");
    document.body.appendChild(labelBands);
    labelBands.innerHTML = "Bands: ";
    let selectBands = document.createElement("select");
    document.body.appendChild(selectBands);

    for (const band of Object.keys(full)) {
      let option = document.createElement("option");
      option.value = band;
      option.textContent = band;
      selectBands.appendChild(option);
    }
    let labelArtists = document.createElement("label");
    document.body.appendChild(labelArtists);
    labelArtists.innerHTML = "Artists: ";
    let selectArtists = document.createElement("select");
    document.body.appendChild(selectArtists);

    selectBands.addEventListener("change", function () {
      selectArtists.innerHTML = "";

      let artists = full[this.value];

      for (const artist of artists) {
        let option = document.createElement("option");
        option.value = artist.value;
        option.textContent = artist.name;
        selectArtists.appendChild(option);
      }
    });

    selectArtists.addEventListener("change", function () {
      window.open(this.value, "_blank");
    });
  });
