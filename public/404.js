// Single Page Apps for GitHub Pages
// https://github.com/rafgraph/spa-github-pages
// This script takes the current url and converts the path and query
// string into just a query string, and then redirects the browser
// to the new url with only a query string and hash fragment

// If you're creating a Project Pages site and NOT using a custom domain,
// then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
// This way the code will only replace the route part of the path, and not
// the real directory in which the app resides, for example:
// https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
// https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
// Otherwise, leave pathSegmentsToKeep as 0.
const pathSegmentsToKeep = 1;

const l = window.location;
const origin = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '');
const path = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/');
const redirectUrl = origin + path + '/?/' + 
  l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
  (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
  l.hash;

console.log('Redirecting to:', redirectUrl);
l.replace(redirectUrl);
