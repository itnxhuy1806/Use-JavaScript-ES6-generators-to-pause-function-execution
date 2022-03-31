function* createHello(){
     try{
          const word = yield
     console.log(word)
     }
     catch(err){
          console.error("ERR: "+err)
     }
}
const hello = createHello()
hello.next()
hello.throw('errrrrrrrrrrrrr') // One can throw an error in a generator from the outside with it.throw()
