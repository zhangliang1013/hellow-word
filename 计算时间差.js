/* 计算两个时间的时间差，返回 相差的 天/时/分/秒 */
function getInterval(start, end) {
    var day, hour, minute, second, interval;
    interval = end - start;
    interval /= 1000;
    day = Math.round(interval / 60 /60 / 24);
    hour = Math.round(interval / 60 /60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    return {
      day: day,
      hour: hour,
      minute: minute,
      second: second 
    }
  }
  
  console.log(getInterval(new Date(2019,0,1),new Date()));