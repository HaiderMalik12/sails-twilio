"use strict";

module.exports= {

  sendSms: function (req, res) {


    const ACCOUNT_SID = 'AC7a149295673ec73c1fda0bca44fbee5f';
    const AUTH_TOKEN = "e8c349ce4565ed327b1cc473ed193b11";
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
   

    if(!req.param('to')){
    return res.badRequest({err:'Invalid to field,Please provide destination phone number.Format with a '+' and country code e.g., +16175551212 (E.164 format).',status:400});
    }

    if(!req.param('from')){
    return res.badRequest({err:',Invalid from field,Please provide sender phone number.Format with a '+' and country code e.g., +16175551212 (E.164 format).',status:400});
    }

    if(!req.param('body'))
    {
      return res.badRequest({err:'Invalid body field ',status:400});
    }

    client.messages.create({
      to: req.param('to'),
      from:req.param('from'),
      body: req.param('body')
    }, (err, message) => {
      if(err) return res.negotiate(err);
      if(!message){
        return res.negotiate('Unable to send message');
      }

      return res.ok(message);
    });


  },
  getSmS:function(req,res){

    const ACCOUNT_SID = 'AC7a149295673ec73c1fda0bca44fbee5f';
    const AUTH_TOKEN = "e8c349ce4565ed327b1cc473ed193b11";
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    return res.ok(twiml.toString());

},

send:function(req,res){
  
   const Promise = require('bluebird');

  //Define Valid Params
   const validParams = ['message','sender','mobile'];

  //Get only Valid params
   let params = _.pick(req.body,validParams);

  //If user does not provide mobile send error message
   if(!params.mobile) return res.badRequest('Please provide receipent mobile number');
  
  //If user does not provide message send error message
  if(!params.message) return res.badRequest('Please provide your message');
  //If user does not provide sender send error message
  if(!params.sender) return res.badRequest('Please provide sender name');
  
  //create a promises array
  let promises = [];

  //push create Message method in Promises 
   Promise.all([Message.create({
    body:params.message,
    status_id:Message.PENDING,
    receipent:params.mobile
   }),User.create({
     sender:params.sender
  })]).spread( (message,user) => {
   
   if(!message || !user) return res.negotiate({err:'Unable to Create Record'});
   
 //extract userId and messageId from results
  let userId = user.id,
      messageId =message.id;

 //save record MessageUser
  return MessageUser.create({
    user:userId,
    message:messageId
  });  

}).then(messageUser =>{

 //call send sms method from MessageService

 //If message failded then you have to update Status.FAILED

 //If message sent successfull you have to update status to SENT
  
  return res.ok(messageUser);

 //Send back to Response Message has been
 //created successfully your message_id is
}).catch(res.negotiate);

}
  
}

