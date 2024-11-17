// array method👇

// let arr = [0,1,2,3,4,5,6,7,8,9,10]
// arr.push(10)
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.unshift(10)
// console.log(arr);


// // sorting
// let arr2 = [6,3,4,1,10]
// arr2.sort((a,b)=>a-b)
// console.log(arr2);

// arr2.sort((a,b)=>b-a)
// console.log(arr2);


// map method
// let arr1 = [2,46,3,56,6]
// const arr2 = arr1.map((val)=>val*2)
// console.log(arr2);


// for each
// let arr1 = [1,2,3,4,5,6,7]
// arr1.forEach((val)=>{
//     console.log(val*2)})


// filter method
// let arr1 = [2,4,2,5,12,16,67]
// const farr = arr1.filter((val)=>val>3)
// console.log(farr);


// // reduce method
// let arr1 = [4,56,1,4,6,2]
// let arr2 = arr1.reduce((val1,val2,index,arr)=>{
//     return val1+val2})
// console.log(arr2);



// slice method
// let arr1 = [1,24,56,6,72,3,667,6]
// console.log(arr1.slice(2));
// console.log(arr1.slice(1,4));



// indexof method
// let arr1 = [1,34,5,6,3,4]
// console.log(arr1.indexOf(3))



// // include method
// let arr1 = [34,23,45,65,56]
// // console.log(arr1.includes(23));
// console.log(arr1.includes(40));


    // map method
// let mapArr=[1,2,3,4];
// let newMapArr=mapArr.map((val,index,ar)=>{return val*2})
// console.log(newMapArr)



// let strArr=["hello","world","is"];
// let newStrArr=strArr.map((val)=>{
//     return(val.toLowerCase())})
//  console.log(strArr);
 


// let evenArr=[1,2,3,4,5,6,7,8];
// let newEvenArr=evenArr.filter(val=> val %2 ==0)

// console.log(newEvenArr);



// let array1=[[1,2,[5,6]],[3,4]];
// console.log((array1.flat()));


// let obj=[{age:12},{name:"fklss",age:22,cls:"wee"},{name:"gldf",age:33}]
// let ageArray=obj.map(val=>(val.age))

// console.log(ageArray)

// ["0:12","1:22","2:33"]
// let arrm=[1,false,3];
// result=[1,'missing',9]
// console.log(arrm);

// let newArrm=arrm.map((val)=>val?val**2:"missing")
// let a=3
// console.log(a.toString(2),"ddd");
// console.log(newArrm,"dslssl");
// [10,20,30,40];
// [7,17,27,37]

// [1,2,3,4,5,6]
// [{oNum:1,binary:"11"},  ]




// methods to clone array
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]  //deep copy
// console.log(arr2);
// let arr3 = arr1   //shallow copy
// console.log(arr3);
// let arr4 = [1,2,3,4,5]
// console.log(arr4);
// let arr5 = arr1.slice(0)
// console.log(arr5);
// let arr6 = [].concat(arr1)
// console.log(arr6);

// console.log(arr1===arr2);
// console.log(arr1===arr3);




// array destructuring
// let arr = ["reshma","hello","hii","everyone"]
// let [val1,,val2] = arr;
// let [val3,...val4] = arr;
// console.log(val4);


// Object
// let obj={
//     "first name":"reshma",
//     age:20,
//     course:"web"
// }
// console.log(obj["first name"]); //bracket notation
// console.log(obj.age);  //dot notation


// iteration
// for of cannot be used with object
// for(let i in obj){         
//     console.log(i,obj[i]);   
// }

// add value in object
// obj["sayhello"]=()=>{console.log("hello");
// }
// obj["class"] = "mtech";
// console.log(obj);


// get keys
// console.log(Object.keys(obj));

// get values
// console.log(Object.values(obj));


// let key1 = "obj1"

// let key2 = "obj2"

// let val1 = "myval2";
// let val2 = "myval2";

// let obj = {}
// obj[key1] = val1;
// obj[key2] = val2;
// console.log(obj);


// array destructuring
// let arr2 = [..."reshma"]
// console.log(arr2);


