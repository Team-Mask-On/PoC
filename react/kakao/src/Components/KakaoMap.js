import { Map, CustomOverlay } from 'react-kakao-maps'
import { renderToString } from 'react-dom/server'
import React from 'react';
import SensorOverlay from './SensorOverlay';

const { kakao } = window;

const place1 = renderToString(<SensorOverlay code={1} name={"스타벅스 충남대정문점 1"} addr={"대전광역시 유성구 궁동 460-12"}></SensorOverlay>)
const place2 = renderToString(<SensorOverlay code={1} name={"우리집"} addr={"대전광역시 유성구 궁동 460-12"}></SensorOverlay>)

class KakaoMap extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Map options={{
                    center: new kakao.maps.LatLng(36.360649863349586, 127.34453802638934),
                    mapTypeId: kakao.maps.MapTypeId.ROADMAP,
                    maxLevel: 5,
                    minLevel: 2
                }}>
                    <CustomOverlay 
                        options={{
                            position: new kakao.maps.LatLng(36.360649863349586, 127.34453802638934),
                            zIndex: 9999
                        }}
                        visible={true}
                        children={<div dangerouslySetInnerHTML={{__html: place1}}></div>}
                    ></CustomOverlay>
                    <CustomOverlay 
                        options={{
                            position: new kakao.maps.LatLng(36.361297440075354, 127.34126868474307),
                            zIndex: 9999
                        }}
                        visible={true}
                        children={<div dangerouslySetInnerHTML={{__html: place2}}></div>}
                    ></CustomOverlay>
                </Map>
            </React.Fragment>
        );
    }
}

export default KakaoMap;