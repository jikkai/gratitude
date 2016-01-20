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
                message: '为什么人们总注目于流逝而去的星辰……',
                speed: 40
            },
            {
                message: '而忽视眼前浩瀚的星河。',
                speed: 40
            },
            {
                message: 'We tend to forget that happiness doesn\'t come as a result of getting something we don\'t have, but rather of recognizing and appreciating what we do have.',
                speed: 10
            }
        ]
    });
    storyteller.sendMessage(0);
})(window);
