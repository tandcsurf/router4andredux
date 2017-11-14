import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

let endpointUrl = 'http://li468-9.members.linode.com';
let pagesUrl = `${endpointUrl}/wp-json/wp/v2/pages`;
let postsUrl = `${endpointUrl}/wp-json/wp/v2/posts`;

const api = (endpoint) => {
  console.log("inside api");
  return fetch(endpoint)
    .then(response => response.json())
}

const getPages = (cb) =>
  api(pagesUrl)
    .then(response => {
      getPosts(response, cb)
    })

const getPosts = (pages, cb) => {
  api(postsUrl)
    .then(response => {
      let posts = response;
      let data = { posts, pages }
      console.log(data, "data in getPosts");
      cb(data);
    });
}

const buildRoutes = (data) => {
  return data.pages.map((page, i) => {
    console.log(page);
    return <Route exact path={`${page.slug}`} key={i} />
  }
)};

const AppInit = (data) => (
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App} />
            { buildRoutes(data) }
          </div>
        </ConnectedRouter>
      </Provider>
      , document.getElementById('root'))
    )

registerServiceWorker();

getPages(AppInit);
