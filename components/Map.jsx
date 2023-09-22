import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, useMap, AttributionControl, ZoomControl} from 'react-leaflet';
import {Icon} from "leaflet";
import {divIcon} from "leaflet/src/layer";
import ReactDOMServer from "react-dom/server";
import {FaCircle} from "react-icons/fa";

export function ChangeView({ coords, zoom }) {
    const map = useMap();
    map.setView(coords, zoom);
    return null;
}

export default function Map(props) {
    const [geoData, setGeoData] = useState({ lat: props.latitude, lng: props.longitude });

    const center = [geoData.lat, geoData.lng];

    return (
        <MapContainer className={props.className} center={center} zoom={props.zoom} attributionControl={false}>
            <TileLayer
                attribution='<a href="https://leafletjs.com">Leaflet</a>'
                url="https://leafletjs.com/"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AttributionControl position="bottomright" prefix="" />
            {geoData.lat && geoData.lng && (
                <Marker position={[geoData.lat, geoData.lng]} icon={divIcon({
                    className: 'location-icon',
                    iconAnchor: [props.markerSize/2, props.markerSize],
                    html: ReactDOMServer.renderToString(<FaCircle size={props.markerSize} color='#3535dd' />)
                })}/>
            )}
            <ChangeView coords={center} zoom={props.zoom} />
        </MapContainer>
    );
}