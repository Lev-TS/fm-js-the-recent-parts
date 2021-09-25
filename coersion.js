// --------------> Special Values <--------------

  // NaN
    NaN == NaN                        // false (NaN is the only value which doesn't equal to itself). 

    // Ways to check if a value is NaN
      
      // old buggy way
      isNaN(35);                      // false
      isNaN(NaN);                     // true
      isNaN('n/a'); // OOPS!          // true

      // new good way
      Number.isNaN(35);               // false
      Number.isNaN(NaN);              // true
      Number.isNaN('n/a');            // false

      // another good alternative
      Object.is(NaN, NaN);            // true
      Object.is(NaN, 'n/a');          // true
    
    // Ways to check if a value is NaN

    // using operatiors (except +) on not a number will output NaN

      "My age is: " - 35;             // NaN
      "My age is: " * 35;             // NaN
      "My age is: " / 35;             // NaN
      "My age is: " + 35;             // 'My age is: 35'

    // using operatiors (except +) on not a number will output NaN

  // NaN

  // -0

    var trendRate = -0;
    trendRate === -0;                  // true
    
    trendRate === 0; // OOPS!          // true
    trendRate.toString(); // OOPS!     // '0'
    trendRate < 0;                     // true
    trendRate > 0;                     // true
    
    // correct way
    Object.is(trendRate, -0);          // true
    Object.is(trendRate, 0);           // false
    
    // Math.sign gives 1 if positive 
    // and -1 if negative. But in case 
    // of zero it gives 0 or -0
    Math.sign(-3);                     // -1
    Math.sign(-2);                     // -1
    Math.sign(3);                      // 1
    Math.sign(2);                      // 1
    Math.sign(0); // OOPS!             // 0
    Math.sign(-0); // OOPS!            // -0

  // -0

// --------------> Special Values <--------------

// --------------> EXPLICIT TYPE COERSION <--------------

  // To string
    String(null)                      // 'null'
    String(undefined);                // 'undefined'
    String(true);                     // 'true'
    String(false);                    // 'false'
    String(3.14);                     // '3.14'
    String(0);                        // '0'
    String(-0); //OOPS!               // '0'

    String([]);                       // ''
    String([1, 2, 3]);                // '1,2,3'
    String([null,undefined]);         // ','
    String([[[], []], []]);           // ',,'
    String([,,,,])                    // ',,,'

    String({});                       // '[object Object]'
    String({val: 2});                 // '[object Object]'
    String({val: 2}.val);             // '2'
  // To string
  
  // To number
    Number("");                       // 0
    Number("0");                      // 0
    Number(" 009 ");                  // 9
    Number('3.14');                   // 3.14
    Number("0.");                     // 0
    Number("0.");                     // 0
    Number(".");                      // NaN
    Number("0xaf");                   // 175

    Number(false);                    // 0
    Number(true);                     // 1
    Number(null);                     // 0
    Number(undefined);                // NaN

    Number([[[]]]);                   // 0
    Number([""]);                     // 0
    Number(["0"]);                    // 0
    Number(["-0"]);                   // -0
    Number(["hi"]);                   // NaN
    Number([null]);                   // 0
    Number([undefined]);              // 0
    Number([false]);                  // NaN
    Number([true]);                   // NaN
    Number([1,2,3]);                  // NaN

    Number({});                       // NaN
    Number({val: 3});                 // NaN
    Number({val: 3}.val);             // 3
  // To number

  // To boolean

    // Falsy (full list)
    Boolean('');                      // false
    Boolean(0);                       // false
    Boolean(-0);                      // false
    Boolean(NaN);                     // false
    Boolean(false);                   // false
    Boolean(undefined);               // false
    
    // Truthy (whatever is not falsy, e.g.)
    Boolean('foo');                   // true
    Boolean(23);                      // true
    Boolean({val: 1});                // true
    Boolean([1,2]);                   // true
    Boolean(true);                    // true
    Boolean(23);                      // true
    Boolean(function(){});            // true

  // To boolean

// --------------> EXPLICIT TYPE COERSION <--------------

// --------------> IMPLICIT TYPE COERSION <--------------


  // we are taught to avoid type coersion but we are using it all the time implicitly
  // for example, when we use string concatenation we coerse type number to string.
  // or when we use 
  'My age is: ' + 35;
  `My age is: ${35}`

// --------------> IMPLICIT TYPE COERSION <--------------


// --------------> DOUBLE & TRIPLE EQUALS <--------------

  // abstract equality comparison (==)
    
    // allows coersion
    // If Type(x) is the same as Type(y), then return the reuslt of strict equality comparison (===)
    // if Type(x) is different from Type(y), use coersion
    null == undefined               // true
    3 == Number('3')                // true
    1 == Number(true)               // true
    0 == Number(false)              // true
    
  // abstract equality comparison (==)


  // strict equality comparison (===)
    
    // doesn't allow coersion
    // if Type(x) is different from Type(y), retrun false
      'book' === 3                  // false
      '-2' === 2                    // false
    // if Type(x) is Number, then 
      NaN === 3                     // false
      3 === 3                       // true
      0 === -0                      // true
    // everything else returns false

  // strict equality comparison (===)

  //  there are many corner cases to avoid == 
    //  1. with 0 or "" (or " ")
    //  2. don't use it with non-primitives
    //  3. don't use x == true or x == false, instead use === or allow ToBoolean like so: if (x) { //do something }
  //  But otherwise prefer ==
    //  1. use when you know the types (we should strive to know types and this will force us to do this)
    //  2. use when you want to take advantage of coersion
  // use ===
    //  1. when you don't know the types. This will add extra layer of security
    //  not knowing the tyoe is similar to corner cases (what if it's the edge), 
    //  which we should avoid with ==


// --------------> DOUBLE & TRIPLE EQUALS <--------------