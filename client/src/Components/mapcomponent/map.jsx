import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import useGeolocation from "react-hook-geolocation";
const containerStyle = {
    width: '400px',
    height: '400px'
};

function MyComponent() {
    const geolocation = useGeolocation();
    console.log('geolocation.longitude', geolocation.longitude, geolocation.latitude)
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0
    })
    useEffect(() => {
        if (geolocation !== null) {
            setCenter({
                lat: Number(geolocation.latitude),
                lng: Number(geolocation.longitude)
            })
        }

    }, [geolocation])
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDWfTmN5NTS47hRPH-nAMmCzxsvD6tManY "
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(async function callback(map) {
        // console.log('=>',center.longitude,center.latitude)
        const bounds = await new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
            <Marker position={{ lat: Number(geolocation.latitude), lng: Number(geolocation.longitude) }} />
        </GoogleMap>
    ) :
        <></>
}

export default React.memo(MyComponent)