let Queue = (function () {
  let arr = []

  function Enqueue(num) {
    return arr.push(num)
  }
  function Dequeue() {
    return arr.shift()
  }

  function print() {
    return arr
  }
  return {
    Enqueue: Enqueue,
    Dequeue: Dequeue,
    print: print
  }
})()

Queue.Enqueue(1)
Queue.Enqueue(2)
Queue.Enqueue(3)
Queue.Enqueue(4)
Queue.Enqueue(5)

Queue.Dequeue()
Queue.Dequeue()
Queue.Dequeue()

console.log(Queue.print())

