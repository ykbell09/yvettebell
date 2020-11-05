import express, { request } from 'express';
const app = express();
app.use(express.json());

const staticRoute = express.static('static');
app.use('/', staticRoute);
app.use('/static', staticRoute);

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'development' && NODE_ENV !== 'test') { // COMMENT OUT IF STATEMENT FOR TESTING
    
    // GLOBAL ERROR HANDLER - TO BE REVIEWED
    app.use(function (err, req, res, next) {
        console.error(err);
        // then:
        res.status(500).send({
            error: 'GENERIC',
            description: 'Something went wrong. Please try again later.',
        });
        // or:
        // res.send(errPageHTML);
    });
    
    // REDIRECT TO HTTPS
    app.use((req, res, next) => {
        if (req.header('x-forward-proto') !== 'https') {
            req.redirect(`https://${req.header('host')}${req.url}`);
        } else {
            next()
        }
    });
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
    console.log(`listening on port ${PORT} -- YOU\'RE TOTALLY DOING THIS!`)
);