part:1 =>   Node.js is an open source , cross-platform , javaScript Runtime environment 

modules (user defined) , built-in modules , node internals , npm , cli 




part:2 =>   ECMAScript was created a standarize JavaScript. (European Computer Manufacturers Association-ECMA)

    ES5 : strictmode , JSON support , array methods.
    ES6 : let/const , arrow function , template literals.
    ES7 : async/await , Object.entries()


    JavaScript engines (like V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge , javaScriptCore in safari) implement ECMAScript specifications, ensuring that JavaScript code behaves consistently across different platforms.


part:3 =>   V8 engine => highly optimized for excuting js code, by using JIT compliation which results excute faster.

    Node.js allows run js code outside the browser. It is built using C++ .

    V8 engine also bulit in C++ .

    
part:4 =>  JavaScript Runtime which provides all the necessary components to run the js program.

    JavaScript engine is a one component in the javaScript Runtime.









part:5 

What is Node.js ?

    Node internally has a collection of dependencies that used to excute the code . In that , two important dependencies libuv and V8 .

    libuv is used to access the operating system underlying file-system.

    node dependencies , C/C++ features , fs library 





=> node -v

Excuting the js code in two ways : 

1) REPL : (read , evalvate , print , loop)

    => node 
    => console.log('Hello world')
    => 2 + 2

2) Excuting code in js file in command line.


part : 8 

Modules:

    A module is an encapsulated and reusable chunk of code.

Types of modules: 
         
1) Local modules
2) Bulid-in modules
3) Third-party modules

Local Modules :

    common JS : standard that states how a module should be structed & shared


Module Scope :

    Each loaded module in the node.js wrapped with IIFE that provides a private scope.



common JS : 

    each file treated as a module.
    variables , functions , classes are not accessible by defalut using module.export or export 
    To import using require()

ES modules:
    export default add 






section : modules , types of modules , local modules , common js , module scope (iife) , module cashing , import and export both common js modules and also ES modules .



Bulit-in modules : path , events , fs , stream , http.