// let obj1={
//     key1:"value1",
//     key2:"value2"
// }

// let obj2={
//     key3:"value3",
//     key1:"value4"
// }

// let finalObj = {...obj1,...obj2}
// console.log(finalObj);


// object destructuring
// let final = {..."qwertyuiop"}
// console.log(final);

// let obj={
//     name:"reshma",
//     age:20,
//     gender:"female",
//     hobbies:["sports","singing"]
// }
// let {name,age,...abc} = obj;
// console.log(name,age,abc);

// let {name:val1,age:val2,...agh} = obj;
// console.log(val1,val2,agh);



// // sort method
// let arr=["5","9","3","2","10","8","6"]

// let obj=[
//     {productid:1,productname:"toy",price:400},
//     {productid:2,productname:"train",price:1000},
//     {productid:3,productname:"bus",price:800},
//     {productid:4,productname:"car",price:500},
//     {productid:5,productname:"plane",price:1500},
// ]

// console.log(obj.some((val)=>val.price ===1000));

//     console.log(obj.every((val)=>val.price>100));
    

// obj.sort((a,b)=>a.price-b.price);
// console.log(obj);




// // find method
// let fArr=["reshma","harshita","bhumika","naina"];
// console.log(fArr.find((val)=>val=='reshma'));



// // every method
// let eArr=[1,3,5];
// console.log(eArr.every((val)=>val%2 ===1));



// // some method
//  let eArr=[1,2,3,4,5];
//  console.log(eArr.some((val)=>val%2 ===0));
 

// fill method
// (value,start,end)
// let zeroArr=new Array(10).fill(0);

// let inArr=[1,2,3,4,5,6,7,8,9]
// inArr.fill(0,3,6)
// console.log(inArr);

// console.log(zeroArr);



// splice method
// let inArr=[1,2,3,4,5,6,7,8,9]
// inArr.splice(0,2)
// console.log(inArr);


// let fruits=["apple","mango","orange","grapes","banana"]
// fruits.splice()
// console.log(fruits);

// // sets method
// let arr=[1,1,1,2,2,2,3,3,3]

// let set=new set(arr);

// set.add(10);
// set.add(10)
// console.log(set.has(3));

// console.log(set);


// Concat method

// let arr1=[1,2,3]
// let arr2=[4,5]
// let newarr=arr1.concat(arr2)

// console.log(newarr);


// filter method
// let arr1=[1,2,3,4,5,6,7]
// console.log(arr1.filter((val)=>val>3));


// for each method
// let arr1=[1,2,3,4,5,6]
// arr1.forEach(val=>val*2);
// console.log(arr1);


// reverse method
// let arr1=[1,2,3,4,5,6]
// console.log(arr.reverse());


// // map
// let newmap= new Map();
// newmap.set("name","reshma");
// newmap.set(1,"hello");
// newmap.set(true,"world")

// // console.log(newmap);

// newmap.forEach((val,index)=>console.log(`${index}:${val}`));

// console.log(newmap.get(true));

// console.log(newmap.has(2));

// console.log(newmap.delete(1));

// console.log(newmap.clear());
// console.log(newmap);

// console.log(newmap.size);

// console.log(newmap.keys());

// console.log(newmap.values());

// console.log(newmap.entries());


// // prototype
// function hello(){
//     console.log("hello");
// }
// console.log(hello.prototype);
// // Object.prototype()
// hello.prototype.getInfo = ()=>{
//     console.log("all good");
// }
// console.log(hello.prototype);
// hello.prototype.addTwoNumbers = (a,b)=>{
//     console.log(a+b)
// }
// console.log(hello.prototype);
// hello.prototype.getInfo()
// hello.prototype.addTwoNumbers(4,5)


// let myarr = new Array()
// console.log(myarr.prototype);


// userMethods = {
//     getInfo : ()=>console.log("hello")
// }

// function details(fname,lname,age,email){
//     const obj = Object.create(userMethods)
//     obj.fname = fname;
//     obj.lname = lname;
//     obj.age = age;
//     obj.email = email;
//     return obj
// }
// let result = details("reshma","khatoon",17,"khatoonreshma@gmail.com")
// console.log(result);


