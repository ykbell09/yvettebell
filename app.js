import express from 'express';
const app = express();
app.use(express.json());

const staticRoute = express.static('static');
app.use('/', staticRoute);
app.use('/static', staticRoute);

// GLOBAL ERROR HANDLER - TO BE REVIEWED
const { NODE_ENV } = process.env;
// COMMENT OUT IF STATEMENT FOR TESTING
if (NODE_ENV !== 'development' && NODE_ENV !== 'test') {
    app.use(function (err, req, res, next) {
        console.error(err);
        // then:
        res.status(500).send({
            error: 'GENERIC',
            description: 'Something went wrong. Please try again later.',
        });
        // or:
        // res.send(errPageHTML);
    })
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
    console.log(`listening on port ${PORT} -- YOU\'RE TOTALLY DOING THIS!`)
);