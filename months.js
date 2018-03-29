let monthNumber = 1;
var message = "";
var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

for (i in months) {
  message += 'Month ' +
    monthNumber + ' is ' + months[i] + '\n';
  monthNumber++
}
