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


// let firstName = "";
// let secondName = "Максим";

let firstName = "Артем";
let secondName = "";

// let firstName = "";
// let secondName = "";

namePerson = firstName ? "Директор" : secondName ? "Учитель" : "студент";
console.log(namePerson);

