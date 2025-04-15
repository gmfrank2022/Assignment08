//STEP 1
// Create a string array that contains your five favorite movies. 
// Then, use the console to display the second movie in your array.
//
// let favMovies = ["Movie01", "Movie02", "Movie03", "Movie04", "Movie05"]
// console.log(favMovies[1])

//STEP 2
// Declare an array called movies using the function constructor method. 
// Add the length of 5 into the constructor. 
// Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
// Then, use the console to display the first movie in your array.

// let movies = new Array(5)
// movies[0]="Movie01"
// movies[1]="Movie02"
// movies[2]="Movie03"
// movies[3]="Movie04"
// movies[4]="Movie05"

// console.log(movies[0])


//STEP 3
// Copy your code from step 2. 
// Add a new movie into the 3rd position within your array. 
// Then, use the console to display the length of the array. 
// You should now have 6 total movies stored in the array.

// let movies = new Array(5)
// movies[0]="Movie01"
// movies[1]="Movie02"
// movies[2]="Movie03"
// movies[3]="Movie04"
// movies[4]="Movie05"

// movies.splice(2,0,"AddNewMovie")

// console.log(movies.length)
// console.log(movies)

//STEP 4
// Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
// Now, use the delete operator to remove the first movie in the array. 
// Use the console to display the contents of the array.

// let movies = []
// movies[0]="Movie01"
// movies[1]="Movie02"
// movies[2]="Movie03"
// movies[3]="Movie04"
// movies[4]="Movie05"

// delete movies[0]
// console.log(movies)

//STEP 5
// Declare an array called movies using literal notation. 
// Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
// Now, use a for/in loop to iterate through the array and display each movie within the console window.

// let movies = []
// movies[0]="Movie01"
// movies[1]="Movie02"
// movies[2]="Movie03"
// movies[3]="Movie04"
// movies[4]="Movie05"
// movies[5]="Movie06"
// movies[6]="Movie07"

// for (let i in movies) {
//     console.log(movies[i])
// }

//STEP 6
// Copy the code from step 5. 
// Now, use a for/of loop to iterate through the array and display each movie within the console window.

// let movies = []
// movies[0]="Movie01"
// movies[1]="Movie02"
// movies[2]="Movie03"
// movies[3]="Movie04"
// movies[4]="Movie05"
// movies[5]="Movie06"
// movies[6]="Movie07"

// for (let i of movies) {
//     console.log(i)
// }

//STEP 7
// Copy the code from step 5. 
// Using the for/of loop to iterate through the array, 
// display each movie within the console window in a sorted view.

// let movies = []
// movies[0]="bMovie01"
// movies[1]="aMovie02"
// movies[2]="dMovie03"
// movies[3]="cMovie04"
// movies[4]="eMovie05"
// movies[5]="gMovie06"
// movies[6]="fMovie07"

// movies.sort()

// for (let i of movies) {
//     console.log(i)
// }

//STEP 8
// Copy the code from step 5. 
// Under the existing array, create a new array called leastFavMovies. 
// Populate the array with the 3 movies that you regret watching. 
// Display both arrays within the console window so that it’s formatted to look like this 
// (note the spacing, you must include that too):

// let favmovies = []
// favmovies[0]="Movie01"
// favmovies[1]="Movie02"
// favmovies[2]="Movie03"
// favmovies[3]="Movie04"
// favmovies[4]="Movie05"
// favmovies[5]="Movie06"
// favmovies[6]="Movie07"

// console.log("Movies I like:")
// console.log("")
// for (let i of favmovies) {
//     console.log(i)
// }
// console.log("")

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = "Movie14"
// leastFavMovies[1] = "Movie16"
// leastFavMovies[2] = "Movie12"

// console.log("Movies I regret watching:")
// console.log("")
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log("")

//STEP 9
//Copy the code from step 8. 
// Now, use the concat() method to merge the two arrays together into a single array called movies. 
// Use the console window to display the list in reverse sorted
// let favmovies = []
// favmovies[0]="Movie01"
// favmovies[1]="Movie02"
// favmovies[2]="Movie03"
// favmovies[3]="Movie04"
// favmovies[4]="Movie05"
// favmovies[5]="Movie06"
// favmovies[6]="Movie07"

// console.log("Movies I like:")
// console.log("")
// for (let i of favmovies) {
//     console.log(i)
// }
// console.log("")

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = "Movie14"
// leastFavMovies[1] = "Movie16"
// leastFavMovies[2] = "Movie12"

// console.log("Movies I regret watching:")
// console.log("")
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log("")

// let movies = favmovies.concat(leastFavMovies)
// movies.reverse()
// for (let i of movies) {
//     console.log(i)
// }

//STEP 10
// Copy the code from step 9. 
// Use an array function to return just the last item in the array and display it within the console window.

// let favmovies = []
// favmovies[0]="Movie01"
// favmovies[1]="Movie02"
// favmovies[2]="Movie03"
// favmovies[3]="Movie04"
// favmovies[4]="Movie05"
// favmovies[5]="Movie06"
// favmovies[6]="Movie07"

