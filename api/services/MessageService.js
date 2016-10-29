module.exports = {

   /*
   This method will talk to sms api and send message to
   user successfully.
    @param {object}- options
    @return promise
   */
	send:function(options){

		const axios = require('axios');
       let {to,body,from} = options;

    //  return axios
    //  //.post(`http://sendpk.com/api/sms.php?username=${sails.config.DE_CONFIG.USERNAME}&password=${sails.config.DE_CONFIG.PASSWORD}&mobile=${mobile}&sender=${sender}&message=${message}`);
    // .post('http://sendpk.com/api/sms.php?username=923430051240&password=9184&mobile=923430051240&sender=HaiderMalik&message=This is my MEssage Here');
    //   //return {message,sender,mobile,username:sails.config.DE_CONFIG.USERNAME,password:sails.config.DE_CONFIG.PASSWORD};
    //    //call axois post request

    //    //return promise 


    const ACCOUNT_SID = 'AC7a149295673ec73c1fda0bca44fbee5f';
    const AUTH_TOKEN = "e8c349ce4565ed327b1cc473ed193b11";
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
   
    client.messages.create({to,from,body}, (err, message) => {
      if(err) return res.negotiate(err);
      if(!message){
        return res.negotiate('Unable to send message');
      }

      return res.ok(message);
    });
      
	}
}