const define = function(a) {
  if (typeof a !== "string") {
    console.log("Вы передали не строку.")
  }
  a = a.trim();
  if (a.length > 30) {
  let newstr = a.replace(a, '...');
  console.log(a.substring(0, 30) + newstr);
  }
}
//define(555);
define('   строка для тестирования и тестирования и тестирования и тестирования и тестирования.    ');