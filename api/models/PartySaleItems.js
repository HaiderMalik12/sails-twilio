module.exports = {

tableName:'party_sale_items',
  attributes: {

    party : { model: 'Party' ,required:true, columnName:'party_id' },

    item : { model:'Item', required:true, columnName:'item_id'},

    status_id : { type: 'integer' }
  }
};

