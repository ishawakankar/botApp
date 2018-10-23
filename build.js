var recastai = require('recastai').default
var readline = require('readline-sync');

var build = new recastai.build('access_token', 'en')

console.log('\n');
var username = readline.question("Enter your github username: ");

var fetch = require("node-fetch");
var name='';
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          response.json().then(myJson => {
            //console.log(myJson);
            name=myJson.name;
            if(name!==null){
            console.log('Welcome '+myJson.name+'\n');}
            else {
              console.log('You have not provided any github username.\n');
            }
          });
        }
        )

function execute(){
  if(name===null)
  {
    var input = readline.question("User: ");
  }
  else {
var input = readline.question(name.substring(0,name.indexOf(' '))+": ");
}
build.dialog({ type: 'text', content: input}, { conversationId: 'CONVERSATION_ID' })
  .then(function(res) {
    console.log("Bot Reply: "+res.messages[0].content+"\n"+new Date()+"\n");
  })
}
setInterval(execute,3000);
