/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

     body : { type: 'text' },

     status_id : { type: 'integer' },

     recipent: {type:'integer',required:true},

    message_user : { type: 'collection' , via : 'message' },
    
    success_msg_id:{type:'integer'}
  }
};

