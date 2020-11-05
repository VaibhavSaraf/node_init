const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'rayn holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)