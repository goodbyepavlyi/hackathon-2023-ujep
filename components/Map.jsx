import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, AttributionControl, Popup } from 'react-leaflet';
import { divIcon } from "leaflet/src/layer";
import ReactDOMServer from "react-dom/server";
import { FaCircle } from "react-icons/fa";
import dayjs from 'dayjs';

export function ChangeView({ coords, zoom }) {
    const map = useMap();
    map.setView(coords, zoom);
    return null;
}

export default async function Map(props) {    
    const [geoData, setGeoData] = useState({ lat: props.latitude, lng: props.longitude });
    const center = [geoData.lat, geoData.lng];

    return (
        <MapContainer className={props.className} center={center} zoom={2.5} attributionControl={false} noWrap={true} minZoom={2.5} maxBounds={[[-90,-180], [90,180]]}>
            <TileLayer
                attribution={'<a href="https://leafletjs.com">Leaflet</a>'}
                url={"https://leafletjs.com/"}
                noWrap={true} 
                minZoom={2}
                maxBounds={0}
            />
            <TileLayer
                attribution={'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
                url={"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"}
                ext={"png"}
                noWrap={true}
                minZoom={2}
                maxBounds={0}
            />
            <AttributionControl position="bottomright" prefix="" />
            {
                props.markers.map(data => {
                    const massColor = 1 - data.mass / 300000
                    const year = dayjs(data.year).year();
                    if(data.reclat && data.reclong && year > 2000){
                        return (
                        <Marker position={[data.reclat, data.reclong]} key={data.name} icon={divIcon({
                            className: 'location-icon',
                            iconAnchor: [props.markerSize / 2, props.markerSize],
                            iconSize: [props.markerSize, props.markerSize],
                            html: ReactDOMServer.renderToString(<FaCircle size={props.markerSize} style={data.mass > 5100 ? {filter: `brightness(${massColor >= 0 ? massColor : 0})`} : {}} color={data.mass ? `rgb(255, ${255 - (data.mass / 20 < 255 ? data.mass / 20 : 255)}, 0)` : "rgb(255, 255, 0)"} />)
                        })}>
                            <Popup>
                                <h1 className={"font-extrabold"}>{data.name}</h1>
                                <hr/>
                                <span>{data.mass ? `Hmotnost: ${data.mass.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")} g` : "Neznámá hmotnost"}</span><br/>
                                <span>{data.year ? `Nalezen v roce ${year}` : "Neznámý rok nálezu"}</span>
                            </Popup>
                        </Marker>
                        )
                    }
                })
            }
            {
                console.log()
            }
            <ChangeView coords={center} zoom={props.zoom} />
        </MapContainer>
    );
}