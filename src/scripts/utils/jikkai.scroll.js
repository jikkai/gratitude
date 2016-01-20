export default class Scroll {
    constructor() {
        this.defaults = {
            element: 'body',
            reference: 'body'
        };
    }

    init(config) {
        let options = this.extend(this.defaults, config),
            elements = this.getElements(options);
        this.scroll(elements);
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

    getElements(options) {
        let element = document.querySelector(options.element),
            reference = document.querySelector(options.reference);
        element.style.height = '110%';
        element.style.transition = 'top .4s ease-out';
        return {
            element,
            reference
        };
    }

    scroll(elements) {
        let element = elements.element,
            reference = elements.reference,
            difference = 10;

        reference.onscroll = () => {
            let scrollTop = reference.scrollTop,
                max = reference.scrollHeight - reference.clientHeight,
                min = 0,
                step = max / difference,
                top = -Math.floor(scrollTop / step);

            element.style.top = top + '%';
        };
    }
};
