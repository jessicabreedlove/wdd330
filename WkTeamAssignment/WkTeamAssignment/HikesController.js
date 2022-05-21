import HikeModel from './HikesModel.js';
import HikesView from './HikesView.js';

// const parentId = 'hikes';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }

  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    let hikesList = this.hikeModel.getAllHikes;
    this.hikesView.renderHikeList(hikesList, this.parentElement);
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend.
  }
}
