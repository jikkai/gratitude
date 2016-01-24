export default class Sns {
    constructor() {
        const element = document.querySelector('[data-plugins="sns"]');
        this.defaults = {
            element: element,
            icons: []
        };
    }

    init(config) {
        this.options = this.extend(this.defaults, config);
        this.createIcons();
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

    createIcons() {
        let options = this.options,
            element = options.element,
            icons = options.icons;

        for (let key in icons) {
            let a = document.createElement('a');
            a.href = icons[key].href;
            a.target = '_blank';
            a.innerHTML = '<i class="' + icons[key].class + '">';

            element.appendChild(a);
        }

    };

};
