
Libraries = new Mongo.Collection('libraries')
Books = new Mongo.Collection('books')

/*Meteor.publish("roomAndMessages", function (roomId) {
  check(roomId, String);
  return [
    Rooms.find({_id: roomId}, {fields: {secretInfo: 0}}),
    Messages.find({roomId: roomId})
  ];
});*/

if (Meteor.isClient) {

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    if (Books.find().count() === 0) {
      books = [
        {title: "The Great Gatsby"         , library_name: "Red Collection"},
        {title: "The Odyssey"              , library_name: "Red Collection"},
        {title: "Ulysses"                  , library_name: "Blue Collection"},
        {title: "The Iliad"                , library_name: "Blue Collection"},
        {title: "Brothers Karamazov"       , library_name: "Yellow Collection"}
      ]
      _.each(books, function(book) {
        Books.insert(book);
      });

    }

    if (Libraries.find().count() === 0) {
      libraries = [
        {name: "Red Collection", books: []},
        {name: "Blue Collection", books: []},
        {name: "Yellow Collection", books: []}
      ]
      _.each(libraries, function(lib) {
        Libraries.insert(lib);
      });
    }


  });
}
