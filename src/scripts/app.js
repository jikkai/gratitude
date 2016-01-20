import Ajax from './utils/jikkai.ajax.js';
import Scroll from './utils/jikkai.scroll.js';
import Storyteller from './plugins/jikkai.storyteller.js';

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
    storyteller.sendMessage(0);
})(window);
