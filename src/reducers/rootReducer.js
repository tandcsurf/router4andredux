export default function syncPosts(state = [], action) {
  switch (action.type) {
    case 'SYNC_POSTS' :
    //update state with posts here
      return {...state, posts: [action.posts]}

    case 'SYNC_PAGES' :
    //update state with pages here
      return {...state, pages: [action.pages]}
    default:
      return state;
  }
}
