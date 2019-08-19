module.exports = {
  friendlyName: 'Logout',

  description: 'Logout something.',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    const result = await sails.helpers.dealResResult(0, '', 'logout');
    return exits.success(result);
  }
};
