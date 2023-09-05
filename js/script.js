
// refactoring HTML e CSS
// refactoring vue
// insermento date
// keyup esc per uscire dalla chat
// const { DateTime } = require("luxon");

const { createApp } = Vue

createApp({
  data() {
    return { 
      contacts,
      
      activeChat: 0,

      newMessage:"",

      searchContact:"",

      appOnload: true,

      
      
      
    }   
  },
          
  computed: {

    activeContact(){

      const activeContact = this.contacts[this.activeChat];
      return activeContact;
    },

    inputTrim(){
      const inputTrim = this.searchContact.trim().toLowerCase()
      return inputTrim;
    },


  },
       
  
  methods:{
    
    openChat(index){
      
      this.activeChat = index;
      this.appOnload = false;
     
    },
    
    
    newMessageInput(){
  
    
      if(this.newMessage){
        
      
        this.activeContact.messages.push(
        {

          date: '10:00',
          message: this.newMessage,
          status: 'received'

        })

        this.newMessage= '';

        setTimeout(()=>{
          this.activeContact.messages.push({
              date: '10:00',
              message: 'ok',
              status: 'sent'
          } )
        },1000)
      }
    },

    searchInListContacts(searchContact){
    //  const inputTrim = searchContact.trim().toLowerCase()
       
      for(wordSearch of this.contacts){
          const wordControl = wordSearch.name.substring(0, (searchContact.length)).trim().toLowerCase();

          wordSearch.visible = this.inputTrim == wordControl;
        }
    },


    
    
    deleteMessage(index){
      
      this.activeContact.messages.splice(index, 1)
      
    },
    
    
   openMenuChat(messageSent, index){
    this.openOption == index
   }
  

  }
        
      
   

}).mount('#app')




  


        
        
        
