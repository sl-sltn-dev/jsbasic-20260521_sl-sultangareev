function truncate(str, maxlength) {

  str_length = str.length;
  console.log('Длина строки:', str_length, typeof str_length, 'Ограничение:', maxlength, typeof maxlength);

  if (str_length > maxlength) {
    console.log('срезаем..')

    str_slice = str.slice(0, maxlength - 1);

    console.log(str_slice);

    final_str = str_slice + '…';

    return final_str
  }

  return str
}