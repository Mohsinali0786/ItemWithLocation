import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import useGeolocation from "react-hook-geolocation";
import { get_lat_long } from '../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
const containerStyle = {
    width: '95vmax',
    height: '70vh'
};

function MyComponent() {
    const dispatch = useDispatch()
    const [activeMarker, setActiveMarker] = useState(null);

    const state = useSelector((state) => state)
    console.log('state', state.itemReducer?.allItems)
    const allItems = state.itemReducer?.allItems
    const geolocation = useGeolocation();
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
            dispatch(get_lat_long(center))
            // get_lat_long(center)

        }

    }, [geolocation])

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',

        /*AIzaSyDWfTmN5NTS47hRPH-nAMmCzxsvD6tManY*/
        googleMapsApiKey: "AIzaSyACoVaIxAsAXXY-V6X1lco9ciituLSuhO8"
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
        console.log('marker', marker)
        let filterData = allItems.filter((val) => val?._id == marker)
        console.log('filterData', filterData[0]._id)
        setActiveMarker(filterData[0]._id);
    };

    return isLoaded ? (
        <div className='googlemapMainDiv'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                className='mymapcss'
            >
                <></>
                {
                    allItems?.map((v) => {
                        console.log('************', { lat: v.latitude, lng: v.longitude })
                        return (
                            <>
                                {
                                    allItems?.map((v, i) => {
                                        console.log('v', v._id)
                                        console.log('activeMarker', activeMarker)

                                        return (
                                            <Marker onClick={() => handleActiveMarker(v?._id)} position={{ lat: v.latitude, lng: v.longitude }} >
                                                
                                                {activeMarker === v?._id /*<== add id here */ ? (
                                                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                                        <div>
                                                            <img style={{ width: '50px' }} src={v?.image} />
                                                            <p>{v?.description}</p>
                                                        </div>
                                                    </InfoWindow>
                                                ) : null}
                                            </Marker>

                                        )
                                    })
                                }
                            </>
                        )
                    })

                }
            </GoogleMap>

        </div>

    ) :
        <></>
}

export default React.memo(MyComponent)