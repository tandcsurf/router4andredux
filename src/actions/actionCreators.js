//sync posts
export function syncPosts(posts) {
  return {
    type: 'SYNC_POSTS',
    posts: posts
  }
}

//sync pages
export function syncPages(pages) {
  return {
    type: 'SYNC_PAGES',
    pages: pages
  }
}
