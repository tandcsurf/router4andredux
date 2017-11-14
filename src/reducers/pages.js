export default function syncPages(state = [], action) {
  switch (action.type) {
    case 'SYNC_PAGES' :
    //update state with pages here
      return {...state, pages: [action.pages]}
    default:
      return state;
  }
}
