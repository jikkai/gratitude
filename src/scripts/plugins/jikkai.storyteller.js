export default class Scroll {
    constructor() {
        const element = document.querySelector('[data-plugins="storyteller"]');
        this.defaults = {
            element: element,
            step: []
        };
    }

    init(config) {
        this.options = this.extend(this.defaults, config);
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

    sendMessage(index) {
        let options = this.options,
            p = document.createElement('p'),
            msg = options.step[index].message,
            speed = options.step[index].speed;

        options.element.appendChild(p);

        let msgArr = msg.split('');

        let i = 0;

        setTimeout(() => {
            let interval = setInterval(() => {
                p.innerHTML += msgArr[i];
                i++;
                if(i === msgArr.length) {
                    clearInterval(interval);
                    if(index < options.step.length - 1) {
                        let a = document.createElement('a');
                        a.onclick = () => {
                            a.parentNode.removeChild(a);
                            this.sendMessage(index + 1);
                        };
                        p.appendChild(a);
                    }
                }
            }, speed);
        }, 13);
    }

};
