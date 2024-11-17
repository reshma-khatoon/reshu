// // add function
// // function add(value1,value2){
// //     return (value1+value2);
// // }

// let result = add(10,20);
// console.log(result) 

// sum of n numbers
// function sum(n){
//     let sum =0;
    
//    while(n>0){
//     sum = sum+n
//     n= n-1
//    }
//    return sum
// }

// let fac = sum(10)
// console.log(fac)


// // factorial 
// // function factorial(j){
//     let fac = 1;
//     while(j>0){
//         fac = fac * j;
//         j= j-1
//     }
//     return fac;
// }

// let result1 = factorial(5)
// console.log(result1)

// reverse array
// let arr = [1,2,3,4,5,6];

// for(i=arr.length;i>=0;i--){
//     console.log(arr[i])
// }

// palindrome function
// let word = "non";
// let j = word.length-1;

// for(let i=0; i<word.length/2;i++){
//     if(word[i]!==word[j]){
//         console.log( "not palindrome")
//         j--;
//         break;
//     }
//     else{
//        console.log("palindrome")
//        break;
//     }
// }


// program to build the array of ['a','ab','abc','b','bc','c'] from string "abc"
   // let a = "abc"
   // let arr = [];

   // for(let i=0;i<a.length;i++){
   //    for(let j=i+1;j<=a.length;j++){
   //       arr.push(a.slice(i,j))
   //    }
   // }
   // console.log(arr);


   // program to reverse the String
// let names = "bhumika";
// let str = "";
// for(i=names.length-1;i>=0;i--){
//     // console.log(names[i])
//     str+=names[i]
// }
// console.log(str);


// program to find the vowel and characters in a String
// let word = "bhumika";
// let vow_count = 0;
// let char_count = 0;
// function vowel(word){
//     for(i=0;i<word.length;i++){
//         if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u"){
//             vow_count++;
//         }
//         else{
//             char_count++;
//         }
//     }
//     console.log( "vowel:",vow_count)
//     console.log("character:",char_count)
// }
// vowel("bhumika");


// program to find the longest word and its length in a sentence
// let sentence = "my name is bhumika";
// let longest_word = " ";
// let longest_length = 0;
// let splited_sentence = sentence.split(" ")
// console.log(splited_sentence)
// for(i=0;i<splited_sentence.length;i++){
//    if(longest_length<splited_sentence[i].length){
//     longest_length= splited_sentence[i].length
//     longest_word = splited_sentence[i];
//    }

// }
// console.log(the longest word is ${longest_word} and length is ${longest_length});

// let a = "bhumika"
// console.log(typeof(a))


// program to find typeof of elements in array
// let arr = [23,true,"bhumika","hello",null]
// let arr1 = []
// for(i=0;i<arr.length;i++){
//    let a = typeof(arr[i])
//    arr1.push(a)
// }
// console.log(arr1)


// program to find cube
// let cubic = [];
// function cube(n){
//    for(i=1;i<=n;i++){
//       let a = i**3;
//       cubic.push(a)
//    }
//    return cubic
// }
// let value = cube(10)
// console.log(value)


// program to find the index of element in string
   // function check(val1,val2){    
   //    for(i=0;i<val1.length;i++){
   //       if(val1[i]==val2){
   //          return value is present at ${i}
   //       }
   //    }
   //    return "not present"
   // }
   // let result = check("bhumika","k")
   // console.log(result)


// program to find prime number
// function prime(n){
//    for(i=2;i<=n-1;i++){
//       if(n%i==0){
//          return "not prime"
//       }
//    }
//    return "prime"
// }
// let result = prime(15)
// console.log(result)


// bubblesort
// let arr = [4,324,235,6,34,456,67]

// function bubblesort(arr){
//    let n= arr.length;
//    for(let i=0;i<n-1;i++){
//       for(j=0;j<n-i-1;j++){
//          if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//          }
//       }
//    }
//    return arr;
// }
// console.log(bubblesort(arr))


