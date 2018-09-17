// site https://www.apixu.com/my/

// Key: 10199f87fbe341bb95b180542182108
// key=<YOUR API KEY>

// ?key=10199f87fbe341bb95b180542182108 - это означает что мы авторизировани и мы получим инфу

// Base URL: http://api.apixu.com/v1

//Current weather - 1day     /current.json
// на несколько дней         /forecast.json

// &days=7

// q=Paris - location

// http://api.apixu.com/v1/current.json?q=Paris&key=10199f87fbe341bb95b180542182108



fetch('http://api.apixu.com/v1/forecast.json?q=Kiev&days=7&key=10199f87fbe341bb95b180542182108')
    .then(response =>{
        if(response.ok) return response.json();

        throw new Error(`Error while fetching : ${response.statusText}`)

    }).then(data => {

    console.log(data); // location

}).catch(error =>{
    console.log('Error',error);
});

