import { createClient } from 'redis';

export const client = createClient();

const redis = async () => {
    try {
        await client.connect();
        console.log("Client connection established.....")
    }
    catch (error) {
        console.log("Error: not able to established connection with redis")
    }
}
export default redis;