module.exports = {
  friendlyName: 'Deal req result',

  description: 'deal response result by input, return obj',

  inputs: {
    retcode: {
      type: 'number',
      description: 'response code',
      required: true
    },
    data: {
      type: 'ref',
      description: 'response data, deafult null'
    },
    retmsg: {
      type: 'string',
      description: 'response mssage'
    }
  },

  exits: {
    success: {
      description: 'All done.'
    }
  },

  fn: async function(inputs, exits) {
    const { retcode, data, retmsg } = inputs;

    return exits.success({
      retcode,
      data: data || null,
      retmsg: retmsg || ''
    });
  }
};
