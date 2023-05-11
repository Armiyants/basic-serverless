import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event: any) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, from someone else's computer aka Serverless World!" }),
    };
};
