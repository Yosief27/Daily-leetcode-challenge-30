// Define the API URL
const apiUrl ="https://dummy.restapiexample.com/api/v1/employees" ;

// Make a GET request
function sync (url){
    console.log("inside");
let x;
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    return data.data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
return x
}

console.log( awati apiCall(apiUrl))