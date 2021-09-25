// in the function below we are pulling data from urls, waiting for all
// requests to resolve and then pushing out all results at once
  async function fetchURLs(urls) {
    var results = [];

    for (let url of urls) {
      let resp = await fetch( url );
      if (resp.status == 200) {
        let text = await resp.text();
        results.push( text.toUpperCase() );
      } else {
        resuelts.push( undefined );
      }
    }

    return results;
  }
//

// but if we want to push out each individual result the moment the
// moment we recieved this result and not wait other requests to resolve
// we can use async generators, which can both pull (fetch) and push ( yield )
  async function *fetchURLs(urls) {
    for (let url of urls) {
      let resp = await fetch( url );
      if (resp.status == 200) {
        let text = await resp.text();
        yield text.toUpperCase();
      } else {
        yield undefined;
      }
    }
  }
//