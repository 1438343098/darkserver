const { exec } = require('child_process');
const shellOrder = 'sh ./index.sh';
const schedule = require('node-schedule')
schedule.scheduleJob('60 * * * * *', () => {
  exec(shellOrder, (err, stdout, stderr) => {
    if(err) {
      console.log('err: ', err)
    }
  })
})