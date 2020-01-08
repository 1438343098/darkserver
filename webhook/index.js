const { exec } = require('child_process');
const shellOrder = 'sh index.sh';
const schedule = require('node-schedule')
schedule.scheduleJob('60 * * * * *', () => {
	console.log('定时任务执行了')
  exec(shellOrder, (err, stdout, stderr) => {
    if(err) {
      console.log('err: ', err)
    }
	console.log('定时执行成功')
  })
})