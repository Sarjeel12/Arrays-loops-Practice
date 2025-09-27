// Qno1
// var arr1 = ["Sarjeel" , 24 , "Hyd" ,true];
//     for(var i = 0; i <arr1.length; i++){
//      console.log(arr1[i])   
//     }

// Qno2
// var arr1 = ["Sarjeel" , 24 , "Hyd" ,true];
//     for(var i = arr1.length - 1; i >= 0; i--){
//      console.log(arr1[i])   
//     }

// Qno3
// var arr = [1,2,3,4]
// var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         console.log(sum += arr[i])
//     }

// Qno4
// var arr = [2,4,6,8]
// var sum = 0
//     for(var i = 0; i <arr.length; i++){
//         sum += arr[i]
//     }
//     var ave = sum / arr.length
//     console.log(ave)

// Qno5
// var arr = [2,3,4,5]
// var count = 0
//     for(var i = 0; arr[i] !== undefined; i++ ){
//         count++
//     }
// console.log(count)

// Qno6
// var num = [1,2,3,4,5,6,7,8,9]
//     for(var i = 0; i<num.length; i++){
//         if(num[i] % 2 === 0){
//             console.log( num[i])
//         }
//     }

// Qno7
// var num = [1,2,3,4,5,6,7,8,9]
//     for(var i = 0; i<num.length; i++){
//         if(num[i] % 2 === 1){
//             console.log( num[i])
//         }
//     }

// Qno8
// var arr = [11,22,33,44,55,66]
//     for(var i = 0; i<arr.length; i++){
//         console.log(arr[i] * 2)
//     }

// Qno9
// var arr = [1,2,3,4,5,6]
//     for(var i = 0; i<arr.length; i++){
//         console.log(arr[i] ** 2)
//     }

// Qno10
// var num = [10,4,6,2,3,7,9,22,12,11]
//     for(var i = 0; i <num.length; i++){
//         if(num[i] > 5){
//             console.log(num[i])
//         }
//     }

// Qno11
// var num = [5,2,8,10,1]
// var largest = 0
//     for(var i = 0; i <num.length; i++ ){
//         if(num[i] > largest){
//             largest = num[i]
//         }
//     }
// console.log(largest)

// Qno12
// var num = [5,2,8,10,1];
// var shortest =  num[0];
//     for(var i = 0; i <num.length; i++ ){
//         if(num[i] < shortest){
//             shortest = num[i]
//         }
//     }
// console.log(shortest)

// Qno13
// var num = [1,2,34,5,66,76,8,9]
// var largest = num[0]
// var smallest = num[0]

//     for(var i = 0; i<num.length; i++){
//         if(num[i] > largest){
//             largest = num[i]
//         }if(num[i] < smallest){
//             smallest =num[i] 
//         }
//     }
//     console.log("largest : " + largest + "Smallest: " + smallest)

// Qno14
// var num = [1,2,3,4,5,6,7,8,9]
// var even = 0
// var odd = 0

//     for(var i = 0; i <num.length; i++){
//         if(num[i] % 2 === 0){
//             even++
//         } else{
//             odd++
//         }
//     }console.log(even)
//     console.log(odd)

// Qno15
// var num = [1,2,3,4,5,5,6,7,8,9,0,5,6,2,6,1,]
// var user = +prompt("Enter num")
// var count = 0

//     for(var i = 0; i < num.length; i++){
//         if(num[i] === user){
//             count++
//         }
//     }console.log(count)

// Qno16
// var arr = [1,2,3,4,5,6,7,8,9]
// var even = arr[0]
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             console.log(arr[i])
//             break
//         }
//     }

// Qno17
// var arr = [1,2,3,4,5,6,7,8,9]
// var odd = arr[0]
//     for(var i = arr.length -1; i >= 0; i--){
//         if(arr[i] % 2 !== 0){
//             console.log(arr[i])
//             break
//         }
//     }

// Qno18
// var num = [4,7,9,3,0,5]
// var user = +prompt("Give num")
// var found = false
//     for(var i = 0; i < num.length; i++){
//         if(num[i] === user){
//             found = true;
//             break
//         }
//     }

//     if (found){
//         console.log(user + " num exists")
//     }else{
//         console.log(user + "doesnt exist")
//     }

