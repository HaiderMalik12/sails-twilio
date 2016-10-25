
module.exports= {

  sendSms: function (req, res) {


    const ACCOUNT_SID = 'AC7a149295673ec73c1fda0bca44fbee5f';
    const AUTH_TOKEN = "e8c349ce4565ed327b1cc473ed193b11";
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
   

    let mediaUrl = '';

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


  }
}

