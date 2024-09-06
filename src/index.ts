import express, { Request, Response } from 'express';
import os from 'os';
const app = express();
const port = 3000;

app.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name;

    if (name) {
        res.json({ greeting: `Hello, ${name}` });
    } else {

        res.json({ greeting: 'Hello, World!' });
    }
});

app.get('/info', (req: Request, res: Response) => {
    const clientIp = req.ip || req.connection.remoteAddress;

    const hostName = os.hostname();
    const requestTime = new Date().toISOString();
    const headers = req.headers;

    const response = {
        time: requestTime,
        client_address: clientIp,
        host_name: hostName,
        headers: headers
    };

    res.setHeader('Content-Type', 'application/json');
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
