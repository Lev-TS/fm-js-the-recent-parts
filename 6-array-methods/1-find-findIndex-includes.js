var arr = [ {a: 1}, {a: 2} ];

// if found
  var res = arr.find(function match(v){
    return v && v.a > 1
  })

  console.log(res.a == 2)
//

// if didn't find 
  var res = arr.find(function match(v){
    return v && v.a > 10
  })

  console.log(res == undefined);
//

// if didn't find
  var res = arr.findIndex(function match(v){
    return v && v.a > 10;
  })

  console.log(res == -1)
//

//
  var arr = [10, 20, NaN, 30, 40, 50];

  console.log(arr.includes(20) == true);
  console.log(arr.includes(60) == false);
  console.log(arr.includes(20, 3) == false);
  console.log(arr.includes(10, -2) == false);
  console.log(arr.includes(40, -2) == true);
  console.log(arr.includes(NaN) == true);
//