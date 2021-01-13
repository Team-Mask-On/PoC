import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, HorizontalGridLines, DiscreteColorLegend } from 'react-vis';

class MaskChart extends React.Component {
    render() {
        const maskedData = this.props.masked;
        const unmaskedData = this.props.unmasked;
        const charWidth = this.props.width;
        const chartHeight = 500;
        const gridColor = '#DFE2E6'
        const maskedColor = "#4CAF50"
        const unmaskedColor = "#f44336"

        return (
            <XYPlot
                stackBy="y"
                xType="ordinal" 
                height={chartHeight} 
                width={charWidth}
            >
                <XAxis />
                <YAxis />
                <HorizontalGridLines style={{stroke: gridColor}} />
                <VerticalBarSeries
                    data={maskedData}
                    color={maskedColor}
                />
                <VerticalBarSeries
                    data={unmaskedData}
                    color={unmaskedColor}
                />
                <DiscreteColorLegend
                    style={{position: 'absolute', right: '50px', top: '10px'}}
                    orientation="horizontal"
                    items={
                        [
                            {
                                title: ' 마스크 착용',
                                color: maskedColor,
                            },
                            {
                                title: ' 마스크 미착용',
                                color: unmaskedColor,
                            }
                        ]
                    }
                />
            </XYPlot>
        );
    }
}
export default MaskChart;