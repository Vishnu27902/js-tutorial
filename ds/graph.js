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
    bfs(src) {
        this.visited = []
        this.queue = [src]
        this.search(this.queue[0])
        console.log(this.visited)
    }
    search(node) {
        if (this.visited.includes(node)) {
            return
        }
        this.visited.push(node)
        this.queue.shift(node)
        this.queue = [...new Set([...this.queue, ...this.graph[node]])]
        for (let key of this.queue) {
            if (!this.visited.includes(key)) {
                this.search(key)
            }
        }
    }
    dfs(src) {
        this.visited = []
        this.dfsSearch(src)
        console.log(this.visited)
    }
    dfsSearch(node) {
        if (this.visited.includes(node)) {
            return
        }
        this.visited.push(node)
        for (let key of Object.keys(this.graph)) {
            if (!this.visited.includes(key)) {
                this.dfsSearch(parseInt(key))
            }
        }
    }
}

const graph = new Graph();
graph.addEdge(1, 2)
graph.addEdge(1, 4)
graph.addEdge(1, 5)
graph.addEdge(1, 3)
graph.addEdge(2, 3)
graph.addEdge(5, 6)
graph.addEdge(3, 2)
graph.addEdge(4, 5)

console.log(graph.graph)
console.log("Breath First Search")
graph.bfs(1)
console.log("Depth First Search")
graph.dfs(1)