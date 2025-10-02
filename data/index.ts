let hoje: Date = new Date()

console.log(hoje)//mostra a data
console.log(hoje.toString())//mpstra a data em string
console.log(hoje.toLocaleDateString('pt-br'))//pegar a data formatada ex 15/08/2022
console.log(hoje.toLocaleTimeString('pt-br'))
console.log(hoje.getTime())

let data: Date = new Date(2025, 8, 22)

//PROVA

//data com o final z é no padrao utc e sem o z é local
let dataPgto0: Date = new Date('2025-09-26T04:00:00z')
let dataPgto1: Date = new Date('2025-09-26T04:00:00')

console.log('data', data.toLocaleDateString('pt-br'))
console.log('datapgto com horario local:', dataPgto0.toString())
console.log('datapgto com horario padrao utc:', dataPgto1.toString())


console.log(new Date())

let day :string[] = [
        'domingo',
        'segunda',
        'terca',
        'quarta',
        'quinta',
        'sexta',
        'sabado'
    
]

console.log(day[hoje.getDay()])


