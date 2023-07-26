class Graph {
    constructor() {
        this.graph = {}
    }
    addVertex(value) {
        this.graph[value] = new Array()
    }
    addEdge(source, destination, bidirectional = false) {
        if (!Object.keys(this.graph).includes(String(source))) {
            this.addVertex(source)
        }
        if (!Object.keys(this.graph).includes(String(destination))) {
            this.addVertex(destination)
        }
        this.graph[source].push(destination)
        if (bidirectional) {
            this.graph[destination].push(source)
        }
    }
    getVertexCount() {
        return Object.keys(this.graph).length;
    }
    getEdgeCount(bidirectional = false) {
        let count = 0
        for (let key of Object.keys(this.graph)) {
            count += this.graph[key].length
        }
        if (bidirectional) {
            count /= 2
        }
        return count
    }
    hasVertex(value) {
        return Object.keys(this.graph).includes(value)
    }
    hasEdge(src, des) {
        return this.graph[src].includes(des)
    }
}

const graph = new Graph();
graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(1, 4)
graph.addEdge(2, 3)
graph.addEdge(5, 6)
graph.addEdge(3, 2)
graph.addEdge(4, 5)

console.log(graph.graph)