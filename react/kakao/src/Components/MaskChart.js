import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries, LabelSeries } from 'react-vis';

class MaskChart extends React.Component {
    render() {
        const maskedData = this.props.masked;
        const unmaskedData = this.props.unmasked;
        const chartWidth = 400;
        const chartHeight = 400;
        const chartDomain = [0, chartHeight];
        return (
            <XYPlot 
                stackBy="y"
                xType="ordinal" 
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={maskedData}
                    color="#4CAF50"
                />
                <VerticalBarSeries
                    data={unmaskedData}
                    color="#f44336"
                />
                <LabelSeries
                    data={unmaskedData.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
        );
    }
}
export default MaskChart;