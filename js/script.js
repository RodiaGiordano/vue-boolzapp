
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

    // lastMessage(){
    //   const lastMessage = this.newMessage
    //   return lastMessage;
    // },

    time(){
      const x = new Date(this.contacts[0].messages[0].date)
      const y = x.getHours()
      const z = x.getMinutes()
     
     
      const timeNow = y + ':' + z

      return timeNow;
  

    },
    
    openChat(index){
      
      this.activeChat = index;
      this.appOnload = false;
     
    },

    
    
    
    newMessageInput(){
  
      
      
      if(this.newMessage){
        
        this.lastMessage = this.newMessage;
        
        this.activeContact.messages.push(
          {
            
            date: '10:00',
            message: this.newMessage,
            status: 'received'
            
          })
          
          
        }
        
        // this.lastMessage = this.newMessage;
        // this.lastMessage= '';
        
        
        
        setTimeout(()=>{
          this.activeContact.messages.push({
            date: '10:00',
            message: 'ok',
            status: 'sent'
          } )
        },1000)
        
        
        this.newMessage= '';
        this.contacts[this.activeChat].messages.at(-1).message = this.lastMessage;

       

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
    
  

  },

 
        
      
   

}).mount('#app')


  


        
        
        
