import { Map } from 'react-kakao-maps'
import React from 'react';
import Sensor from './Sensor';

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
                <Sensor sensorInfo={{
                    lat: 36.360649863349586,
                    lng: 127.34453802638934,
                    id: 1,
                    name: '스타벅스',
                    addr: '궁동 460-12',
                    maxCount: 30,
                    curCount: 30,
                    maskCount: 30
                }}></Sensor>
                <Sensor sensorInfo={{
                    lat: 36.36155681655039,
                    lng: 127.34385159304685,
                    id: 1,
                    name: '투썸플레이스',
                    addr: '궁동 460-12',
                    maxCount: 30,
                    curCount: 19,
                    maskCount: 30
                }}></Sensor>
                <Sensor sensorInfo={{
                    lat: 36.36187576302508, 
                    lng: 127.34414005232662,
                    id: 1,
                    name: '이디야',
                    addr: '궁동 460-12',
                    maxCount: 30,
                    curCount: 9,
                    maskCount: 30
                }}></Sensor>
            </Map>
        </React.Fragment>
    );
}

export default KakaoMap;