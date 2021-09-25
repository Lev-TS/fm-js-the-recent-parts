// when we pass parameters to the function we have to remember the siqunce they appear. We could use 
// destructuring instead. In that case we will have to remember the names but we could standartise 
// nameing convention (e.g. cb, arr, id, etc) and document it well. Best practice is to use this approach
// whenever we have 3 or more arguments.

  function lookupRecord({
    store = "personal-records",
    id = -1
  }) {
    // ...
  }

  lookupRecord({ id: 42 });
//