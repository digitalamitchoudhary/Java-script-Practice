 
// let userInput = prompt("Enter a date (YYYY-MM-DD):");

   
//   let date = new Date(userInput);
  

//     console.log(userInput)
//     document.getElementById("dday").innerText = "Day" +" "+ date.getDay();
//     document.getElementById("Month").innerText = "Month" +" "+ date.getMonth() + 1;
//     document.getElementById("Year").innerText = "Year" +" "+ date.getFullYear();
  

  
    // Prompt user to enter a date
let userInput = prompt("Enter a date (YYYY-MM-DD):");

if (userInput) {
  // Create a new Date object from the user input
  let date = new Date(userInput);

  // Check if the date is valid
  if (!isNaN(date.getTime())) {
    // Extract day, month, and year
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-indexed
    let year = date.getFullYear();

    // Output the results
    console.log(`Day: ${day}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
        // document.getElementById("Month").innerText = "Month" +" "+ month;
        document.getElementById("Month").innerText = `Month: ${date.getMonth() + 1}`;
        

  } else {
    console.log("Invalid date format. Please enter a date in YYYY-MM-DD format.");
  }
} else {
  console.log("No date entered.");
}
