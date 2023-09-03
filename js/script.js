

const { createApp } = Vue

createApp({
  data() {
    return { 
      contacts,
      
      activeChat: 0,

      newMessage:"",
    
    }   
  },
          
          
       
  
  methods:{
    
    openChat(index){
      
      this.activeChat = index;
    },
    
    
    newMessageInput(activeChat, newMessage){
  
    
      if(this.newMessage){
        
      
        this.contacts[activeChat].messages.push(
        {

          date: '10:00',
          message: this.newMessage,
          status: 'received'

        })

        this.newMessage= '';

        setTimeout(()=>{
            this.contacts[activeChat].messages.push({
              date: '10:00',
              message: 'ok',
              status: 'sent'
            })
          },1000)
        }
      }
  }

}).mount('#app')






  
  
  


        
        
        
