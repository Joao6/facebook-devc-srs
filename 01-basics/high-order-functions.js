const students = [
    'Gabriel',
    'Eduardo',
    'Saldanha',
    'Diego',
    'Claudia',
    'Vinícius',
    'Bianca',
    'Dulval'
]

console.log('Number of students: ' + students.length)

// for (let i = 0; i < students.length; i++) {
//     console.log(`Position ${i}, name: ${students[i]}`)
// }

function regularPrint(name) {
    console.log('Name: ' + name)
}

function fancyPrint(name){
    console.log('****> ' + name + ' <****')
}

function print(printFunction = regularPrint){
    return function(name){
        printFunction(name)
    }    
}

students
    .sort()
    .reverse()
    .map(name => name.toUpperCase())
    .forEach(regularPrint)