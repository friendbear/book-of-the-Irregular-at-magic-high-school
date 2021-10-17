var myBirthTime = new Date(1974, 2, 2, 12, 0);
function updateParagraph() {
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText = 
        '生まれてから' + seconds + '秒経過';
}

setInterval(updateParagraph, 50);

function areaOfCircle(r) {
    var area = r * r * 3.14;
    return area;
}

document.write('<p>半径 5cmの円の面積は ' + areaOfCircle(5) + '</p>');
document.write('<p>半径 10cmの円の面積は ' + areaOfCircle(10) + '</p>');
document.write('<p>半径 15cmの円の面積は ' + areaOfCircle(15) + '</p>');