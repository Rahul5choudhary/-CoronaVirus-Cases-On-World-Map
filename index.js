function getData()
{
    console.log("updating data on 2 sec");
    url="https://www.trackcorona.live/api/countries";
    fetch(url).then((response)=>{
        return response.json();
    }).then(
        (res)=>{
        // console.log(res);
      
        res.data.forEach(element => {
            // console.log(element.location);
            // console.log(element.latitude);

let longitude=element.longitude;
let latitude=element.latitude;

let cases=element.confirmed;
cases=cases/1000;
console.log("yha");
console.log(cases);

if(cases>255)
{
    color="rgb(255,0,0)";
}
else{
    color=`rgb(${cases},0,0)`;
}
            var marker = new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
                 
        });
    
        
    })

}
getData();
let interval=20000;
setInterval(getData,interval)
// console.log(data.size());