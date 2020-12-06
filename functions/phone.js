const chance = require("chance")();

exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: chance.phone()
  };
}