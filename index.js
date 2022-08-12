let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

courses.forEach((el, ind) => {
  const req1 = requiredRange1.sort((a, b) => a - b);
  const req2 = requiredRange2.sort((a, b) => a - b);
  const req3 = requiredRange3.sort((a, b) => a - b);
  const sort = el.prices.sort((a, b) => a - b);
  Promise.resolve()
    .then(() => {
      if (req1[0] >= sort[0] && req1[1] <= sort[1])
        console.log(`Для варианта поиска requiredRange1 подходит курс №${ind} -> ${el.name}`);
    })
    .then(() => {
      if (req2[0] >= sort[0] && req2[1] <= sort[1])
        console.log(`Для варианта поиска requiredRange2 подходит курс №${ind} -> ${el.name}`);
    })
    .then(() => {
      if (req3[0] >= sort[0] && req3[1] <= sort[1])
        console.log(`Для варианта поиска requiredRange3 подходит курс №${ind} -> ${el.name}`);
    });
});

//______________________________________________________________________________________________________
// let obj1 = courses.find(i => i.prices[0] === requiredRange1[0] && i.prices[1] === requiredRange1[1]);
// let obj2 = courses.find(i => i.prices[0] === requiredRange2[0] && i.prices[1] === requiredRange2[1]);
// let obj3 = courses.find(i => i.prices[0] === requiredRange3[0] && i.prices[1] === requiredRange3[1]);
// if (obj1 === undefined) obj1 = "Ничего не найдено"
// if (obj2 === undefined) obj2 = "Ничего не найдено"
// if (obj3 === undefined) obj3 = "Ничего не найдено"
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
//____________________________________________________________________________________________________
// courses.forEach(el => {
//     let value1 = (el.prices.length === requiredRange1.length) && el.prices.find(function(element, index) {
//         return element === requiredRange1[index]
//     })
//     let value2 = (el.prices.length === requiredRange2.length) && el.prices.find(function(element, index) {
//         return element === requiredRange2[index]
//     })
//     let value3 = (el.prices.length === requiredRange3.length) && el.prices.find(function(element, index) {
//         return element === requiredRange3[index]
//     })
//     if (value1 !== undefined && value1 !== null) console.log(value1)
//     if (value2 !== undefined && value2 !== null) console.log(value2)
//     if (value3 !== undefined && value3 !== null) console.log(value3)
// })
