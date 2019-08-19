/**
 * Auth.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    phone: { type: 'string' },
    emailAddress: { type: 'string' },
    fullName: { type: 'string' }
  }
};
