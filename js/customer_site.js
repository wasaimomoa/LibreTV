const CUSTOMER_SITES = {
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣',
    },
    fantuan: {
        api: 'https://www.fantuan.tv/api.php/provide/vod/',
        name: '饭团',
    },
    gongchang: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '工厂',
    },
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod/',
        name: '七七',
    },
    tiantang: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '天堂',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风',
    },
    tianya: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯',
    },
    maomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪',
    },
    feifan: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡',
    },
    muer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
    },
    360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙',
    },
    huawei: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪',
    },
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都',
    },
    zuida: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大',
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花',
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: 'baidu',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽',
    },
    wangwang: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'ikun',
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
