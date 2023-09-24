function Subject() {
    this.subscribers = []
}

Subject.prototype = {
    subscribe: function (func) {
        this.subscribers.push(func)
    },
    unsubscribe: function (func) {
        this.subscribers = this.subscribers.filter((f) => {
            if (f != func)
                return f
        })
    },
    fire: function () {
        this.subscribers.forEach((func) => {
            func.call()
        })
    }
}

const broadcast = new Subject()
function f1() {
    console.log("Function f1 Fired")
}
function f2() {
    console.log("Function f2 Fired")
}
function f3() {
    console.log("Function f3 Fired")
}
broadcast.subscribe(f1)
broadcast.subscribe(f2)
broadcast.subscribe(f3)
broadcast.fire()
broadcast.unsubscribe(f2)
broadcast.fire()