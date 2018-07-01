{
    let str = 'bbb_bb_b'
    let a1 = new RegExp(/b+/g)
    let a2 = new RegExp(/b+/y)
    console.log(a1.exec(str), a2.exec(str))
    console.log(a1.exec(str), a2.exec(str))

    //是否开启粘连模式
    console.log(a1.sticky, a2.sticky)
}
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))
    console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A'))
    console.log(/\u{61}/.test('a'))
    console.log(/\u{61}/u.test('a'))
}