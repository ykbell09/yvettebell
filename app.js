import express from 'express';
import sslRedirect from 'heroku-ssl-redirect';
const app = express();
app.use(express.json());

const staticRoute = express.static('static');
app.use('/', staticRoute);
app.use('/static', staticRoute);

const { NODE_ENV } = process.env;

// enable ssl redirect
app.use(sslRedirect(['production']));

app.get('/test', async (req, res) => {
        res.send(req.headers);
    }
);







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
    
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
    console.log(`listening on port ${PORT} -- YOU\'RE TOTALLY DOING THIS!`)
);