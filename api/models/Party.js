/**
 * Party.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  
  attributes: {
    
    name:{
      type:'string'
    },
    city:{
      type:'string'
    },
    status_id:{
      type:'integer'
    },
    balance:{
      type:'integer',
      defaultsTo:0
    },

    //Associations
    party_type:{
      model:'partytype',
      required:true,
      columnName:'party_type_id'
    },
    party_purchase_items:{
      collection:'partypurchaseitems',
      via:'party'
    },
     party_sale_items:{
      collection:'partysaleitems',
      via:'party'
    },
     party_issue_items:{
      collection:'partyreturnitems',
      via:'party'
    },
    party_return_items:{
      collection:'partyissueitems',
      via:'party'
    }
  }
};