// Qno19
// var arr = [1,2,3,5,4]
// var user = +prompt("Enter num")
// var index = -1
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === user){
//             index = 1
//             break
//         }
//     }

//     if(index !== -1){
//         console.log(user + index)
//     }else(index === -1)
//         console.log(user + " Is not found in the array")

// Qno20
// var arr = [1,2,3,4,5,6,7,8,9]
// var count = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 10){
//             count++
//         }
//     }console.log(count)

// Qno21
// var arr = [1,2,3,4,5,6,7,8]
// var empty = []

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             empty.push(arr[i]);
//         }
//     }

//     console.log("original array = " +arr)
//     console.log("Even array = " + empty)


// Qno22
// var arr = [1,2,3,4,5,6,7,8]
// var empty = []

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             empty.push(arr[i]);
//         }
//     }

//     console.log("original array = " +arr)
//     console.log("odd array = " + empty)


// Qno23
// var arr = [1,2,3,4,5,6,7,8]
// var newarr = []

//     for(var i = 0; i < arr.length; i++){
//         newarr.push(arr[i] + 1)
//     }

//     console.log(arr + " Original")
//     console.log(newarr + " Increased")

// Qno24
// var arr = [1,2,3,4,5,6,7,8]
// var newarr = []

//     for(var i = 0; i < arr.length; i++){
//         newarr.push(arr[i] * 5)
//     }

//     console.log(arr + " Original")
//     console.log(newarr + " Multiplied by 5")

// Qno25

// var arr = [1,2,3,4,5,6,7,8,9]
// var reverse = []
//     for(var i = arr.length -1; i >= 0; i--){
//         reverse.push(arr[i]);
//     }
// console.log(reverse)    

// Qno26

// var arr = [2,3,4,5,6,7]
// var empty = []

//     for(var i = 0; i < arr.length; i++){
//         empty.push(arr[i])
//     }
// console.log('Original ' +arr)    
// console.log('Copied ' +empty)    


// Qno27

// var arr1 = [1,2,3,4,5]
// var arr2 = [6,7,8,9,10]
// var merged = []

//     for(var i = 0; i < arr1.length; i++){
//         merged.push(arr1[i]);

//     }
//     for(var j = 0; j < arr2.length; j++){
//         merged.push(arr2[j])
//     }
// console.log("New Array " + merged);    

// Qno28

// var arr = [1,2,3,4,5,6,7,8]
// var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum += arr[i]
//         }
//     }console.log(sum + " This is sum of even")

// // Qno29
// var arr = [1,2,3,4,5,6,7,8]
// var sum = 0

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 1){
//             sum += arr[i]
//         }
//     }console.log(sum + " This is sum of Odd")

// Qno30

// var negArr = [-1,-2,-3,-4]

//     for(var i = 0; i < negArr.length; i++){
//         if(negArr[i] < 0){
//             negArr[i] = 0
//         }
//     }
//     console.log(negArr)

// Qno31

// var arr = [1,2,3,4,5,-6,-7]
// var positive = 0;
// var neg =  0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             positive++
//         }else if(arr[i] < 0){
//             neg++
//         }
//     }console.log("Positive = " +positive);
//      console.log("Negative = " +neg);

// Qno32
// Division method

// var arr = [1,2,3,4,5]
// var count = 0;

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 3 === 0){
//             count++
//         }
//     }console.log(count)

// Qno33

// var arr = [10, 20, 5, 35]
// var largest = arr[0]
// var secondlargest = arr[0]
    
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > largest){
//             secondlargest = largest
//             largest = arr[i]
//         }else if(arr[i] > secondlargest && arr[i] < largest){
//             secondlargest = arr[i]
//         }
//     }
//     console.log("largest " + largest)
//     console.log("Secondlargest " + secondlargest)

// Qno34


// var arr = [10, 20, 5, 35]
// var smaller = arr[0]
// var secondsmaller = arr[0]
    
//     for (var i = 1; i < arr.length; i++) {
//         if(arr[i] < smaller){
//             secondsmaller = smaller
//             smaller = arr[i]
//         }else if(arr[i] < secondsmaller && arr[i] > smaller){
//             secondsmaller = arr[i]
//         }
//     }
//     console.log("smaller " + smaller)
//     console.log("Secondsmaller " + secondsmaller)

// // Qno35

// var arr = [1,2,3,4,5,6]
// var largest = arr[0]
// var small = arr[0]
//     for(var i = 1; i< arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }else if(arr[i] < small){
//             small = arr[i]
//         }
//     }
// var diff = largest - small;
// console.log(arr + " Original")    
// console.log(largest + " largest")    
// console.log(small + " Small")    
// console.log(diff + " Disffernce")    
