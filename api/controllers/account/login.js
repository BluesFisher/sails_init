module.exports = {
  friendlyName: 'Login',

  description: 'Login something.',

  inputs: {
    phone: {
      description: 'The login account',
      type: 'string',
      required: true
    },
    emailAddress: {
      description: 'The login user emailAddress',
      type: 'string'
    },
    fullName: {
      description: 'The login user fullName',
      type: 'string'
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    const { phone, emailAddress, fullName } = inputs;
    const result = await sails.helpers.dealResResult(0, phone, 'login');

    if (phone) {
      const find = await Account.find({ phone });
      if (find.length <= 0) {
        await Account.create({ phone, emailAddress, fullName });
        console.log(`insert ${phone} to db`);
      } else {
        console.log(find);
      }
    }

    this.res.getUserInfo(this.req, this.res);
    // return exits.success(result);
  }
};
