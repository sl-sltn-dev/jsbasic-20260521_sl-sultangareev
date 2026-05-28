function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(name) {

  if (name === null) {
    return false
  }

  type_name = typeof name;
  length_name = name.length;
  type_length_name = typeof length_name;
  name_includes = name.includes(" ")

  console.log(`${name_includes}`)
  console.log(`${name}`);
  console.log(`${type_name}`);
  console.log(`${length_name}`);
  console.log(`${type_length_name}`);

  if (name_includes != true && length_name >= 4 && type_name === "string" && name !== "") {
    return true
  } else {
    return false
  }

}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
