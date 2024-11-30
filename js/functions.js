// переводим всё время в минуты
function getMinutes(time){
  let hours = '';
  for (let i = 0; i < time.indexOf(':'); i++) {
    hours += time[i];
  }
  let m = '';
  for (let j = time.indexOf(':') + 1; j < time.length; j++) {
    m += time[j];
  }
  return Number(hours) * 60 + Number(m);
}

function checkMeetingTime (start, end, meet, duration) {
  return !((getMinutes(meet) < getMinutes(start)) || (getMinutes(meet) + duration > getMinutes(end)));
}

checkMeetingTime('08:00', '17:30', '14:00', 90);
checkMeetingTime('8:0', '10:0', '8:0', 120);
checkMeetingTime('08:00', '14:30', '14:00', 90);
checkMeetingTime('14:00', '17:30', '08:0', 90);
checkMeetingTime('8:00', '17:30', '08:00', 900);
