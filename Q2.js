var url = 'https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby';

function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1); // split ? to give the parameter string
    
    var parameters = queryString.split('&'); // split & to give individual parameter strings

    for(var i=0;i<parameters.length;i++)
    {
        if(parameters[i].split('=')[0] === parameter)
        {
            return parameters[i].split('=')[1]
        }
    }
}

console.log(getUrlParameterValue(url, 'utm_medium'));
console.log(getUrlParameterValue(url, 'utm_campaign'));