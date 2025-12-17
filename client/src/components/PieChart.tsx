import {useEffect, useRef} from 'react'
import { Chart, ArcElement, Tooltip, Legend}from 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);


interface PieChartProps {
    data:{
        processed: {spendAvg: number}[];
        };
    }


const PieChart: React.FC<PieChartProps> = ({data}) => {
    
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);
    
    const data00 = data.data.processed[0].spendAvg
    const data01 = data.data.processed[1].spendAvg
    const data02 = data.data.processed[2].spendAvg
    const data03 = data.data.processed[3].spendAvg
    const data04 = data.data.processed[4].spendAvg
    const data05 = data.data.processed[5].spendAvg
    const data06 = data.data.processed[6].spendAvg
    const data07 = data.data.processed[7].spendAvg
    const data08 = data.data.processed[8].spendAvg
    const data09 = data.data.processed[9].spendAvg


    useEffect(() => {

   if(!canvasRef.current) return;

   if(!data?.data?.processed || data.data.processed.length === 0) return;
    console.log("useEffect");

    const ctx = canvasRef.current?.getContext("2d");
    if(!ctx) return;

    if(chartRef.current) chartRef.current.destroy();

    const chartData = data.data.processed.map(item => item.spendAvg);


    chartRef.current = new Chart(ctx, {
        type:"pie",
        data: {
            labels: [
                "M under 25", //index 5
                "W under 25", //index 0
                "M 25-34",    //index 6
                "W 25-34",    //index 1
                "M 35-44",    //index 7
                "W 35-44",    //index 2
                "M 45-54",    //index 8
                "W 45-54",    //index 3
                "M 55+",      //index 9
                "W 55+",      //index 4
            ],
            datasets: [
                {
                    data:[
                        data00,
                        data01,
                        data02,
                        data03,
                        data04,
                        data05,
                        data06,
                        data07,
                        data08,
                        data09
                        ],
                    backgroundColor: [
                        "#ff6384",
                        "#36a2eb",
                        "#ffcd56",
                        "#4bc0c0",
                        "#9966ff",
                        "#ff9f40",
                        "#c9cbcf",
                        "#8dd1e1",
                        "#d4a6c8",
                        "#a4de6c"
                        ], 
                    },
                ],
            },
            options:{    
                responsive: true,
                plugins: { legends: {position: "bottom"} },    
            },
        });
        return () => chartRef.current?.destroy();
    }, [data]);

    if(!data?.data?.processed || data.data.processed.length===0 ){
        return(
            <p className = "text-center text-grey-500 " >Loading...</p>
        )
    }

    return (
        <div className="container h-96  max-w-lg mx-auto p-6 bg-stone-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-stone-700 text-center mb-4">
                Traffic Pie Chart
            </h2>
            <canvas ref={canvasRef} width={500} height={500} />
        </div>
    );
};

export default PieChart;
