import { CustomOverlay } from 'react-kakao-maps'
import { renderToString } from 'react-dom/server'
import React from 'react';
import SensorDetail from './SensorDetail';

const { kakao } = window;

const Sensor = ({ sensorInfo }) => {
    return(
        <CustomOverlay 
            options={{
                position: new kakao.maps.LatLng(sensorInfo.lat, sensorInfo.lng),
                zIndex: 9999
            }}
            visible={true}
            children={<div onClick={() => alert("현재인원 : " + sensorInfo.curCount)} dangerouslySetInnerHTML={{__html: renderToString(<SensorDetail sensorInfo={sensorInfo}></SensorDetail>)}}></div>}
        ></CustomOverlay>
    );
}

export default Sensor;