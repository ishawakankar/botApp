var recastai = require('recastai').default

var request = new recastai.request('ac68753966d00890b05be44a819e7bd4', 'en')

request.analyseText('Hello Recast')
  .then(function(res) {
    console.log(res)
  }).catch((err)=>{
      console.log(err)
  })
