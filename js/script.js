// fixare input list contact (solo caratteri alfanumerici)
// fixare gradiente
// aggiungere i controlli
// fixare html_css structure


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
     const inputTrim = searchContact.trim().toLowerCase()
       
    for(wordSearch of this.contacts){
        wordSearch.visible = inputTrim == wordSearch.name.substring(0, (searchContact.length)).trim().toLowerCase();
      }
    }
    
    
  }
        
      
   

}).mount('#app')






  

  


        
        
        