// console.log("Movies I like:")
// console.log("")
// for (let i of favmovies) {
//     console.log(i)
// }
// console.log("")

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = "Movie14"
// leastFavMovies[1] = "Movie16"
// leastFavMovies[2] = "Movie12"

// console.log("Movies I regret watching:")
// console.log("")
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log("")

// let movies = favmovies.concat(leastFavMovies)
// movies.reverse()
// for (let i of movies) {
//     console.log(i)
// }

// console.log(movies.pop())

//STEP 11
// Copy the code from step 10. Remove the previous method and 
// this time use a method to return just the first item in the array and display it within the console window.
// let favmovies = []
// favmovies[0]="fMovie01"
// favmovies[1]="fMovie02"
// favmovies[2]="fMovie03"
// favmovies[3]="fMovie04"
// favmovies[4]="fMovie05"
// favmovies[5]="fMovie06"
// favmovies[6]="fMovie07"

// console.log("Movies I like:")
// console.log("")
// for (let i of favmovies) {
//     console.log(i)
// }
// console.log("")

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = "lMovie14"
// leastFavMovies[1] = "lMovie16"
// leastFavMovies[2] = "lMovie12"

// console.log("Movies I regret watching:")
// console.log("")
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log("")

// let movies = favmovies.concat(leastFavMovies)
// movies.reverse()
// for (let i of movies) {
//     console.log(i)
// }

// console.log(movies.shift())

//STEP 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. 
// Then, using those indices, programmatically add movies that you do like.
// let favmovies = []
// favmovies[0]="fMovie01"
// favmovies[1]="fMovie02"
// favmovies[2]="fMovie03"
// favmovies[3]="fMovie04"
// favmovies[4]="fMovie05"
// favmovies[5]="fMovie06"
// favmovies[6]="fMovie07"

// console.log("Movies I like:")
// console.log("")
// for (let i of favmovies) {
//     console.log(i)
// }
// console.log("")

// let leastFavMovies = new Array(3)
// leastFavMovies[0] = "lMovie14"
// leastFavMovies[1] = "lMovie16"
// leastFavMovies[2] = "lMovie12"

// console.log("Movies I regret watching:")
// console.log("")
// for (let i of leastFavMovies) {
//     console.log(i)
// }
// console.log("")

// let movies = favmovies.concat(leastFavMovies)
// for (let i of movies) {
//     console.log(i)
// }

// let idxLeastLikeMovie1 = movies.indexOf('lMovie14')
// movies[idxLeastLikeMovie1] = "fMovie14"

// let idxLeastLikeMovie2 = movies.indexOf('lMovie16')
// movies[idxLeastLikeMovie2] = "fMovie16"

// let idxLeastLikeMovie3 = movies.indexOf('lMovie12')
// movies[idxLeastLikeMovie3] = "fMovie12"

// console.log("Movies I like(New):")
// console.log("")
// for (let i of movies) {
//     console.log(i)
// }
// console.log("")

//STEP 13
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
// The array should look something like this:
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. 
// You must use the filter() method and you’ll need to filter out the names by their primitive data type.

// let favMovies = [["fMovie01",5], ["fMovie02",4], ["fMovie03",3], ["fMovie04",2], ["fMovie05",1]]
// favMovies.forEach((item1) => {
//     let movieNames = item1.filter((item2) => {
//         return typeof item2 === 'string'
//     })    
// 	console.log(movieNames)
// })

//STEP 14
// Create a string array called employees using literal notation and 
// populate the array with several employee names. 
// Then, create an anonymous function called showEmployee. 
// The function should accept a parameter.
//  Call this function, passing in the employees array into the function as a parameter. 
// Make sure to display the result in the console window. 
// Within the function, 
// loop through the passed in array and display the result so that it looks exactly like this in the console window:

// Employees:

// ZAK
// JESSICA
// MARK
// FRED
// SALLY

// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']
// const showEmployee = function(employees) {
//     for (let i of employees) {
//         console.log(i.toUpperCase())
//     }
// };

// showEmployee(employees)

//STEP 15
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]

// let datArray = [58, '', 'abcd', true, null, false, 0]
// let fltArray = datArray.filter((item) => {
// 	return item !== false && item !== null && item !== 0 && item !== ''
// })

// console.log(fltArray)
// Write a JavaScript function to get a random item from an array. 
// So if I create a numeric array with 10 numbers and then pass that array into my function, 
// the function should randomly return one of those numbers.

// let numArray = [23,54,67,28,87,90,234,234,56,55]
// const randArray = function(numArray) {
//     let idx = Math.floor(Math.random() * numArray.length);
//     return numArray[idx]
// };

// console.log(randArray(numArray))

//STEP 16
// Write a JavaScript function to get the largest number from a numeric array.
// let numArray = [23,54,67,28,87,90,234,234,56,55]
// const maxinArray = function(numArray) {
//     let maxv = -999999999999
//     for (let i of numArray) {
//         if( i > maxv ){
//             maxv = i
//         }
//     }
//     return maxv
// };

//console.log(Math.max(...numArray))
// console.log(maxinArray(numArray))

//STEP 17