module.exports = {

   /*
   This method will talk to sms api and send message to
   user successfully.
    @param {object}- options
    @return promise
   */
	send:function(options){
		
		// create a method send sms to user  
       
       //extract username
       //extract password
       //extract message
       let {message,sender,mobile} = options;
       //extract sender
       //extract mobile

      return {message,sender,mobile,username:sails.config.DE_CONFIG.USERNAME,password:sails.config.DE_CONFIG.PASSWORD};
       //call axois post request

       //return promise 
      
	}
}