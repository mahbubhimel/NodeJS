const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(300, {
        message: 'This is a simple url',
    });
};

module.exports = handler;
