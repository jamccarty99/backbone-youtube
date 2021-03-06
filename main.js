// A user should be able to search something in the search bar, and get a list of videos back, with one showing up in the main screen.
// When a user clicks a video in the list on the right, the main video should change to that video.
// Each time a user clicks a different video, the title and description beneath the main video should update as well.
// When the user first loads the page, there should be a default search so the page is not blank.
var appModel = new AppModel();

var appView = new AppView({ model: appModel });

appModel.get('videos').fetch({
  success: function () {
    var videoRouter = new VideoRouter();
    Backbone.history.start();
  }}, {reset: true});
