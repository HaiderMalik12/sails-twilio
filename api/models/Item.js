module.exports = {

  attributes: {

    name:{
      type:'string'
    },
    qty:{
      type:'integer',
      required:true
    },
    status_id:{
      type:'integer',
    },
    balance:{
      type:'integer'
    },
    item_type:{
      type:'string'
    },
    price:{
        type:'integer'
    },
     party_purchase_items:{
      collection:'partypurchaseitems',
      via:'item'
    },
    party_sale_items:{
      collection:'partysaleitems',
      via:'item'
    },
     party_issue_items:{
      collection:'partyissueitems',
      via:'item'
    },
    party_return_items:{
      collection:'partyreturnitems',
      via:'item'
    }
  }
};
