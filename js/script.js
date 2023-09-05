
// refactoring HTML e CSS
// refactoring vue
// insermento date
// keyup esc per uscire dalla chat()

var DateTime = luxon.DateTime;


const { createApp } = Vue

createApp({
  data() {
    return { 
      contacts,
      
      activeChat: 0,

      newMessage:"",

      lastMessage:"",

      searchContact:"",

      appOnload: true,

      
    }   
  },
          
  computed: {

    activeContact(){

      return this.contacts[this.activeChat];
    },

    inputTrim(){
  
      return this.searchContact.trim().toLowerCase()
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
          
        }
        
        
        setTimeout(()=>{
          this.activeContact.messages.push({
            date: '10:00',
            message: 'ok',
            status: 'sent'
          } )
        },1000)
        

    },

    searchInListContacts(){
       
      for(wordSearch of this.contacts){
          const wordControl = wordSearch.name.substring(0, (this.searchContact.length)).trim().toLowerCase();

          wordSearch.visible = this.inputTrim == wordControl;
        }
    },


    
    
    deleteMessage(index){
      
      const sentOrRecived = this.activeContact.messages[index].status == "received" ? "received" : "sent";
      console.log(sentOrRecived)
      this.activeContact.messages.splice(index, 1, {
      
        date: '10:00',
        message: 'Il messaggio è stato eliminato',
        status: sentOrRecived,
  
      })
      
    },

    prova(){
      this.appOnload = true}

  },

 
        
      
   

}).mount('#app')


  


        
        
        
