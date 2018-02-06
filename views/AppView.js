var AppView = Backbone.View.extend({
  el: 'body',

  template: Handlebars.compile($('#video-template').html()),

  events: {
    'click .search-videos': 'createVideoOnClick',

  },

  initialize: function () {
      this.$searchInput = this.$('#search-text-input').val();
      this.$videoList = this.$('.video-list').val();
      this.$videoName = this.$('.video-name').val();
      this.$videoDescription = this.$('video-description').val();

      this.listenTo(this.model, 'change:current_video', this.render);

      this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

      this.listenTo(this.model, 'change:show_videos', this.renderPage);

      this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    //  return this.render();
  },

  createVideoOnClick: function () {
    this.model.get('videos').create({
          title: this.$nameInput,
          description: this.$videoDescription,
        }, { wait: true });


    // 2. This code loads the IFrame Player API code asynchronously.
  //   var tag = document.createElement('script');
  //
  //   tag.src = "https://www.youtube.com/iframe_api";
  //   var firstScriptTag = document.getElementsByTagName('script')[0];
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //   this.player();
   },

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
  // player: function onYouTubeIframeAPIReady() {
  //   player = new YT.Player('player', {
  //     height: '390',
  //     width: '640',
  //     id: '',
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  //   this.onPlayerReady();
  // },
  //
  //   // 4. The API will call this function when the video player is ready.
  // onPlayerReady: function (event) {
  //   event.target.playVideo();
  // },
  //
  //   // 5. The API calls this function when the player's state changes.
  //   //    The function indicates that when playing a video (state=1),
  //   //    the player should play for six seconds and then stop.
  //
  // onPlayerStateChange: function (event) {
  //   var done = false;
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // },
  //
  // stopVideo: function () {
  //   player.stopVideo();
  // },
  //
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
  
  // renderVideo: function (video) {
  //   this.$('.video-list').append(this.render().el);
  // },
  //
  // renderVideos: function () {
  //   this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  // },
  //
  // // After the API loads, call a function to enable the search box.
  // handleAPILoaded: function () {
  //   $('#button-holder').attr('disabled', false);
  // },
  //
  // // Search for a specified string.
  // search: function () {
  //   var q = $('#search-text-input').val();
  //   var request = gapi.client.youtube.search.list({
  //     q: q,
  //     part: 'snippet'
  //   });
  //
  //   request.execute(function(response) {
  //     var str = JSON.stringify(response.result);
  //     $('#search-container').html('<pre>' + str + '</pre>');
  //   });
  // },


})
