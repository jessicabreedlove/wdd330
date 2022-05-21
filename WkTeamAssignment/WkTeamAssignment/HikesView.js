class HikesView {
  constructor(listElement) {
    this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
  }
  renderHikeList(hikeList, listElement) {
    hikeList.forEach((hike) => {
      listElement.appendChild(renderOneHike(hike));
    });
  }
  renderOneHikeLight(hike) {
    return `<li><h2>${hike.name}</h2>
        <div><img class="image" src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
        </div>
        </li>`;
  }
  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal!
  }
}

export default HikesView;

// const imgBasePath = "//byui-cit.github.io/cit261/examples/";
// //on load grab the array and insert it into the page
//     window.addEventListener("load", () => {
//     showHikeList();
// });

// function showHikeList() {
//     const hikeListElement = document.getElementById("hikes");
//     hikeListElement.innerHTML = "";
//     renderHikeList(hikeList, hikeListElement);
// }
