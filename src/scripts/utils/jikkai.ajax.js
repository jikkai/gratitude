export default class Ajax {
    constructor() {
        this.defaults = {
            url: '',
            type: 'GET',
            data: null,
            async: true,
            mode: 'ajax',
            onsuccess: () => {},
            onerror: () => {}
        };
    }


    init(config) {
        let options = this.extend(this.defaults, config);
        let xhr = this.createXHR(options);
        xhr.open(options.type, options.url, options.async);

        this.setCallback(xhr, options);
        xhr.send(options.data);

        return this;
    }

    extend(o1, o2) {
        if (typeof o2 === 'object') {
            for (let k1 in o1) {
                for (let k2 in o2) {
                    if(k1 === k2) {
                        o1[k1] = o2[k2];
                    }
                }
            }
        }
        return o1;
    }

    setCallback(xhr, options) {
        let that = this;

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.stauts === 304) {
                    options.onsuccess.call(that, xhr.responseText);
                } else {
                    options.onerror.call(that);
                }
            }
        }
    }

    createXHR() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            if (typeofarguments.callee.acitiveXString !== 'string') {
                let versions = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP'];
                for (let key in versions) {
                    try {
                        new ActiveXObject(versions[key]);
                        arguments.callee.acitiveXString = versions[key];
                        break;
                    } catch (err) {}
                }
            }
            return new ActiveXObject(arguments.callee.acitiveXString);
        }
    }
};
