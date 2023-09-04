

const { createApp } = Vue

createApp({
  data() {
    return { 
      contacts,
      
      activeChat: 0,

      newMessage:"",

      searchContact:"",
    
    }   
  },
          
          
       
  
  methods:{
    
    openChat(index){
      
      this.activeChat = index;
    },
    
    
    newMessageInput(activeChat){
  
    
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
          } )
        },1000)
      }
    },

    searchInListContacts(searchContact){
     
     for(const contact of this.contacts){
  
       contact.visible = false;

        if((contact.name.toLowerCase().trim()).includes(searchContact.toLowerCase().trim())){

          contact.visible = true;
        }
        console.log(contact.visible)
      }
       
         
      
    }
   

  }

}).mount('#app')






  
  
  


        
        
        
