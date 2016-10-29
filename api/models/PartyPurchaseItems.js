/**
 * PartyPurchaseItems.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

tableName:'party_purchase_items',
  attributes: {

    party : { model: 'Party' ,required:true, columnName:'party_id' },

    item : { model:'Item', required:true, columnName:'item_id'},

    status_id : { type: 'integer' }
  }
};

