var recastai = require('recastai').default

var request = new recastai.request('access_token', 'en')

request.analyseText('Hello Recast')
  .then(function(res) {
    console.log(res)
  }).catch((err)=>{
      console.log(err)
  })
