var VideoView = Backbone.View.extend({
  tagName: '.video-list',

  template: Handlebars.compile($('#video-template').html()),

  events: {
    'click .fa-search': 'setVideoCollection',
  },

  initialize: function () {
    this.$searchInput = this.$('#search-text-input').val();
    this.$videoList = this.$('.video-list');
    this.$videoName = this.$('.video-name');
    this.$videoDescription = this.$('video-description');
    this.$videoThumbnail = this.$('video-thumbnail');
    this.$url = encodeURI($('#search-text-input').val());

      this.listenTo(this.model.get('.video-list'), 'add', this.renderVideo);

      this.listenTo(this.model, 'change:current_video', this.render);

      this.listenTo(this.model, 'change:show_videos', this.renderPage);

      this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    //  return this.render();
  },

  setVideoCollection: function () {
    console.log(response);
    model.fetch($searchInput);

    this.renderVideo();
  },

  player: function () {
    this.renderVideo();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  renderVideo: function (video) {
      var videoView = new VideoView({ model: video });
      this.$videoList.append(videoView.render().el);
      this.render();
  },

});
