const map = L.map('mapid').setView([-8.7529181,-63.8682635], 15)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

L.marker([-8.7529181,-63.8682635]).addTo(map).bindPopup('Faculdade Sapeins - Adopt a Tree').openPopup();