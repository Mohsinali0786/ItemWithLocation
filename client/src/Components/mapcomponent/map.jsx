import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import useGeolocation from "react-hook-geolocation";
import { get_lat_long } from '../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
const containerStyle = {
    width: '400px',
    height: '400px'
};

function MyComponent() {
    const dispatch = useDispatch()
    const [activeMarker, setActiveMarker] = useState(null);

    const state = useSelector((state) => state)
    console.log('state', state)
    const geolocation = useGeolocation();
    console.log('geolocation.longitude', geolocation.longitude, geolocation.latitude)
    const [center, setCenter] = useState({
        lat: Number(geolocation.latitude),
        lng: Number(geolocation.longitude)
    })
    const popupg = () => {

    }

    useEffect(() => {
        if (geolocation !== null) {
            setCenter({
                lat: Number(geolocation.latitude),
                lng: Number(geolocation.longitude)
            })
            dispatch(get_lat_long(state.itemReducer.latandlong))
            // get_lat_long(center)

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
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>

            <Marker onClick={() => handleActiveMarker(0)}position={{ lat: Number(geolocation.latitude), lng: Number(geolocation.longitude) }} >
                {activeMarker===0 /*<== add id here */? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div>Hello</div>
                    </InfoWindow>
                ) : null}


            </Marker>
            {/* <Marker position={{ lng: 67.0583857 ,lat:24.887913  }} /> */}
        </GoogleMap>
    ) :
        <></>
}

export default React.memo(MyComponent)