// // class
// class person{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     walking(){
//         console.log("i'm walking");
//     }
//     reading(){
//         console.log("i'm reading");
//     }

// }
// class superPerson extends person{
//     constructor(fname,lname,speed){
//         super(fname,lname)
//         this.speed = speed;
//     }
//     flying(){
//         console.log("i'm flying");
//     }
// }
// const person1 = new superPerson("reshma","khatoon",300)
// person1.reading()
// console.log(person1);


// console.log(this);
// console.log(window);
// // console.log(fname);

// var fname="reshma"

// let fname="reshma"

// const fname="reshma"

// console.log(fname);



// console.log(this);
// console.log(window);
// console.log(hello);
// console.log(fname);


// var hello=function(){
//     console.log("my world");
// }
// var fname="reshma"
// console.log(fname);



// console.log(this);
// console.log(window);

// function myfullname(fname,lname){
// return(`${fname}${lname}`);
// }
// console.log(fullname);

// var fullname= myfullname("reshma","khatoon");
// console.log(fullname);



// class library{
//     constructor(){
//         this.bookStock=[];
//     }
    
//     addstock(book){
//         this.bookStock.push(book)
//     }
//     issue(){
//         this.bookStock.pop()
//     }
//     edit(pickbook){
//         // this.bookStock.filter((val)=>val===pickbook)
//     }
//     showstock(){
//         console.log(this.bookStock);
        
//     }
// }
// let schoollibrary=new library();
// schoollibrary.addstock("harry;porter");
// schoollibrary.showstock()


// to do list


// array
// push array
// let array=[];
// array.push(10);
// array.push(20);
// console.log(array);


// pop array
// let array=[];
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
// array.pop();
// console.log(array);


// shift array
// let array=[];
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
// array.shift();
// console.log(array);


// unshift array
// let array=[];
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
// array.unshift(200);
// console.log(array);

// bubble sort

// function bubblesort(arr){
//     for (let i=0; i<arr.length; i++){
//         for (let j=0; j<arr.length; j++){
//             if(arr[j]> arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];

//             }
//                 console.log("first itration",i,arr);
                
//         }
//     }
//     return arr
// }
// console.log(bubblesort([8,7,6,5,4,3,2,1]));



// selection sort
// function selectionsort(arr){
//     for (let i=0; i<arr.length; i++){
//         let min_idx =i;
//         for(let j=i+1; j<arr.lngth; j++){
//             if(arr[j]<arr[min_idx]){
//                 min_idx = j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[min_idx];
//         arr[min_idx]=temp;
//     }
//     return arr;
// }
// console.log(selectionsort(arr));


// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
            
//         }
//         console.log("first itration",i, arr);
        
//     }
//     return arr
// }
// let arr =[8, 7, 6, 5, 4, 3, 2, 1]
// function selectionSort(arr){
// }
// console.log(selectionSort(arr));



//  duplicators
// let arr=[1,1,2,3,4,4,5,6,6,6,7];
// function findDuplicates(arr) {
// let set = new Set();
//     let duplicate = [];
//     for (let i of arr) {
//         if (set.has(i)) {
//             duplicate.push(i);
//         }
//         else {
//             set.add(i);
//         }
//     }
//     return duplicate;
// }
// console.log(findDuplicates(arr));
 


// find third largest number
// let arr = [5,4,3,2,1]
// function findKlargest(arr,k) {
//     arr.sort((a,b)=>a-b)
//     return arr[(arr.length)-k]
// }
// console.log(findKlargest(arr,3))



// slice method
// let arr=[1,2,3,4,5,6,7,8];
// let newArr=arr.slice(2,3);
// console.log(newArr);


// splice method
// let arr=[1,2,3,4,5,6,7,8];
// let newArr=arr.splice(2,2,"hello","reshma");
// console.log('return array',newArr,'original array',arr);


// let arr=[1,2,3,4];
// let newArr=arr.splice(1,2,"x","y");
// console.log(newArr,arr);


