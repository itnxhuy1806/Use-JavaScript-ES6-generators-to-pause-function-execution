function* createHello(){
     const word = yield
     console.log(word)
     const word2 = yield
     console.log(word2)
}
const hello = createHello()
console.log(hello.next())
console.log(hello.next('max'))
console.log(hello.next('min'))