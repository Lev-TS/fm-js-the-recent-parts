// these function will fail because await can't be used inside of 
// a regular function even if it is within the scope of async function
  async function fetchFiles(files) {
    var prs = files.map(getFile);

    prs.forEach(function each(pr) { 
      console.log(await pr);
    });
  }
//

// passing another async function in the forEach method won't work either
// because async function come back with the prmises and the forEach methods
// doesn't know how to wait for the promises to finish
  async function fetchFiles(files) {
    var prs = files.map(getFile);

    prs.forEach(async function each(pr) {
      console.log(await pr);
    });
  }
//

// instead we could use library (e.g github.com/getify/fasy) or for loop or promise all
  
  // Promise.all solution
    async function fetchFiles(files) {
      var prs = await Promise.all(files.map(getFile));

      prs.forEach(function each(pr) {
        console.log(pr);
      });
    }
  //

  // for loop solution
    async function fetchFiles(files) {
      var prs = files.map(getFile);

      for (let pr of prs) {
        console.log(await pr);
      };
    }
  // 

  // github.com/getify/fasy solution
    async function fetchFiles(files) {
      var prs = await FA.concurrent.map(getFile, files);
      await FA.serial.forEach(async function each(pr) {
        console.log( await pr);
      }, prs);
    }
  //

//