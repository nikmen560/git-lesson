let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name,surname, ...info] = arr;
console.log(info);