let Stack = (function () {
  let arr = []
  function add(num) {
    return arr.push(num)
  }
  function remove() {
    return arr.pop()
  }
  function print() {
    return arr
  }
  return {
    add: add,
    remove: remove,
    print: print
  }
})()

Stack.add(1)
Stack.add(2)
Stack.add(3)
Stack.add(4)
Stack.add(5)

Stack.remove()
Stack.remove()
Stack.remove()

console.log(Stack.print())
