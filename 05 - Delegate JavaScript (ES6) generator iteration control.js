function* createCounter34(){
     yield 3
     yield 4
     // return 4
}
function* createCounter(){
     yield 1
     yield 2
     yield* createCounter34()
     // const four = yield* createCounter34()
     // console.log(four)
     yield 5
}
const counter = createCounter()
for(let i of counter){
     console.log(i)
}