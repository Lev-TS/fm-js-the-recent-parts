// if array is equal to null or undefied destructuring will fail and throw error
  destGracefully([1, [2,3], 4])
  destGracefully([1, undefined, 4])
  destGracefully(undefined)
  destGracefully(null)

  function destGracefully(arr) {
    var [
      first = 1,
      [
        second = 2,
        third = 3
      ] = [],
      forth = 4 
    ]  = arr || []
    
    console.log(first == 1 && second == 2 && third == 3 && forth == 4)
  }
//