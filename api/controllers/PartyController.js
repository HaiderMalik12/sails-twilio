"use strict";
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

     let id = req.params.id;

     if(!id) return res.badRequest('Invalid id');

    Party.findOne({id}).then(res.ok).catch(res.negotiate);
 },
 update:function(req,res){
     
  let attributes = {};

  let validParams  = ['name','city','balance','party_type'];

  let params = _.pick(req.body,validParams);
  let id = req.params.id;

  if(params.name){
      attributes.name = params.name;
  }
  if(params.city){
      attributes.city = params.city;
  }
  if(params.balance){
      attributes.balance = params.balance;
  }
  if(params.party_type){
      attributes.party_type = params.party_type;
  }

  Party.update({id},attributes).then(res.ok).catch(res.negotiate);
 },
 delete:function(req,res){

     let id = req.params.id;

     Party.update({id},{status_id:Status.DELETED}).then( () =>{
         res.ok({msg:`Party with this ${id} is deleted successfully!`});
     }).catch(res.negotiate);
    

 },
 findAll:function(req,res){

     //Required pagination stuff
     Party.find({status_id:{'!':Status.DELETED}}).then(res.ok).catch(res.negotiate);
 }

}