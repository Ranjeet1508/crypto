import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const ChartComponent = ({ arr = [], currency, days }) => {

    const price = [];
    const date = []
    for(let i = 0; i<arr.length; i++){
        if(days==='24h'){
            date.push(new Date(arr[i][0]).toLocaleTimeString());
        }
        else{
            date.push(new Date(arr[i][0]).toLocaleDateString());
        }
        price.push(arr[i][1]);
    }
    
    const data = {
        labels: date,
        datasets: [
            {
                label: `Price in ${currency}`,
                data: price,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255,99,132,0.5)"
            },
        ]
    }


    return <Line
    options={{
        responsive: true
    }}

    data={data}
/>
        
    
}

export default ChartComponent;
