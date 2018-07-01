{
    function test(x, y="world"){
        console.log('默认值',x ,y)
    }
    test('hello')
}
{
    function test3(...arg){
        for(let v of arg){
            console.log('rest', v)
        }
    }
    test3(1,2,3,4)
}
{
    console.log(...[1,2,4])
}