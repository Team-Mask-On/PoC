import { CustomOverlay } from 'react-kakao-maps'
import { renderToString } from 'react-dom/server'
import Autosizer from "react-virtualized-auto-sizer";
import React, { useState } from 'react';
import SensorCard from './SensorCard';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logData from '../Dummies/logs.json';
import MaskChart from './MaskChart';
import maskedData from '../Dummies/masked.json';
import unmaskedData from '../Dummies/unmasked.json';

const { kakao } = window;

const Sensor = ({ sensorInfo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isDetail, setDetail] = useState(false);

    return(
        <>
            <CustomOverlay 
                options={{
                    position: new kakao.maps.LatLng(sensorInfo.lat, sensorInfo.lng),
                    zIndex: 9999
                }}
                visible={true}
                children={<div onClick={handleShow} dangerouslySetInnerHTML={{__html: renderToString(<SensorCard sensorInfo={sensorInfo}></SensorCard>)}}>
                    
                </div>}
            ></CustomOverlay>

            <Modal 
                show={show} 
                onHide={handleClose} 
                animation={true} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>{sensorInfo.name}</h1>
                        <h6>{sensorInfo.desc}</h6>
                        <h6>{sensorInfo.addr}</h6>
                    </Modal.Title>
                </Modal.Header>
                {isDetail ? 
                    <Modal.Body>
                        <div class="container">
                            <div class="wrapper" >
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>시간</th>
                                            <th>총원</th>
                                            <th>착용</th>
                                            <th>미착용</th>
                                        </tr>
                                    </thead>
                                    <tbody>{logData.map(log => {
                                        return <tr key={log.id}>
                                            <td>{log.time}</td>
                                            <td>{log.masked + log.unmasked}</td>
                                            <td>{log.masked}</td>
                                            <td>{log.unmasked}</td>
                                        </tr>
                                    })}</tbody>
                                </table>
                            </div>
                        </div>
                        <Button onClick={() => setDetail(false)}>디테일 끄기</Button>
                    </Modal.Body> 
                    :
                    <Modal.Body>
                        <Autosizer disableHeight>{({ width }) => (
                            <MaskChart width={width} masked={maskedData} unmasked={unmaskedData}></MaskChart>
                        )}</Autosizer>
                        <Button onClick={() => setDetail(true)}>디테일 보기</Button>
                    </Modal.Body>
                }
            </Modal>
        </>
    );
}

export default Sensor;