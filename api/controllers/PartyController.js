module.exports ={

 create:function(req,res){
  
  let validParams  = ['name','city','balance','party_type'];

  let params = _.pick(req.body,validParams);

  let name = params.name,
      city = params.city,
      balance= params.balance,
      partyType= params.party_type;

      if(!name) return res.badRequest('Invalid name Field');

       if(!partyType) return res.badRequest('Invalid party_type Field');


     PartyType.create({
         name:partyType
     }).then(partyType => {
         if(!partyType) return res.negotiate({err:'Unable to creaete party record'});
      return partyType;
     }).then(partyType => {

     Party.create({
         name:name,
         city:city,
         balance:balance,
         party_type:partyType.id
     }).then(res.ok).catch(res.negotiate);  
     }).catch(res.negotiate);
 },
 findOne:function(req,res){
     return res.ok('Working now');
 }

}