function ucFirst(str) {

  if (str === null) { return false }

  str_length = str.length;
  console.log('Длина строки:', str_length);

  if (str_length === 0) {
    console.log('Нет данных');
    return ''
  }

  format_str = str[0].toUpperCase();
  full_format_str = format_str + str.slice(1);
  return full_format_str
}