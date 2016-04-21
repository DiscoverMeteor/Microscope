// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by errors-react.js.
import { name as packageName } from "meteor/errors-react";

// Write your tests here!
// Here is an example.
Tinytest.add('errors-react - example', function (test) {
  test.equal(packageName, "errors-react");
});

// Tinytest.add("Errors collection works", function(test) {
//   test.equal(Errors.collection.find({}).count(), 0);
  
//   Errors.throw('A new error!');
//   test.equal(Errors.collection.find({}).count(), 1);
  
//   Errors.collection.remove({});
// });

// Tinytest.addAsync("Errors template works", function(test, done) {  
//   Errors.throw('A new error!');
//   test.equal(Errors.collection.find({seen: false}).count(), 1);

//   // render the template
//   UI.insert(UI.render(Template.meteorErrors), document.body);

//   // wait a few milliseconds
//   Meteor.setTimeout(function() {
//     test.equal(Errors.collection.find({seen: false}).count(), 0);
//     test.equal(Errors.collection.find({}).count(), 1);
//     Errors.clearSeen();

//     test.equal(Errors.collection.find({seen: true}).count(), 0);
//     done();
//   }, 500);
// });