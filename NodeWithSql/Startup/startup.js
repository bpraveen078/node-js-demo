// var compressor = require('node-minify');
var app=require('../server.js');

app.set('port',process.env.PORT || 4000);
var server=app.listen(app.get('port'),function(){
    // console.log("Example app listening at http//",server.address().host,server.address().port);
});

// compressor.minify({  
//     compressor: 'uglifyjs',
//     input: './*.js',
//     output: 'build.js',
//     callback: function(err, min) {}
//   });