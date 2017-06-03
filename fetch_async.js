// "Fetch asynchronously data from an API".
// Your task is to write a script/app which gathers data from two endpoints asynchronously and merges the response later on.
// For example you could use these two endpoints:
// http://jsonplaceholder.typicode.com/users/1 to obtain a user's data
// http://jsonplaceholder.typicode.com/posts?userId=1 to obtain all comments written by that user

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://jsonplaceholder.typicode.com/users/1", true);
xhr.onload = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        } 
    else {
        console.error(xhr.statusText);
    }
};
xhr.onerror = function (e) {
      console.error(xhr.statusText);
};
xhr.send(null);
