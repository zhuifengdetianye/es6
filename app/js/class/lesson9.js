{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2)

    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')
    console.log(a3 === a4)
}

{
    let a1=Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c':'c'
    }
    console.log('obj', obj)

    for(let [key, value] of Object.entries(obj)){
        console.log(key)
    }

    Object.getOwnPropertySymbols(obj).forEach((item)=>{
        console.log(obj[item])
    })

    Reflect.ownKeys(obj).forEach((item)=>{
        console.log('ownkeys', item, obj[item])
    })
}