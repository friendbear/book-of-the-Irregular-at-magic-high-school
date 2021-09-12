var age = 65;
var isMMember = true;
var result = null;
if (age >= 60 && isMMember) {
    result = 'シニア会員割引の対象です';
} else {
    result = 'シニア会員割引の対象ではありません';
}
document.write(result);
