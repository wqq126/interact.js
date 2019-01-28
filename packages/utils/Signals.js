class Signals {
    constructor() {
        this.listeners = {
        // signalName: [listeners],
        };
    }
    on(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [listener];
            return;
        }
        this.listeners[name].push(listener);
    }
    off(name, listener) {
        if (!this.listeners[name]) {
            return;
        }
        const index = this.listeners[name].indexOf(listener);
        if (index !== -1) {
            this.listeners[name].splice(index, 1);
        }
    }
    fire(name, arg) {
        const targetListeners = this.listeners[name];
        if (!targetListeners) {
            return;
        }
        for (const listener of targetListeners) {
            if (listener(arg, name) === false) {
                return false;
            }
        }
    }
}
export default Signals;
//# sourceMappingURL=Signals.js.map