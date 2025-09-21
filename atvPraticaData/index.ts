let dataInicio: Date = new Date('2025-02-02t20:03:23')
let dataFim: Date = new Date('2025-06-02t00:00:00')
let natal: Date = new Date(2025, 9, 25)

//1) Dado uma data qualquer calcule quantos dias faltan para o natal
    diferençaDiasNatal(dataInicio, natal)
//2) Dado una data qualquer formate a impressão no formato dd/mm/yyyy HH:mm:55
    formataData(dataInicio)
//3) Dado uma data qualquer adicione 38 dias e imprima o resultado
    somarDias(dataInicio)
//4) Dado uma data qualquer diga en qual dia da semana cairá
    diaSemana(dataInicio)
//5) Dado duas datas verifique se a primeira data é menor que a segunda
    dataMaior(dataInicio, dataFim)
//6) Crie uma função que recebe duas datas e calcule quantos dias de diferente ha entre ambas
    diferençaDias(dataInicio, dataFim)




//1) Dado uma data qualquer calcule quantos dias faltan para o natal
function diferençaDiasNatal(dataInicio: Date, dataFim: Date) {
    let getime: number = (dataFim.getTime() - dataInicio.getTime())/(1000 * 3600 * 24)
    console.log(`São ${Math.round(getime)} dias ate o natal\n`)//calculo pra trasnforma o tempo em dias
}

//2) Dado una data qualquer formate a impressão no formato dd/mm/yyyy HH:mm:55
function formataData(data: Date) {
    let hora: string = data.getHours().toString()
    let minutos: string = data.getMinutes().toString()
    let segundo: string = data.getSeconds().toString()

    console.log(`${hora}:${minutos}:${segundo}\n`)





}

//3) Dado uma data qualquer adicione 38 dias e imprima o resultado
function somarDias(data: Date) {
    const dias: number = 38
    let novadata: Date = new Date(data.getTime() + (dias * 24 * 60 * 60 * 1000))
    console.log('nova data:', novadata.toLocaleDateString('pt-br'), '\n')
}

//4) Dado uma data qualquer diga en qual dia da semana cairá
function diaSemana(data:Date) {
    let day: string[] = [
        'domingo',
        'segunda',
        'terca',
        'quarta',
        'quinta',
        'sexta',
        'sabado'

    ]
    console.log('o dia da semana é: ',day[data.getDay()],'\n')

}

//5) Dado duas datas verifique se a primeira data é menor que a segunda
function dataMaior(data1:Date, data2:Date){


        let datac1 :number = data1.getTime()
        let datac2 :number  = data2.getTime()
        if (datac1 > datac2){
            console.log(`a data ${data1.toLocaleDateString('pt-br')} é maior que ${data2.toLocaleDateString('pt-br')}\n `)
        } else{
            console.log(`a data ${data2.toLocaleDateString('pt-br')} é maior que ${data1.toLocaleDateString('pt-br')}\n `)

        }
        

}

//6) Crie uma função que recebe duas datas e calcule quantos dias de diferente ha entre ambas
function diferençaDias(dataInicio: Date, dataFim: Date) {
    console.log('data de inicio:', dataInicio.toLocaleDateString('pt-br'))
    console.log('data final:', dataFim.toLocaleDateString('pt-br'))
    let diferença: number = (dataFim.getTime() - dataInicio.getTime()) / (1000 * 3600 * 24) //calculo pra trasnforma o tempo de milesegundos em dias
    console.log(`A diferenaça de dias é: ${Math.round(diferença)}\n`)
}
