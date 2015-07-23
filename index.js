// defining logic for current date and time
  var currentdate = new Date();
  var month = (currentdate.getMonth()+1);
  var day = currentdate.getDate();
  var year = currentdate.getFullYear();
  var hour = currentdate.getHours();
  var minute = currentdate.getMinutes();

  var suffix;

  if (hour > 12) {
    suffix = "p.m.";
  } else {
    suffix = "a.m.";
  }

  if (hour >= 10 && hour <= 12) {
    hour = hour;
  } else if (hour > 12) {
    hour = '0' + hour - 12;
  } else {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  // current date and time formatted as 01/01/2015 @ 9:54 a.m. (example)
  var datetime = month+'/'+day+'/'+year+' @ '+hour+':'+minute+' '+suffix;
