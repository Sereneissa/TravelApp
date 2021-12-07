function getTotalTime(end_date) {
    const total = document.getElementById(end_date) - document.getElementById(start_date);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function startTimer(id, end_date) {
    const totalClock = document.getElementById(id);
    const day = totalClock.querySelector('.days');
    const hour = totalClock.querySelector('.hours');
    const minute = totalClock.querySelector('.minutes');
    const second = totalClock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTotalTime(end_date-start_date);
  
      day.innerHTML = t.days;
      hour.innerHTML = ('0' + t.hours).slice(-2);
      minute.innerHTML = ('0' + t.minutes).slice(-2);
      second.innerHTML = ('0' + t.seconds).slice(-2);
  
      const timeinterval = setInterval(updateClock, 1000);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
  }
  
  //const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  startTimer('countdownclock');
  
  
export {startTimer, getTotalTime}
