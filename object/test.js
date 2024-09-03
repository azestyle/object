// 1) obyekt yaradiriq ve funksiya ile ad soyad yaradiriq

// let student={
//     name:'adil',
//     surname:'zolanov',
//     age:22,
//     job:'engineer',
//     address:'balakhani',
//     hobbies:['starwars','clonewars'],
//     getWrite:function(){
//        return `menim adim ${this.name} soyadim ${this.surname}`
//     },
// };
// console.log(student.getWrite())




// 2) obyekte ozellik elave edirik ozelliyi deyisirik ve ozelliyi silirik

// let automobile={
//     name:'nissan',
//     model:'sunny',
//     color:'black',
//     ban:'sedan',
//     year:'2021',
//     property:['4x4','abc','quckly control','hybrid'],
   
// };

// automobile.color='yellow'
// automobile.region='japan'
// delete automobile.year
// console.log(automobile)



// 2.1) new object metodu ile obyekti yeni obyekte deklare edib ozelliyi onceki prosedurlari icra etmek

// let person= new Object()
// Object.assign(person,automobile);
// person.grade=45
// person.color='blue'
// delete person.year
// console.log(person);



// 3) obyekt icinde obyekt

// let school={
//     name:'baki dovlet universteti',
//     address:{
//         street: 'azadliq pr',
//         city: 'baku',
//         tel: '012-450-50-50',
//         country: 'Aze',
//     },
//     getWrite:function(){
//        return`men ${this.name}-de oxuyuram. oxudugum yerin adresi ${this.address.street} oldugu seher ${this.address.city} nomresi ${this.address.tel} olkesi ise ${this.address.country}`
//     }
// }

// console.log(school.getWrite())



//4) arrayda kitab obyektleri yaratma  ve arraya bir obyekt elave etmek

// let books=[
//     {
//         tittle:"dede qorqud",
//         author: "koroglunun kuleklemesi",
//         year: 1200
//     },

//     {
//         tittle: "sepsillax" ,
//         author: "sillaq nece atilir" ,
//         year: 2024
//     },

//     {
//         tittle: 'tarixi nadir' ,
//         author: 'heyat dersleri' ,
//         year: 1450
//     }
// ]

// function show(array){
//     let onlyname=[]
//  for(let item of array){
//     onlyname.push(item.tittle)
//  }
// return onlyname;

// }

// console.log(show(books))

// function show(array){
//    array.push({
//     tittle:'menim davam',
//     author:'hitlerin razborkasi',
//     year: 1937
//    })

//    return array;
// }

// console.log(show(books))

// 5) obyektler arasi muqayise

// let obj1={
//     name:"khayal",
//     age: 28,
//     grade: 80
// }

// let obj2={
//     name:"coni",
//     age:26,
//     grade:70
// }

// function show( a,b){
//      if(a.grade>b.grade){
//       console.log(`sen en yuksek neticeni aldin ${obj1.name}`)
//      }
//      else{
//         console.log(`sen en yuksek neticeni aldin ${obj2.name}`)
//      }
// }

// show( obj1,obj2)




// 6) obyektleti Object Destructuring yontemi ile parcalama
// let person={
//      address: 'sabhunchu',
//     email: "xhesenli424@gmail.com",
//     name: 'khayal'
   
// }

// let{name,email}=person
// console.log(name,email)

// yontemin izahi evvel deklare etmek ucun let name= person.name let email=person.email deye isdifade olurdu bu metod yontemi qisaldir ve asand edir.