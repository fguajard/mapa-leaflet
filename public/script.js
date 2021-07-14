const mymap = L.map('mapid').setView([-35.67, -71.54], 10);

const token = "pk.eyJ1IjoiZWxwb2xtb3JyaXMiLCJhIjoiY2tyMjh3bThjMTVhbDJwcnhvcDQyemw1YSJ9.y58dsX7Y0ybmNGef32dTDA"


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: token
}).addTo(mymap);

const markersArray = []
const miPlaces = []

const randomPlace = ()=>{    
    const coordenada = [Math.random() * (100 - -100) + -100,Math.random() * (100 - -100) + -100]
    return coordenada
}

const displayRandomPlace = ()=>{
    $("#randomPlaceBtn").on("click",()=>{
        const place = randomPlace()
        mymap.setView(place, 8)
        const marker = L.marker(place).addTo(mymap)
        const {lat,lng} = marker._latlng
        marker.bindPopup(`${lat}-${lng}`).openPopup();
        markersArray.push(marker)        
    })    
}

const addMarker = ()=>{
   mymap.on("dblclick",(e)=>{
        const {lat,lng} = e.latlng
        const marker = L.marker([lat,lng]).addTo(mymap)
        marker.bindPopup(`
        ${lat}-${lng}
        <button class="btn btn-primary" data-buttonPop >Guardar</button>        
        `).openPopup();
        markersArray.push(marker)
   })   
}

const saveMiPlaces = ()=>{
    const bottonsPopUp = document.querySelectorAll("[data-buttonPop]")
    bottonsPopUp.forEach(b => {
        b.addEventListener("click", (e) => {
           alert()
        })
      })
}


(()=>{
    displayRandomPlace()
    addMarker()
    saveMiPlaces()
})()

