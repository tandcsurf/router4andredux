export default function syncPosts(state = [], action) {
  switch (action.type) {
    case 'SYNC_POSTS' :
      console.log('posts will change');
      console.log(state, action);
      console.log(action.posts, "action.posts");
    //update state with posts here
      return [ ...state, ...action.posts ]

    default :
      return state;
  }
}
