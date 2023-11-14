// #1 лекция 8
// elem.addEventListener('click', function() {
//     let image = document.createElement('img');
// image.src = 'image.png';

// image.addEventListener('load', function() {
//     document.body.appendChild(image);
// });
//     });

//#1 лекция 9
// function make(callback) {
//     setTimeout(function() {
//         let res = [1, 2, 3, 4, 5];
//         let sum = res.reduce((acc, curr) => acc + curr, 0);
//         callback(sum);
//     }, 3000);
// }
// make(function(sum) {
//     console.log(sum); 
// });

// #2
// let  num1= prompt();
//       let  num2= prompt();
// function make(num1,num2, callback) {
// 	setTimeout(function() {
      
// 		let arr = [1, 2, 3, 4, 5];
	
//         console.log(	callback(arr[num1]+arr[num2]));
// 	}, 3000);
// };


//#1 лекция 10
// let promise = new Promise(function(resolve) {
// 	setTimeout(function() {
// 		let text = 'hello';
// 		resolve(text);
// 	}, 5000);
// });
// promise.then(function(text) {
// 	console.log(text); 
// });

//#2 лекция 10
// let promise  = new Promise((resolve, reject) => {
// 	let randomNumber = Math.floor(Math.random() * 6);
//     if (randomNumber === 0) {
// 	reject(new Error('Деление на ноль не допускается'));
// 	} else {
// 	resolve(1 / randomNumber);
// 	}
// 	});
// 	promise.then(function(result) {
// 	console.log(result);
// 	}, function(error) {
// 	console.error(error.message);  
// 	});
	
	

//#3 лекция 10 
// let promise = new Promise(function(resolve, reject) { 
//     setTimeout(function() { 
//     let isError = false;  
     
//     if (!isError) { 
//     resolve('выполнено успешно'); 
//     } else { 
//     reject('error in promise'); 
//     } 
//     }, 3000); 
//     }); 
     
//     setInterval(function() { 
//     console.log(promise);  
//     }, 3000); 
 
//#4 лекция 10 
// let promise = new Promise(function(resolve, reject) { 
//     setTimeout(function() { 
//     let isError = true;  //разница тут  
     
//     if (!isError) { 
//     resolve('выполнено успешно'); 
//     } else { 
//     reject('error in promise'); 
//     } 
//     }, 3000); 
//     }); 
     
//     setInterval(function() { 
//     console.log(promise);  
//     }, 3000);

// function delay() {
//     return new Promise((resolve) => {
//       const randomTimeout = Math.floor(Math.random() * 10 + 1) * 1000;
//       setTimeout(() => {
//         resolve(randomTimeout);
//       }, randomTimeout);
//     });
//   }
  
  

  
//   const promises = [];
  
//   for (let i = 0; i < 10; i++) {
//     promises.push(delay());
//   }
  
//   Promise.all(promises)
//     .then((results) => {
//       console.log(results);
//     });


