var apiKey = "c3679095f19f4a9dadfa02f59f24f360";
startDate = new Date();
endDate = new Date();
endDate.setDate(endDate.getDate() -1);
startDate.setDate(startDate.getDate()-7);

function weather () {
    var city = cityValue ();
    var action = actionName();
    get(city, startDate, endDate, apiKey, action);
}

function actionName() {
    var selectAction = document.querySelector("#action");
    var action = selectAction.value;
    return action;
}

function cityValue(){
    var selectCity = document.querySelector("#cityName");
    var cityValue = selectCity.value;
    return cityValue;
};

function get (city, startDate, endDate, apiKey, action) {
    if (action == "current") {
        var startDate = new Date().toJSON().slice(0,10);
        var endDate = new Date ();
        endDate.setDate(endDate.getDate() + 1);
        endDate = endDate.toJSON().slice(0,10);       
        getJson(city, startDate, endDate, apiKey, action);       
    }
    else if (action == "weekly_min" || action == "weekly_max" || action == "weekly_avg") {
        getJson(city, startDate.toJSON().slice(0,10), endDate.toJSON().slice(0,10), apiKey, action);  
    }
    else {
        return alert("Odaberi grad i prikaz temperature")
    }
}

function getJson (city, startDate, endDate, apiKey, action) {
    const request = new XMLHttpRequest();
    url = "https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&city=" + city +"&start_date=" + startDate + "&end_date="+ endDate + "&key=" + apiKey;
    request.open("GET", url);
    request.send();
    request.onload = () => {
    if (request.status ===200) {
        if (action == "current") {
            var response = JSON.parse(request.response);
            var current = response.data[0].temp;
            document.querySelector("#content").value = current;
        }
        else if (action == "weekly_min") {
            var response = JSON.parse(request.response);
            var min_num = 500;
            var res = response.data;
            for (var k in res) {
                for (var i in res[k]) {
                    if (res[k].min_temp < min_num) {
                        min_num = res[k].min_temp;
                    }
                }
            }
            document.querySelector("#content").value = min_num;
        }
        else if (action == "weekly_max") {
            var response = JSON.parse(request.response);
            var max_num = -273;
            var res = response.data;
            for (var k in res) {
                for (var i in res[k]) {
                    if (res[k].max_temp > max_num) {
                        max_num = res[k].max_temp;
                    }
                }
            }
            document.querySelector("#content").value = max_num;
        }
        else if (action = "weekly_avg") {
            var response = JSON.parse(request.response);
            var avg = 0;
            var res = response.data;
            for (var k in res) {
                avg = avg + res[k].temp;
            }
                var avg_temp = (avg/7).toFixed(2);
                document.querySelector("#content").value = avg_temp;
        }
            return response
        }
        else {
            console.log("error ${request.status}")
        }
    };
};




