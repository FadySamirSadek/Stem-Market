//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
(function() {
  'use strict';
  var deadline = '2017-1-31';

  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(endtime){
  var days= document.getElementById('days-div');
  var time = document.getElementById('time-div');
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    days.innerHTML = t.days ;
    time.innerHTML =  t.hours+ ' hours || '
    +t.minutes + ' minutes || ' +
     t.seconds + ' seconds ' ;

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

initializeClock(deadline);
}());
