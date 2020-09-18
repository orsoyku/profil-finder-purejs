const fetch = require("node-fetch");
class Request {
    get(url) {
        fetch(url).then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/comments");