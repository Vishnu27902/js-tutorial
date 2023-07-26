class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    add(value) {
        if (!this.head) {
            this.head = new Node(value)
            return
        }
        let temp = this.head
        let prev = null
        while (temp != null) {
            prev = temp
            temp = temp.next
        }
        prev.next = new Node(value)
    }
    print() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
    remove(value) {
        let temp = this.head
        let prev = null
        while (temp != null) {
            if (temp.value == value) {
                prev.next = temp.next
                break
            }
            prev = temp
            temp = temp.next
        }
    }
    middle() {
        let slow = this.head
        let fast = this.head
        while (fast != null) {
            slow = slow.next
            if (fast.next === null) {
                fast = null
                continue
            }
            fast = fast.next.next
        }
        console.log(slow.value)
    }
}

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
linkedList.add(6)
linkedList.add(7)
linkedList.add(8)
console.log("Elements in the Linked List : ")
linkedList.print()
// console.log("Linked List after removal of an Element : ")
// linkedList.remove(2)
// linkedList.print()
console.log("Middle Element of the Linked List")
linkedList.middle()