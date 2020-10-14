import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize:[58, 50],
    iconAnchor: [29,50],
    popupAnchor: [0, -60]
});

export default mapIcon;