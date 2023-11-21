"use client"
import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 47.693,
    lng: 17.627
};

function GoogleMaps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <MarkerF position={center} />
            <></>
        </GoogleMap>
    ) : <></>
}

export default GoogleMaps