{
    let arr = Array.of(3,4,6,8,0)
    console.log('arr=', arr)
}
{
    //集合转义成数组
    let p = document.querySelectorAll('p')
    let arr = Array.from(p)
    arr.forEach((item)=>{
        console.log(item.textContent)
    })
    console.log(Array.from([1,2,3], (item)=>{return item*2}))
}

{
    //替换
    console.log('fill-7', [1,'a',undefined].fill(7))
    console.log('fill-7', [1,'a',undefined].fill(7,1,3))
}

{
    for(let index of ['1', 'c','11'].keys()){
        console.log('index', index)
    }
    for(let value of ['1', 'c','11'].values()){
        console.log('value', value)
    }
    for(let entries of ['1', 'c','11'].entries()){
        console.log('entries', entries)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4))
}
{
    console.log([1,2,3,4,5].find(function(item){
        return item>3
    }))
    console.log([1,2,3,4,5].findIndex(function(item){
        return item>3
    }))
}

{
    console.log('number', [1,2,NaN].includes(1))
}