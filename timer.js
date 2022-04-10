const a = 200
const id = setTimeout(console.log,a,'hi')
clearTimeout(id)
console.log('it works')