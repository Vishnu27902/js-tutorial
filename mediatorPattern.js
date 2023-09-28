function Member(name, chatroom) {
    this.name = name
    this.chatroom = chatroom
}

Member.prototype = {
    sent: function (toMember, message) {
        
    },
    receive: function (fromMember, message) {

    }
}

function Chatroom() {
    this.members = []
}