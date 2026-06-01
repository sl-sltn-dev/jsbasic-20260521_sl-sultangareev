function checkSpam(str) {
  format_str = str.toUpperCase();
  console.log(format_str);
  match_str_1 = format_str.indexOf('XXX');
  match_str_2 = format_str.indexOf('1XBET');
  console.log("'XXX' в строке:", match_str_1, "'1xBet' в строке:", match_str_2);

  if (match_str_1 == -1 && match_str_2 == -1) {
    console.log('Спам не найден! (false)')
    return false
  }

  console.log('Спам найден! (true)')

  return true
}