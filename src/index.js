import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';
import user from './user.json';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// function Profile(user) {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img src={user.avatar} alt="User avatar" class="avatar" />
//         <p class="name">{user.username}</p>
//         <p class="tag">{user.tag}</p>
//         <p class="location">{user.location}</p>
//       </div>

//       <ul class="stats">
//         {user.stats}
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">1000</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">2000</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root')
// );
// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }
