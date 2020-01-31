'use strict'; 

let lang = 'ru';

if (lang === 'ru') {
  console.log('понельник, вторник, среда, четверг, пятница, суббота, воскресение');
} else if (lang === "en") {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log('Программа знает только русский и английский.');
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
console.log('На русском: ', lang['.ru']);
console.log('На английском: ', lang['.en']);


// let namePerson = "Артем";
let namePerson = "Максим";
// let namePerson = "Володя";

namePerson = (namePerson === "Артём") ? "Директор" : (namePerson === "Максим") ? "Учитель" : "студент";
console.log(namePerson);
