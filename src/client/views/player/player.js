Template.player.helpers({
  songs: function() {
    return Songs.findOne();
  }
});
