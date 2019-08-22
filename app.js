var express = require('express');
var QRCode =require('qrcode');
var app = express();
app.listen('5000');

app.use(express.static('www'));

app.get('/qrgen',function(request,response){
    var text = request.query.text;
    QRCode.toDataURL(text, function (err, url) {
        var output='QRCode For "'+text+'"<br><img src="'+url+'">';
        response.send(output);
    });
    
});

 


/*app.listen('5000');
//app.get('/contact',contact);
 app.get('/',function(request,response){
    response.send('Nantipat');
});
 function contact(request,response){
    response.send('E-MAIL-:s6030213010@phuket.psu.ac.th<br>TEL NO.-:096-873-8721');
} 
app.get('/contact',function(request,response){
    var output = 'E-MAIL-:s6030213010@phuket.psu.ac.th<br>TEL NO.-:096-873-8721';
    response.send(output);

}); */