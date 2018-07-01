{
    //二进制和八进制
    console.log(0b010101)
    console.log(0o010101)
}
{
    console.log('15', Number.isFinite(15))
    console.log('NaN', Number.isFinite(NaN))
    console.log('1/0', Number.isFinite(1/0))
    console.log('NaN', Number.isNaN(NaN))
}
{
    console.log('25', Number.isInteger(25))
    console.log('25.0', Number.isInteger(25.0))
    console.log('25.1', Number.isInteger(25.1))
    console.log('25.0', Number.isInteger('25.0'))
}
{
    //判断数值是否溢出
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
    console.log('10', Number.isSafeInteger(10))
}
{
    console.log(4.1,Math.trunc(4.1))
}
{
    //判断是正数负数还是0
    console.log(4.1,Math.sign(4.1))
}