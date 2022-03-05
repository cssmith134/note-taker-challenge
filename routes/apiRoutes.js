const fs = require('fs');
const app = require('express').Router();
const notes = require('../db/db.json')

// --> /api/notes
app.get('/notes', (req, res) =>{
    res.json(notes)
})

app.post('/notes', (req, res) => {
    const receivedData = req.body;

    console.log(receivedData)

    console.log(notes)

    notes.push(receivedData)


    console.log(notes)

   fs.writeFile('./db/db.json', JSON.stringify(notes, null, " "), (err, data) => {
       if (err){
           console.log(err);
           res.status(500);
        };
       console.log("File updated successfully!")

       res.json(receivedData)
   })


})

module.exports = app;