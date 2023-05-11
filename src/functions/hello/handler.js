export const hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, from someone else's computer aka Serverless World!" }),
    };
};
//# sourceMappingURL=handler.js.map