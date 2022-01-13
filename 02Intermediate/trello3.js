//create Todo object
let myTodo = {
    day: 'monday',
    meetings: 0,
    meetDone: 0,

    //give object some behavior
    addMeeting: function(num) {
       this.meetings = this.meetings + num;
    },

    subtractMeeting: function(){
        this.meetDone = this.meetDone - 1;
    },

    summary: function(){
        return 'you have' + this.meetings + 'meetings';
    },

}


console.log(myTodo.meetings);
myTodo.addMeeting(2);
console.log(myTodo.meetings);
myTodo.summary();