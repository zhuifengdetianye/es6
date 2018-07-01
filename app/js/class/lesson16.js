//需要除了babel之外的包
//npm install babel-plugin-transform-decorators-legacy --save-dev
//在.babelrc文件中添加"plugins":["transform-decorators-legacy"]
{
    let readonly = (target, name, descriptor)=>{
        descriptor.writable = false
        return descriptor
    }

    class Test{
        @readonly
        time(){
            return '2017-06-24'
        }
    }

    let test = new Test()
    // test.time = ()=>{
    //     console.log('reset time')
    // }
    console.log(test.time())
}
{
    let typename = (target, name, descriptor)=>{
        target.myname = 'hello'
    }
    @typename
    class Test{

    }
    console.log('类修饰符', Test.myname)

    //decorator是用来修饰类的，
    //第三方库修饰器的js库：core-decorators; npm install core-decorators
}
{
    let log = (type) =>{
        return function(target, name, descriptor){
            let src_method = descriptor.value;
            descriptor.value = (...arg)=>{
                src_method.apply(target,arg)
                console.info(`log ${type}`)
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.info('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click')
        }
    }
    let ad = new AD()
    ad.show()
    ad.click()
}