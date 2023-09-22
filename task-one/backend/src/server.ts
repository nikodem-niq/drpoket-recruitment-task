import app from './app';
import { config } from './config/config';
import { connect } from 'mongoose';

// Server instance
connect(config.mongodb_uri).then(() => {
    app.listen(config.port, () => {
        console.log(`Server is listening on port : ${config.port}`);
    })
})