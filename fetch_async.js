// "Fetch asynchronously data from an API".
// Your task is to write a script/app which gathers data from two endpoints asynchronously and merges the response later on.
// For example you could use these two endpoints:
// http://jsonplaceholder.typicode.com/users/1 to obtain a user's data
// http://jsonplaceholder.typicode.com/posts?userId=1 to obtain all comments written by that user

function getRequest(url){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            } 
            else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function (e) {
            reject(xhr.statusText);
        };
        xhr.send(null);
    });
}

const url1 = 'http://jsonplaceholder.typicode.com/users/1';
const url2 = 'http://jsonplaceholder.typicode.com/posts?userId=1';

var user = getRequest(url1);
var comments = getRequest(url2);

Promise.all([user, comments])
.then(data => { 
    var JsonData = JSON.parse(data[0]);
    JsonData.comments = JSON.parse(data[1]);
    console.log(JsonData);
})
.catch(e => {
    console.error('There was an error!', e);
});
