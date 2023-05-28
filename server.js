const express = require('express');
const path = require('path');
const app = express();

var messages = require('./proto/model_service_pb');
var services = require('./proto/model_service_grpc_pb');
const grpc = require('@grpc/grpc-js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));

app.get('/analyze', (req, res) => {
	let link = req.query.link;

    let client = new services.ModelClient(
        'localhost:50051', 
        grpc.credentials.createInsecure()
    );

    let request = new messages.GradesRequest();
    request.setReplink(link);

    client.getGrades(request, function(err, response) {
        console.log(response.array);
        res.json(response.array[0])
    });
});

app.listen(3000);
console.log('listening on port 3000');
