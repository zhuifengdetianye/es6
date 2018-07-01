{
    //普通异步实现
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function(){
            callback && callback.call()
        }, 1000);
    }

    ajax(()=>console.log('timeout'))
}
{
    let ajax = ()=>{
        console.log('执行2')
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                resolve()
            }, 1000)
        })
    }

    ajax().then(()=>{
        console.log('promise', 'timeout2')
    })
}
{
    let ajax = (num)=>{
        console.log('执行4')
        return new Promise((resolve, reject)=>{
            if(num > 5){
                resolve()
            }else{
                throw new Error('出错了')
            }
        })
    }
    ajax(6).then(()=>{
        console.log('log', 6)
    }).catch(error=>{
        console.log('catch', error)
    })

    ajax(3).then(()=>{
        console.log('log', 6)
    }).catch(error=>{
        console.log('catch', error)
    })
}
{
    //所有图片加载完之后再添加到页面
    function loadImg(src){
        return new Promise((resolve, reject)=>{
            let img = document.createElement('img')
            img.src = src
            img.onload = ()=>{
                resolve(img)
            }
            img.onerror = (error)=>{
                reject(error)
            }
        })
    }
    function showImg(imgs){
        imgs.forEach((img)=>{
            document.body.appendChild(img)
        })
    }

    //必须所有的状态发生改变才会加载
    Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530380902&di=80551c5db3a2e277183d11469227a804&imgtype=jpg&er=1&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120003353_WTa5h.jpeg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529786182906&di=5f0a263612f9e1b1a15585d8fd46e62a&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2F201406_800x800%2F1868%2F13fda4f8c768b644.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529786182906&di=280fa26152263e994adc6c3ee5cd82ff&imgtype=0&src=http%3A%2F%2Fgetimg.jrj.com.cn%2Fimages%2F2014%2F07%2Ficeoimg%2Fone_20140708005339485.jpg')
    ]).then(showImg)
}
{
    //所有图片加载完之后再添加到页面
    function loadImg(src){
        return new Promise((resolve, reject)=>{
            let img = document.createElement('img')
            img.src = src
            img.onload = ()=>{
                resolve(img)
            }
            img.onerror = (error)=>{
                reject(error)
            }
        })
    }
    function showImg(img){
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    //只要有一个状态发生改变就会加载
    Promise.race([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529786182906&di=5f0a263612f9e1b1a15585d8fd46e62a&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2F201406_800x800%2F1868%2F13fda4f8c768b644.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530380902&di=80551c5db3a2e277183d11469227a804&imgtype=jpg&er=1&src=http%3A%2F%2Fcdnq.duitang.com%2Fuploads%2Fitem%2F201411%2F20%2F20141120003353_WTa5h.jpeg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529786182906&di=280fa26152263e994adc6c3ee5cd82ff&imgtype=0&src=http%3A%2F%2Fgetimg.jrj.com.cn%2Fimages%2F2014%2F07%2Ficeoimg%2Fone_20140708005339485.jpg')
    ]).then(showImg)
}