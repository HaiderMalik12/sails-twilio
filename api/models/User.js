/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

     sender:{type:'text',required:true},
     
     status_id : { type: 'integer' },

     message_user : { type: 'collection' , via: 'user' }
  }
};