// selectionsort
// let arr = [9,34,56,234,7,46,23,78,67]
// function selectionsort(arr){
//    let n = arr.length;
//    for(let i=0;i<n-1;i++){
//       let minIndex = i;
//       for(j=i+1;j<n;j++){
//          if(arr[j]<arr[minIndex]){
//             minIndex = j;
//          }
//       }
//       if(minIndex !==i){
//          [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//       }
//       console.log(minIndex,arr)
//    }
//    return arr;
// }
// console.log(selectionsort(arr))


// insertionsort
// let arr = [34,35,6,43,235,765,32,76]
// function insertionsort(arr){
//    for(let i=1;i<arr.length;i++){
//       let key=arr[i];
//       let j=i-1;
//       console.log(j,i,key)
//       while(j>=0 && arr[j] >key){
//          arr[j+1]=arr[j];
//          j--;
//       }
//       arr[j+1]=key;
//       console.log(arr)
//    }
//    return arr;
// }
// console.log(insertionsort(arr))


// mergesort
// let arr = [9,28,17,6,5,14,33,2,1]
// function merge(left,right){
//    console.log(left,right)
//    let result = [];
//    let leftIndex = 0;
//    let rightIndex = 0;

//    while(leftIndex<left.length && rightIndex<right.length){
//       if(left[leftIndex]<right[rightIndex]){
//          result.push(left[leftIndex]);
//          leftIndex++;
//       }
//       else{
//          result.push(right[rightIndex]);
//          rightIndex++;
//       }
//    }
//    console.log({left,leftIndex,right,rightIndex,l:left.slice(leftIndex),r:right.slice(rightIndex),c:result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))})
//    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// function mergeSort(array){
//    if(array.length===1){
//       return array
//    }
//    let middle = Math.floor(array.length/2);
//    let left = array.slice(0,middle);
//    let right = array.slice(middle);
//    return merge(mergeSort(left),mergeSort(right));
// }
// console.log(mergeSort(arr))


// find min and max element of array
// let arr = [56,24,2,45,6,28,78,1]
// function bubbleSort(arr){
//    for(i=0;i<arr.length-1;i++){
//       for(j=0;j<arr.length-i-1;j++){
//          if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//          }
//       }
//    }
//    // return arr
//    return sorted array:${arr} \n min:${arr[0]} and max:${arr[-1])}
// }
// console.log(bubbleSort(arr))


// index k return
// let arr = [56,23,45,2,49,69,34,3]
// let k = 3;
// function merge(left, right){
//    let result = [];
//    let leftIndex = 0;
//    let rightIndex = 0;
//    while(leftIndex<left.length && rightIndex<right.length){
//       if(left[leftIndex]<right[rightIndex]){
//          result.push(left[leftIndex])
//          leftIndex++;
//       }
//       else{
//          result.push(right[rightIndex])
//          rightIndex++;
//       }
//    }
//    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)),result[k]
   
// }

// function mergeSort(arr){
//    if(arr.length===1){
//       return arr
//    }
//    let middle = arr.length/2;
//    let left = arr.slice(0,middle)
//    let right = arr.slice(middle)
//    return merge(mergeSort(left),mergeSort(right),k)
// }
// let result = mergeSort(arr);
// console.log(mergeSort(arr))
// console.log(result[k])


//factorial through recursion
// function factorial(n){
//    if(n==1){
//       return 1
//    }
//    return n*factorial(n-1)
// }
// console.log(factorial(5))

// quick sort
// let arr = [34,5,23,4,56,21,77]
// function quickSort(arr){
//    if(arr.length<=1){
//       return arr
//    }
//    const pivotIndex = Math.floor(arr.length/2)
//    const pivot = arr[pivotIndex]
//    let left = [];
//    let right = [];
//    let middle = [];
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]<pivot) left.push(arr[i]);
//       else if(arr[i]>pivot) right.push(arr[i]);
//       else middle.push(arr[i]);
//    }
//    return[...quickSort(left),...middle,...quickSort(right)];
// }
// console.log(quickSort(arr));

// relocate array by k
// let arr = [1,2,3,4,5];
// let arr1 = [];
// let arr2 = [];
// function relocate(arr,k){
//    for(i=0;i<k;i++){
//       arr1.push(arr[i])
//    }
//    for(i=k;i<arr.length;i++){
//       arr2.push(arr[i])
//    }
//    return arr2.concat(arr1)
// }
// console.log(relocate(arr,2));


