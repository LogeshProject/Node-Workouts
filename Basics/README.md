part:1 =>   Node.js is an open source , cross-platform , javaScript Runtime environment 

=> single thread event loop 
=> event driven 
=> Non-blocking I/O



core components : 

1) V8
2) Event Loop
3) Libuv 
4) Modules
5) Node.js API


V8 engine => highly optimized for excuting js code, by using JIT compliation which results execute faster.





libuv :
    what : open source library, cross platform library written by c 
    why :  because handle async non-blocking operation in node.js
    how : Thread pool , Event loop

provides : Event-loop  , async I/O  ,  Thread Pool






A module is an encapsulated and reusable chunk of code.

1) Local modules
2) Bulid-in modules
3) Third-party modules











ECMAScript => It  was created a standarize JavaScript. (European Computer Manufacturers Association-ECMA)

    ES5 : strictmode , JSON support , array methods.
    ES6 : let/const , arrow function , template literals.
    ES7 : async/await , Object.entries()


    JavaScript engines (like V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge , javaScriptCore in safari) implement ECMAScript specifications, ensuring that JavaScript code behaves consistently across different platforms.









=> node -v

Excuting the js code in two ways : 

1) REPL : (read , evalvate , print , loop)

    => node 
    => console.log('Hello world')
    => 2 + 2

2) Excuting code in js file in command line.






common JS                                      |                 Es Module


require('express')                                     import {express } from 'express'

module.exports                                         export