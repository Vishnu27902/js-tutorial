function singleton() {
    let object = null
    function connect() {
        object = new Connection()
    }
    class Connection { }
    return {
        getConnection() {
            if (!object) {
                connect()
            }
            return object
        }
    }
}

const connection = singleton()
const c1 = connection.getConnection()
const c2 = connection.getConnection()
console.log(c1 === c2)