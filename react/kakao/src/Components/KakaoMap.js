import { Map } from 'react-kakao-maps'
import React from 'react';
import Sensor from './Sensor';
import sensorData from '../Dummies/sensors.json';

const { kakao } = window;

const KakaoMap = () => {
    return(
        <React.Fragment>
            <Map options={{
                center: new kakao.maps.LatLng(36.360649863349586, 127.34453802638934),
                mapTypeId: kakao.maps.MapTypeId.ROADMAP,
                maxLevel: 5,
                minLevel: 2
            }}>
                {sensorData.data.sensors.map(sensor => {
                    return <Sensor 
                        key={sensor.id}
                        sensorInfo={{
                            lat: sensor.lat,
                            lng: sensor.lng,
                            name: sensor.name,
                            desc: sensor.desc,
                            addr: sensor.addr,
                            maxCount: sensor.maxCount
                        }}
                    ></Sensor>
                })}
            </Map>
        </React.Fragment>
    );
}

export default KakaoMap;