// let arr = [1,35,456,65,76,7];
// for(let i in arr){
//    console.log(i)
// }

// for(let i of arr){
//    console.log(i)
// }


// union and intersection
// let arr1 = [1,2]
// let arr2 = [2,3,4,5]
// let arr3 = []
// let arr4 = []
// function unionIntersection(arr1,arr2){
//    for(i=0;i<arr1.length;i++){
//       for(j=0;j<arr2.length;j++){
//          if(arr1[i]==arr2[j]){
//             arr3.push(arr1[i])
//          }
//       }
//    }
//    arr4.push(arr1)
//    arr4.push(arr2)
//    return intersection:${arr3} and union:${arr4}
// }
// console.log(unionIntersection(arr1,arr2));


// // find duplicates
// let arr = [1,2,45,2,7,8,7,2,7,7]
// let array = []
// let count = 0;
// function duplicate(arr){
//    for(i=0;i<arr.length;i++){
//       for(j=0;j<arr.length;j++){
//          if(arr[i]==arr[j+1]){
//             array.push(arr[i])
//             count++;
//             return array
//          }
//       }
//    }
//    return "not found";
// }
// console.log(duplicate(arr));


// sort 0,1 without sorting method
// let arr = [0,1,1,0,1,0]
// function sortzero(arr){
//    let Index = 0;
//    for(i=0;i<arr.length;i++){
//       if(arr[i]===0){
//          [arr[i],arr[Index]]=[arr[Index],arr[i]]
//          Index++;
//       }
//    }
//    return arr
// }
// console.log(sortzero(arr));


// sort +ve and -ve left & right
//  let arr = [-1,-2,3,-4,-5,10,11,2]
//  function rearrange(arr){
//    let n = arr.length;
//    let pos = 0;
//     for(let i=0;i<n;i++){
//          if(arr[i]<0){
//             [arr[i],arr[pos]]=[arr[pos],arr[i]]
//             pos++;
//          }
//     }

         // let neg = 0;
         // let posIndex = pos;
         // while(neg<pos && posIndex < n && arr[neg]<0){
         //    while(posIndex < n && arr[posIndex]<0){
         //       posIndex++;
         //    }
         //    if(posIndex<n){
         //       [arr[neg],arr[posIndex]]=[arr[posIndex],arr[neg]]
         //    }
         // }
//     return arr
//  }
//  console.log(rearrange(arr));
 

// find common element in 3 Array
// let arr1 = [1,2,3,4,5,7,9,10,8]
// let arr2 = [4,5,6,7,8,10]
// let arr3 = [4,5,12,7,33,45,8,10]
// let arr4 = []
// for(i=0;i<arr1.length;i++){
//    for(j=0;j<arr2.length;j++){
//       for(k=0;k<arr3.length;k++){
//          if(arr1[i]===arr2[j] && arr1[i]===arr3[k]){
//             arr4.push(arr1[i])
//          }
//       }
//    }
// }
// console.log(arr4);


// another approach of find common element in 3 array reduce complexity
// function findCommon(arr1,arr2,arr3){
//    let commonElement = []
//    let i=0,j=0,k=0;
   
//    while(i<arr1.length && j<arr2.length && k<arr3.length){
//       if(arr1[i]===arr2[j] && arr1[i]===arr3[k]){
//          commonElement.push(arr1[i]);
//          i++;
//          j++; 
//          k++;
//       }
//       // console.log(arr1[i]);
      
//       if(arr1[i]<arr2[j]){
//          i++;
//       }
//       else if(arr2[j]<arr3[k]){
//          j++;
//       }
//       else{
//          k++;
//       }
//    }
//       return commonElement
// }
// console.log(findCommon([1,2,3,4,5,7,9,10],[1,4,5,6,7,8,10],[1,4,5,7,8,10]));



// subarray sum of 10
// let arr = [3,4,5,1,6,7,8,9]
// let num = 9;
// let arr2 = []
// for(i=0;i<arr.length;i++){
//    for(j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j] == num){
//          arr2.push([arr[i],arr[j]])
//       }
//    }
// }
// console.log(arr2);

