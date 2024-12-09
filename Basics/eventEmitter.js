const Emitter = require('events');

const emitter = new Emitter


emitter.on('Order-Pizza' , (size , tapping)=>{

    console.log(`order recevied ${size} pizza with ${tapping}`  );
})


emitter.emit('Order-Pizza' , "Large" , 'Mushroom')