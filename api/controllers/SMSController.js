
module.exports= {

  sendSms: function (req, res) {


    const ACCOUNT_SID = 'AC7a149295673ec73c1fda0bca44fbee5f';
    const AUTH_TOKEN = "e8c349ce4565ed327b1cc473ed193b11";
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);


    client.messages.create({
      to: "+15005550006",
      from: "+15005550006",
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
      mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
    }, function(err, message) {
      if(err) return res.negotiate(err);

      return res.ok(message);
    });


  }
}

