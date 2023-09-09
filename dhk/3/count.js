var Counter = (function () {
  var num = 0;
    return {
    increase() {
      return ++num;
    }
  };
})();

for(let i = 0; i < 10; i++){
  console.log( Counter.increase() );
}

