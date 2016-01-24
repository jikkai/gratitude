import Ajax from './utils/jikkai.ajax.js';
import Scroll from './utils/jikkai.scroll.js';

import Storyteller from './plugins/jikkai.storyteller.js';
import Sns from './plugins/jikkai.sns.js';

(function(window){
    // var ajax = new Ajax();
    // ajax.init({
    //     url: 'http://gsr.asaki.me/api/account/login',
    //     type: 'POST',
    //     data: {
    //         username: 'kagachi',
    //         password: 'xzx19911210'
    //     },
    //     onsuccess: (data) => {console.debug('123');},
    //     onerror: (data) => {console.debug('456');}
    // });
    //

    var scroll = new Scroll();
    scroll.init({
        element: '.jikkai-background',
        reference: '.jikkai-container'
    });

    var storyteller = new Storyteller();
    storyteller.init({
        step: [
            {
                message: '我总是擅长于遗忘一些重要的事情。',
                speed: 70
            },
            {
                message: '比如说：',
                speed: 60
            },
            {
                message: '呃……我要说什么来着？',
                speed: 80
            }
        ]
    });

    var sns = new Sns();
    sns.init({
        icons: [
            {
                title: 'Github',
                href: 'https://github.com/jikkai',
                class: 'icon-Popular_GitHub'
            },
            {
                title: 'Coding',
                href: 'https://coding.net/u/Scharfrichter',
                class: 'icon-CN_codingnet'
            },
            {
                title: 'Zhihu',
                href: 'https://www.zhihu.com/people/scharfrichter',
                class: 'icon-CN_zhihu'
            },
            {
                title: 'Weibo',
                href: 'http://weibo.com/Scharfrichter',
                class: 'icon-CN_sina_weibo'
            },
            {
                title: 'Twitter',
                href: 'https://twitter.com/yoruhato',
                class: 'icon-Popular_Twitter'
            }
        ]
    });
})(window);
