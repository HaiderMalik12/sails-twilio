/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/


  connections: {

    mysqlServer: {
      adapter: 'sails-mysql',
      user: 'root',
      password: 'root',
      database: 'sms_api',
      port:3306,
      host  : '127.0.0.1'
      //socketPath : '/tmp/mysql.sock'
    }


  },

  DE_CONFIG:{
    USERNAME:'923430051240',
    PASSWORD:9184
  },

  models: {
    connection: 'mysqlServer'
  },

  port: process.env.PORT ||1337,
  //LOG_QUERIES: 'true',
   //hookTimeout: 30000
  //180000
};
