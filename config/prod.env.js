'use strict'

let argv=[].concat(process.argv)
let HOST = argv.splice(2)[0] || 'prod';
module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '',
   HOST: '"'+HOST+'"',
}
