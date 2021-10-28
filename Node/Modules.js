// local
const secret = 'super secret'
// share
const john ='John'
const Peter = 'Peter'

// when you console.log( module) you get
                    // Module {
                    //   id: '.',
                    //   path: 'C:\\Users\\HP\\Node-JS',
                    //   exports: {},
                    //   parent: null,
                    //   filename: 'C:\\Users\\HP\\Node-JS\\Modules.js',
                    //   loaded: false,
                    //   children: [],
                    //   paths: [
                    //     'C:\\Users\\HP\\Node-JS\\node_modules',
                    //     'C:\\Users\\HP\\node_modules',
                    //     'C:\\Users\\node_modules',
                    //     'C:\\node_modules'
                    //   ]
                    // }
// console.log(module)

module.exports={john, Peter}