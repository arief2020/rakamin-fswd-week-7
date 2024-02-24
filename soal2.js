const fs = require('fs')

fs.readFile('homework.log', 'utf-8', (err, data)=>{
  if (err) {
    console.log('Failed read file:', err)
    return
  }
  console.log(data)
  fs.writeFile('log.txt', data, 'utf-8', (err) =>{
    if (err) {
      console.log('Failed write file log.txt:', err)
      return
    }
    console.log('Success write data to log.txt')
  })
})