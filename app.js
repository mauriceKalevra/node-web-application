var express = require('express');
var port = 1337;
var path = require('path');
var immodb = require('better-sqlite3')("immobilie.db"); 
//var cookieParser = require('cookie-parser');


var app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(logger('dev'));


app.use(express.static(path.join(__dirname, 'public')));


app.post("/v1/immo", async (req, res) => {
  const immo = req.body;

  immodb.prepare('INSERT INTO Immobilie (id, "angebotstyp", "ort", "objekt", "preis", "zimmer", "flaeche", "kontakt") VALUES (?, ?, ?, ?, ? ,? ,?, ?)').run(immo.id, immo.angebot, immo.ort, immo.objekt, immo.preis, immo.zimmer, immo.flaeche, immo.kontakt);

  return res.status(200).send();

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
