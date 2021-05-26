const map = L.map('mapid').setView([-8.7529181, -63.8682635], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: '/public/icons/icon-tree-map.svg',
    iconSize: [50, 50],
    popupAnchor: [0, -15]
})

const slideShow = '<img src="https://source.unsplash.com/collection/1728245" alt="Imagem" style="width: 100%; height: 150px;">'
const title = '<h1 class="popupTitle">Adopt a Tree</h1>'
const content = '<p class="popupContent">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</p>'
const footer = '<p class="popupFooter">Projeto realizado dia:<span class="popupFooterSpan">21/05/2021</span></p>'

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 400,
    minHeight: 200,
}).setContent(`${slideShow} ${title} ${content} ${footer}`)

L.marker([-8.7529181, -63.8682635], { icon }).addTo(map).bindPopup(popup)