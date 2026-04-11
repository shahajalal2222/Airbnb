    
    
      const coordinates=window.coordinates;
    const map=L.map("map").setView([coordinates[1],coordinates[0]],1);

    L.tileLayer('https://api.maptiler.com/maps/streets-v4/256/{z}/{x}/{y}.png?key=eV9TWvXWxP7zi2EwDsYv',{
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);
    // console.log("this is coordinates",coordinates);
     //for set color to marker
     const redIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32]
});

    const marker=L.marker([coordinates[1],coordinates[0]],{ icon: redIcon })
.addTo(map);

map.setZoom(9);