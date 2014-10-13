counter = new Meteor.Collection("counter");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);


  Template.hello.helpers({
    counter: function () {
      return counter.find({ "clicks": { $gt: 0} }).fetch();
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      counter.upsert({ "clicks": { $gt: 0} }, { $inc: { "clicks": 1 } });
    }
  });

//  Template.leaderboard.events({
//    'click input.inc': function () {
//      Players.update(Session.get("selected_player"), {$inc: {score: 5}});
//    }
//  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
