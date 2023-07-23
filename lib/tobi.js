const axios = require('axios');
const fs = require('fs')

exports.tobi = async(prompt) => {
return new Promise(async(resolve, reject) => {
let xm = await axios.post(
    'https://freeimagegenerator.com/api/generate-image',
    { 
     "prompt": prompt
    },
    {   
      headers: {
            
                "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            }
     
   })
  resolve(new Buffer.from(xm.data.image, 'base64'))

 })
}