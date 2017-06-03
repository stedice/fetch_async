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
//              var JsonData = JSON.parse(xhr.responseText);
//              console.log(JsonData)
                resolve(xhr.response);
            } 
            else {
                //console.error(xhr.statusText);
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function (e) {
            //console.error(xhr.statusText);
            reject(xhr.statusText);
        };
        xhr.send(null);
    });
}

getRequest('http://jsonplaceholder.typicode.com/users/1')
.then(function (data) {
    var JsonData = JSON.parse(data);
    console.log(JsonData)})
.catch(function (e) {
    console.error('There was an error!', e);
});
