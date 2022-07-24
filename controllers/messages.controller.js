const path = require('path');

function getMessages(req,res) {
   // res.send('<ul><li>Hello Ayo!</li></ul>');
 // const picturePath = path.join(__dirname,'..','public','images', 'caveMen.png');
  // res.sendFile(picturePath);
  res.render('messages',{
    title: 'Messages',
    friend:'Elon Musk'
  });
} ;

function postMessage(req,res){
    console.log('Updating messages...');
}


module.exports = {
    getMessages,
    postMessage,
};