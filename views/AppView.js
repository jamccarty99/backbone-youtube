var AppView = Backbone.View.extend({
  el: $('body'),

  template: Handlebars.compile($('#video-template').html()),

  events: {
    'click .fa-search': 'player',

  },

  initialize: function () {
      this.$searchInput = this.$('#search-text-input').val();
      this.$videoList = this.$('.video-list');
      this.$videoName = this.$('.video-name');
      this.$videoDescription = this.$('video-description');
      this.$videoThumbnail = this.$('video-thumbnail');
      this.$url = encodeURI($('#search-text-input').val());

      this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

      this.listenTo(this.model, 'change:current_video', this.render);

      this.listenTo(this.model, 'change:show_videos', this.renderPage);

      this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

  },

  player: function () {
    // this.model.fetch({
    //   title: this.$videoName,
    //   description: this.$videoDescription,
    //   url: this.$url,
    // }, { wait: true });

    console.log('response');
    this.render();
  },

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
