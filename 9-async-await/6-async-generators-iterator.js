// What we answer here is: how we can consume async generator?

// We cannot use a standard for of loop because we don't
// know what is the iteration result of async generator
// because it is promise unless we await it. in sych case we 
// will just iterate through primises.
  for (let data of fetchURls(urls)) {
    console.log(data);
  }
//

// instead we can set up a while loop inside of an async function
// and we will get an asynchronouse iterator which doesn't have to
// wait for all fetch promises to resolve.
  async function main(urls) {
    var it = fetchURLs(urls);

    while (true) {
      let res = await it.next();
      if (res.done) break;
      let text = res.value;

      console.log(text);
    }
  };
  main();
//

// but we have a syntactic sugar for the above function
  async function main(urls) {
    for await (let text of fetchURLs(urls)) {
      console.log(text)
    }
  }
//