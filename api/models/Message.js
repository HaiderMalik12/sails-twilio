/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 	SENT : 3,
  PENDING:1,
  FAILED:4,
  LIVE:5,
  attributes: {
 

     body : { type: 'string' },

     status_id : { type: 'integer' },

     receipent: {type:'string',required:true},

    message_user : { type: 'collection' , via : 'message' },
    
    success_msg_id:{type:'integer'}
  }
};

