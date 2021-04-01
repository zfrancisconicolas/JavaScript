const url = require('url');

const newUrl = new URL('https://test.com/hello.html?phone=11111111?status=active');

console.log(newUrl.href);
console.log(newUrl.toString());
console.log(newUrl.hostname);

//path
console.log(newUrl.pathname);

//query
console.log(newUrl.search);

//search params
console.log(newUrl.searchParams);

//add param
newUrl.searchParams.append('id', '100');
console.log(newUrl.searchParams);
