module.exports = {

tableName:'party_issue_items',
  attributes: {

    party : { model: 'Party' ,required:true, columnName:'party_id' },

    item : { model:'Item', required:true, columnName:'item_id'},

    status_id : { type: 'integer' }
  }
};

