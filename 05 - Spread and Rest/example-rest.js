// ES5
(function(){
  console.log(arguments);
  console.log(arguments instanceof Array);
})(1,'two',3,{foo: 'bar'});

// ES6
( (...args) => {
  console.log(args);
  console.log(args instanceof Array);
})(5,8,7,'meh',{bar:'foo'});

