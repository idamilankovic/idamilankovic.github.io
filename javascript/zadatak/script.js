var apiKey = "c3679095f19f4a9dadfa02f59f24f360";


function getDropdownValues () {      
    /** Funkcija vraća vrijednosti grada i akcije iz padajućih izbornika */
    var city = cityName ();
    var action = actionName();
    setDate(city, apiKey, action);
}

function actionName() {
    var selectAction = document.querySelector("#action");
    var action = selectAction.value;
    return action;
}

function cityName(){
    var selectCity = document.querySelector("#cityName");
    var city = selectCity.value;
    return city;
};

function setDate (city, apiKey, action) {
    /** Funkcija postavlja početni i konačni datum za poziv */
    if (action == "current") {
        /** Ako je odabrana akcija "current" onda je početni datum današnji, a konačni datum uvećan za 1. Na taj način se dobije poziv za današnji datum. */
        var startDate = new Date().toJSON().slice(0,10);
        var endDate = new Date ();
        endDate.setDate(endDate.getDate() + 1);
        endDate = endDate.toJSON().slice(0,10);   
        getWeatherData(city, startDate, endDate, apiKey, action);       
    }
    else {
        /** Ako je odabrana bilo koja akcija osim "current", onda je današnji datum umanjen za 7 dana kako bi se dobio početni datum i današnji datum je umanjen za jedan dan kako bi se dobio konačni datum. */
        startDate = new Date();
        endDate = new Date();
        startDate.setDate(startDate.getDate()-7);
        startDate = startDate.toJSON().slice(0,10);
        endDate.setDate(endDate.getDate() -1);
        endDate = endDate.toJSON().slice(0,10);   
        getWeatherData(city, startDate, endDate, apiKey, action);  
    }
}

function getWeatherData (city, startDate, endDate, apiKey, action) {
    /** Poziv servisa */
    const request = new XMLHttpRequest();
    url = "https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&city=" + city +"&start_date=" + startDate + "&end_date="+ endDate + "&key=" + apiKey;
    request.open("GET", url);
    request.send();
    request.onload = () => {
        /**Pristup dobivenim podacima nakon poziva */
    if (request.status === 200) {
        /** Provjera statusa requesta*/
        if (action == "current") {
            /** Iz JSON-a dobivamo trenutnu temperatuu i njenu vrijednost dodajemo elementu s id=content*/
            var response = JSON.parse(request.response);
            var current = response.data[0].temp;
            document.querySelector("#content").value = current;
        }
        else if (action == "weekly_min") {
            /** Iz JSON-a dobivamo minimalnu tjednu temperaturu i njenu vrijednost dodajemo elementu s id=content */
            var response = JSON.parse(request.response);
            var min_num = 500;
            var res = response.data;
            for (var k in res) {
                if (res[k].min_temp < min_num) {
                    min_num = res[k].min_temp;
                }
            }
            document.querySelector("#content").value = min_num;
        }
        else if (action == "weekly_max") {
            /** Iz JSON-a dobivamo maksimalnu tjednu temperaturu i njenu vrijednost dodajemo elementu s id=content */
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
            /** Iz JSON-a dobivamo dnevne temperature za zadnjih 7 dana, izračunamo prosjek i njegovu vrijednost dodajemo elementu s id=content */
            var response = JSON.parse(request.response);
            var avg = 0;
            var res = response.data;
            for (var k in res) {
                avg = avg + res[k].temp;
            }
                var avg_temp = (avg/7).toFixed(2);
                document.querySelector("#content").value = avg_temp;
        }
        }
        else {
            /**Request status nije 200 te vraća allert poruku sa statusom requesta */
            alert(`Error ${request.status}`)
        }
    };
};