// include method
// let arr=[1,2,3,4,5,6,7];
// console.log(arr.includes(3));


// indexof method
// let arr=[1,2,3,10,4,5,6,7,10];
// console.log(arr.indexOf(10,5));


// let arr=[1,2,3,4,5,6,7]
// for(let i of arr){
//     console.log(i);
    
// }


// foreach method
// let arr=[1,2,3,4,5];
// let forEachArr= arr.forEach((val,index)=>{
//     console.log(val*3);
    
// })
// console.log(forEachArr);


// reduce method
// let arr=[1,2,3,4,5];
// let sumOfArr=arr.reduce((acc,val,index,arr)=>{
//     return acc+=val
// })
// console.log(sumOfArr);


// sorting
// let sortingArr=[45,23,32,12,76,54];
// console.log(sortingArr.sort((a,b)=>a-b));


// filter method
// let filterArr=[45,23,32,12,76,54];
// let evenVAL=filterArr.filter((val)=>val%2  !==0)
// console.log(evenVAL);


// let filterArr=[94,4,2,34,40,22,23,12,4];
// let a=filterArr.filter((val)=> val>30).map((val)=>val*2).reduce((acc,val)=>acc+=val)
// console.log(a);


// find method
// let findArr=[12,34,32,54,43];
// console.log(findArr.find((val)=>val ===12));


// let findArr=[12,34,32,54,43];
// console.log(findArr.findIndex((val)=>val ===43));

// concat
// let aa=findArr.concat([22,222,33,333])
// console.log(aa);


// join
// let ddd=findArr.join("--")
// console.log(ddd);


// every
// console.log(findArr.every((val)=>val>70));

// some
// console.log(findArr.some((val)=>val>10));



// most frequent character in String(hello)--l
//  function mostfrequent(str){
//     let freq={}
//     let Maxchar="";
//     let Maxcount=0;
//     for(let char of str){
//         freq[char]=(freq[char] || 0)+1;
//         if(freq[char]>Maxcount){
//             Maxcount=freq[char];
//             Maxchar=char
//         }
//     }
//     return Maxchar
//  }
//  console.log(mostfrequent("helllooo"));
 

// capitalise first letter
// function cap(str){
//     let words = str.split(" ");
//     let capArr = words.map((val) => val.charAt(0).toUpperCase()+(val.slice(1)).toLowerCase())
//     return capArr.join(" ")
// }
// console.log(cap("hello world sdf"));


// count vowels and constant in str



// callback function
// function cbExample(name,cb){
//     return cb(name);
// }
// function greetName(name){
//     return `hello ${name} good to see you!`;
// }
// console.log(cbExample("reshma",greetName));


// function hello(x,y,z){
//     let a=y()
//     console.log(a);
    
// }
// hello("hiee",()=>{return("this is callback function");
// },"byie")


// add two numbers
// function addtwonum(x,y,z){
//     console.log('this is only for printing data',x+y);
//     return ((x+y)*z);
// }
// let data=addtwonum(1,2,3)
// console.log(data);


// fat arrow lamba
// let fnArrow=(a,b)=>{return(a+b)};
// console.log(fnArrow(12,13));


// print name and return str
// function Name(str){
//     console.log(str);
//     return str.length;
// }
// let data2= Name("Reshma")
// console.log(data2);


// function sumofnum(n){
//     let sum=1;
    
    
//     for (let i=n; i=>-n;i--){
        
//         if(i==0){
//             continue;
//         }
        
//         sum*=i;
        
//     }
//     return sum
// }
// console.log(sumofnum(3));



// while loop
// let sum=1
// let a=4;
// while(a>0){
//     sum*=a
//     a--
// }
// console.log(sum);


// do while loop
// let i=9;
// do{
//     console.log(i);
//     i--;
// }
// while(i>9)


// for loop
// for(let i=0; i<10; i++){
    
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }


// rest operator
// let arr=[1,2,3,4,5,6,7,8];
// let[a,...b]= arr;
// console.log(b);

// spread operator
// let arr=[1,2,3,4,5,6,7,8];
// let[...b]= arr;
// console.log(b);


// objects
