import React from 'react';

const AppHeader = () => (
  <nav className="navbar navbar-default" role="navigation">
    
  </nav>  
);

export default AppHeader;

// <div className="navbar-header">
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <a className="navbar-brand" href="{{pathFor 'home'}}">Microscope</a>
//     </div>
//     <div className="collapse navbar-collapse" id="navigation">
//       <ul className="nav navbar-nav">
//         <li className="{{activeRouteclassName 'home' 'newPosts'}}">
//           <a href="{{pathFor 'newPosts'}}">New</a>
//         </li>
//         <li className="{{activeRouteclassName  'bestPosts'}}">
//           <a href="{{pathFor 'bestPosts'}}">Best</a>
//         </li>
//         {{#if currentUser}}
//           <li className="{{activeRouteclassName 'postSubmit'}}">
//             <a href="{{pathFor 'postSubmit'}}">Submit Post</a>
//           </li>
//           <li className="dropdown">
//             {{> notifications}}
//           </li>
//         {{/if}}
//       </ul>
//       <ul className="nav navbar-nav navbar-right">
//         {{> loginButtons}}
//       </ul>
//     </div>