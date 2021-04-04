const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.get('/car', (req, res) => {
    res.status(200).send({
        brand: 'VW',
        model: 'Passat'
    })
}); 

app.post('/car/:id', (req, res) => {
    const { id } = req.params;
    const { brand } = req.body;
    const { model } = req.body;

    if(!brand || !model){
        res.status(418).send({message: 'Payload incomplete.'});
    }

    res.send({
        car: `Car ${brand} ${model} successfully received.`
    });

});