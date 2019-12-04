exports.handler = function(event, context, callback) {
  console.log(process.version);
  callback(null, {
    statusCode: 200,
    body: process.version,
    });
}
