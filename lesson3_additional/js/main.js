let lang = 'ru';

if (lang === 'ru') {
  console.log('понельник, вторник, среда, четверг, пятница, суббота, воскресение');
} else if (lang === "en") {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log('Программа знает только русский и английский.')
}

switch (lang) {
  case "ru":
    console.log('понельник, вторник, среда, четверг, пятница, суббота, воскресение');
  break;
  case "en":
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  break;
  default:
    console.log('Такой язык не предусмотрен программой.');  
}

lang = {'ru': 'понельник, вторник, среда, четверг, пятница, суббота, воскресение', 
  'en': 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'};
console.log(lang['ru']);
console.log(lang['en']);


let namePerson = "Артём";
namePerson = namePerson ? "Директор" : "не директор";
console.log(namePerson);

namePerson = "Максим";
namePerson = namePerson ? "Учитель" : "это не наш Максим";
console.log(namePerson);

namePerson = prompt("Введите Ваше имя", "Шурик");
namePerson = namePerson ? "Дорогой студент" : "ты еще не зачислен в наши ряды";
console.log(namePerson);


