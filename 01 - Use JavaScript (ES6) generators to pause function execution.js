function* createLogger(){
     console.log('start')
     yield
     console.log('block 2')
     yield
     console.log('block 3')
     yield
     console.log('End')
}
const logger = createLogger()
logger.next()
logger.next()
logger.next()
logger.next()