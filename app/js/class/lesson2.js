{
    let a, b, reset;
    [a, b] = [1, 2];
    console.log(a, b)
}
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b)
}
{
    function f(){
        return [1, 2];
    }
    let a, b;
    [a, b] = f();
    console.log(a, b)
}
{
    function f(){
        return [1, 2, 3, 4, 5];
    }
    let a, b, c;
    [a, ...b] = f();
    console.log(a, b);
}
{
    let {a=10,b=5} = {a:3}
    console.log(a, b)
}
{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    };
    let {title:esTitle, test:[{title:cnTitle}]} = metaData;
    console.log(esTitle, cnTitle)
}