// let str="";

// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//         str+="x"                     //rectangle print
//     }
//     str+="\n"
// }
// console.log(str);


// let str="";
// let n=5;
// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//        if(i===0 || i===n-1){
//         str+="*"
//        }
//        else if(j===0 || j===n-1){            //blank square
//         str+="*";
//        }
//        else{
//         str+=" ";
//        }
//     }
//     str+="\n"
// }
// console.log(str);

// let str=" ";

// for(let i=0; i<5; i++){              //number loop 
//     for(let j=0; j<5; j++){
//         console.log(i,j);
//     }
// }





// heart shape
// let n=10;
// let str="";

// for(let i=n/2;i<n;i+=2){
//     //print frist Space
//     for(let j=1;j<n-i;j+=2){
//         str+=" ";
//     }
//     //print frist star
//     for(let j=1;j<i+1;j++){
//         str+="*";
//     }
//     //print second space

//     for(let j=1; j<n-i+1;j++){
//         str+=" ";
//     }
//     for(let j=1; j<i+1;j++){
//         str+="*";
//     }
//     str+="\n";
// }
// for(let i=n; i>0;i--){
//     for(let j=0;j<n-i;j++){
//         str+=" ";
//     }
//     for(j=1;j<i*2;j++){
//         str+="*";
//     }
//     str+="\n";
        
// }
// console.log(str);


// function sum(val1,val2){
//     return(val1+ val2);
// }

// console.log(sum(100,200));



// function sumOfnumber(val){
//     let sum=0;
//     for(let i=0; i<=val; i++){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(sumOfnumber(5));


// function multiple(mult){
//     let product=1;
//     for(let i=mult; i>0; i--){
//         product*=i;
//     }
//     return product;
// }

// console.log(multiple(5));


// function possibleCombinations(str){
//     let comb=[];
//     for (let i=0; i<str.length;i++){
//         for(let j=i+1;j<=str.length; j++){
//             comb.push(str.slice(i,j))
//         }
//     }
//     console.log(comb);
// }
// possibleCombinations("ABC")


// let num=0;

// while(num<=10){                 //1 to 10 cube
//     console.log(num**3)
//     num++
// }









// triangle scale star diagram
// let num=5;
// let pattern=' ';
// if(num>1){
//     for(let i=1; i<=num; i++){
//         for(let j=1; j<=i; j++){
//             pattern +=' * ';
//         }
//         pattern +='\n';
//     }
//     console.log(pattern);
    
// }
// else{
//     console.log("no possible pattern found");
    
// }



// let num=5;
// let pattern='';
// if(num>1){
//     for(let i=1; i<=num; i++){
//         console.log(i);
        
//         for(let j=1; j<=i; j++){
//             console.log(j);
            
//             if(j==1 || i==j || i==num){
//                 pattern +='* ';
//             }
//            else{
//             pattern +=" ";
//            } 
//         }
//         pattern +='\n';
//     }
//     console.log(pattern);
    
// }
// else{
//     console.log("no possible pattern found");
    
// }
// for(let i=5; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         pattern +="* ";
//     }
//     pattern +='\n';
// }
// console.log(pattern);



// Diamond
// let pattern="";
// let n=6;
// for(let i=1; i<=n; i++){
//     for(let j=n; j>i; j--){
//         pattern+=" ";
//     }
//     for(let k=0; k<2*i-1; k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }

// for(let i=1;i<=n-1;i++){
//     for(let j=0;j<i;j++){
//         pattern+=" ";
//     }
//     for(let k=(n-i)*2-1;k>0;k--){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);



// // triangle
// let str=" ";
// for(let i=0; i<6; i++){
//     for(let j=0; j<i; j++){
//         str+=`${j} `;                    
//     }
//     str+="\n"
// }
// console.log(str);



// decrement trangle
// let str="";
// for(let i=5; i>0; i--){
//     for(let j=i; j>0; j--){              
//         str+=` ${j} `;
//     }
//     str+="\n"
// }
// console.log(str);



//Holo trangle
// let pattern="";
// let n=5;
// for(let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
        
//         if(j==n){
//             pattern+=" *";
           
//         }
//         else if(j==0 || j==i-1){       
//             pattern+=" *";
            
//         }
//         else{
//             pattern+=" ";
            
//         }
//     }
//     pattern+="\n"
// }
// console.log(pattern);



//piramid trangle
// let pattern="";
// let n=6;
// for(let i=1; i<=n; i++){
//     for(let j=n; j>i; j--){
//         pattern+=" ";
//     }                                 
//     for(let k=0; k<2*i-1; k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);
 



// //Holo piramid
// let pattern="";
// let n=10;
// for(let i=1; i<=n; i++){
//     for(let j=n; j>i; j--){
//         pattern+=" ";
//     }                                
//     for(let k=0; k<2*i-1; k++){              
//         if(i===1 || i===n){
//             pattern+="*";
//         }
//         else if(k===0 || k===2*i-2){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
        
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// square
// let pattern=""
// for(let i=1; i<=6; i++){
//     for (let j=1; j<=6; j++){
//         pattern+=` ${i} `;
//     }
//     pattern+="\n"
// }
// console.log(pattern);



// reverse pyramid
// let pattern="";
// let n=6;
// for(let i=1;i<=n-1;i++){
//     for(let j=0;j<i;j++){
//         pattern+=" ";
//     }
//     for(let k=(n-i)*2-1;k>0;k--){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


