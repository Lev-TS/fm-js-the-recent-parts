
// flat() is flat(1) by default
  var nestedValues = [1, [2, 3], [[]], [4, [5]], 6];
  nestedValues.flat(0); /* [ 1, [ 2, 3 ], [ [] ], [ 4, [ 5 ] ], 6 ] */
  nestedValues.flat(1); /* [ 1, 2, 3, [], 4, [5], 6 ] */
  nestedValues.flat(2); /* [ 1, 2, 3, 4, 5, 6 ] */
//

//
  var arr = [1,2,3]
  arr.map(function tuples(v){
    return [ v * 2, String(v * 2) ];
  }) /* [[ 2. "2"], [4, "4"], [6, "6"]] */

  arr.map(function tuples(v){
    return [ v * 2, String(v * 2) ];
  }).flat() /* [2. "2", 4, "4", 6, "6"] */

  // comnines above two but it makes only one level flattening
  arr.flatMap(function tuples(v){
    return [ v * 2, String(v * 2) ];
  }) /* [2. "2", 4, "4", 6, "6"] */
//

// returning empty array will delete that element
  var arr = [1,2,3,4,5,6]
  var tmp = arr.flatMap(function doubleEvens(v) {
    if (v % 2 == 0) {
      return [v, String(v * 2)] ;
    } else {
      return [];
    }
  }) /* [ 2, '4', 4, '8', 6, '12' ] */
//