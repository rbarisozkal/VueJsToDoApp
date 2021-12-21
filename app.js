const app = Vue.createApp({
  data() {
    return {
      enteredToDoItem:'',
      goals: [] 
    };
  },
  methods:{
      addToDoItem(){
        this.goals.push(this.enteredToDoItem);
        this.enteredToDoItem='';
      },
      deleteItem(index){
        this.goals.splice(index,1);
      }
  }
});

app.mount('#user-goals');
