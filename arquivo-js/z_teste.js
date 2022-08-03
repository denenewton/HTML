var global = 'variavel goblal'
console.log(global)


if(true){
    var global = 'variavel global dentro de um bloco'
    let local = 'variavel local dentro de um bloco'
    console.log(local)
}
    console.log(global)
    //console.log(local)

function bloco(){
    var global = 'variavel local dentro de um bloco da funçao'
    console.log(global)
}
bloco()
console.log(global)