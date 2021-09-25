// we can destructure parameters of a function
destParams([1,2,3])

  function destParams([
    first,
    second, 
    third 
  ] ) { 
    console.log(first == 1 && second == 2 && third == 3)
  }
//


// if array is equal to null or undefied destructuring will fails and throw error
  destGracefully(undefined)
  destGracefully(null)

  function destGracefully(arr) {
    var [
      first = 1,
      second = 2,
      third = 3
    ]  = arr || []
      
    console.log(first == 1 && second == 2 && third == 3)
  }
//

// handle destructuring params gracefully
  destParamsGracefully(undefined);
  destParamsGracefully(null || []);

  function destParamsGracefully([
      first = 1,
      second = 2,
      third = 3 
    ] = []) {
    console.log(first == 1 && second == 2 && third == 3)
  }
//