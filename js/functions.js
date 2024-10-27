function isMeetingWithinWorkHours(startOfWorkDay, endOfWorkDay, startOfMeeting, duration) {
  // Функция для преобразования времени из строки в минуты
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Преобразуем входные параметры в минуты
  const startWork = timeToMinutes(startOfWorkDay);
  const endWork = timeToMinutes(endOfWorkDay);
  const startMeeting = timeToMinutes(startOfMeeting);
  const endMeeting = startMeeting + duration;

  // Проверяем, укладывается ли встреча в рабочий день
  return startMeeting >= startWork && endMeeting <= endWork;
}

// Примеры вызова функции
isMeetingWithinWorkHours('08:00', '17:30', '14:00', 90); // true
isMeetingWithinWorkHours('8:0', '10:0', '8:0', 120); // true
isMeetingWithinWorkHours('08:00', '14:30', '14:00', 90); // false
isMeetingWithinWorkHours('14:00', '17:30', '08:0', 90); // false
isMeetingWithinWorkHours('8:00', '17:30', '08:00', 900); // false
