// <template name="notifications">
//   <a href="#" class="dropdown-toggle" data-toggle="dropdown">
//     Notifications
//     {{#if notificationCount}}
//       <span class="badge badge-inverse">{{notificationCount}}</span>
//     {{/if}}
//     <b class="caret"></b>
//   </a>
//   <ul class="notification dropdown-menu">
//     {{#if notificationCount}}
//       {{#each notifications}}
//         {{> notificationItem}}
//       {{/each}}
//     {{else}}
//       <li><span>No Notifications</span></li>
//     {{/if}}
//   </ul>
// </template>

// <template name="notificationItem">
//   <li>
//     <a href="{{notificationPostPath}}">
//       <strong>{{commenterName}}</strong> commented on your post
//     </a>
//   </li>
// </template>

// Template.notifications.helpers({
//   notifications: function() {
//     return Notifications.find({userId: Meteor.userId(), read: false});
//   },
//   notificationCount: function(){
//     return Notifications.find({userId: Meteor.userId(), read: false}).count();
//   }
// });

// Template.notificationItem.helpers({
//   notificationPostPath: function() {
//     return Router.routes.postPage.path({_id: this.postId});
//   }
// })

// Template.notificationItem.events({
//   'click a': function() {
//     Notifications.update(this._id, {$set: {read: true}});
//   }
// })