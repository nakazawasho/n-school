(function(){
    'use strict';
    var myBirthTime = new Date(1996, 3, 2, 8, 30);

    function updatePragraph(){
        var now = new Date();
        var difference = now.getTime() - myBirthTime.getTime();
        var seconds = difference / 1000;
        var date = parseInt(difference / 1000 / 60 / 60 /24);
        document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
        document.getElementById('birth-date').innerText = '生まれてから' + date + '日経過'
    }

    setInterval(updatePragraph, 50);
})();
