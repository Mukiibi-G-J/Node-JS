// gloabals

// __dirname  - path to currunet directory
// __filename  - file name
// require - function to use module (CommonJS)
// module - info aboucurrent module(file)
// process - info about env where program is being executed
       
//------examples
        // console.log(__dirname)

        // setInterval(() =>{
        //     console.log('hello world')
        // },1000)




//----------Modulees---------------------
const john ='John'
const Peter = 'Peter'

const sayHi = (name) => {
     console.log(`hello there ${name}`)
 }


 sayHi(john)
 sayHi(Peter)