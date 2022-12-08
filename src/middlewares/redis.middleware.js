import HttpStatus from 'http-status-codes';
import { client } from '../config/redis';

export const redisCheck = async (req, res, next) => {
    const notesData = await client.get('getAllData');

    if (notesData != null) {
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: JSON.parse(notesData),
            message: "Redis: All notes fetched successfully"
        });
    }
    else {
        next();
    }
};