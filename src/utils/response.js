const formatResponse = (success, code, message, data) => ({
    success,
    code,
    message,
    data
});

const errorResponse = (code, message) => formatResponse(false, code, message, undefined);
const successResponse = (code, message, data) => formatResponse(true, code, message, data);

module.exports = {
    errorResponse,
    successResponse,
}