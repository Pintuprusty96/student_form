let details=JSON.parse(localStorage.getItem("data"))
    console.log(details)

    details.map(function(el){
        // console.log(el)
        let tr = document.createElement("tr");

        let td = document.createElement("td");
            td.innerText=el.name;
        let td2 = document.createElement("td");
            td2.innerText = el.number;

        let td3 = document.createElement("td");
            td3.innerText= el.city;
        tr.append(td,td2,td3)
        document.querySelector("table").append(tr)
    })