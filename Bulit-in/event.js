const Emitter = require('events')

const emitter = new Emitter();




emitter.on('order-pizza' , (size , tapping)=>{
    console.log(`order recevied ${size} pizza with ${tapping}`  );
    
})

emitter.emit('order-pizza', 'large' , 'mushroom')