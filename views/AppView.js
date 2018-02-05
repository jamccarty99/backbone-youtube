var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-videos': 'createVideoOnClick',

  },

  initialize: function () {
      this.$searchInput = this.$('#search-input');
      this.$videoList = this.$('.video-list');

      this.listenTo(this.model, 'change:current_beer', this.renderDetailView);

      this.listenTo(this.model.get('beers'), 'add', this.renderBeer);

      this.listenTo(this.model, 'change:show_reviews', this.renderPage);

      this.listenTo(this.model.get('beers'), 'reset', this.renderBeers);

  },

  createVideoOnClick: function () {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
  player: function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  },

    // 4. The API will call this function when the video player is ready.
  onPlayerReady: function (event) {
    event.target.playVideo();
  },

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.

  onPlayerStateChange: function (event) {
    var done = false;
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  },

  stopVideo: function () {
    player.stopVideo();
  },

  render: function () {

  },

  // After the API loads, call a function to enable the search box.
  handleAPILoaded: function () {
    $('#search-button').attr('disabled', false);
  },

  // Search for a specified string.
  search: function () {
    var q = $('#search-text-input').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });

    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  },
})
