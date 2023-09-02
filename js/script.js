

const { createApp } = Vue

createApp({
  data() {
    return { 
      contacts,
      
      activeChat: 0,
    }   
  },
          
          
       
  
  methods:{
    
    openChat(index){
      
      this.activeChat = index;
      
    }
    
  }
  
  
  
}).mount('#app')


        
        
        
