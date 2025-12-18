import {useEffect, useState} from 'react';
import DashContainer from './DashContainer';
import PieChart from "./PieChart";


type DashProps = {
    data: any;
};


export default function Dash ({data}: DashProps){
	
let count = ""
let totalSpend= ""
let avgSpend=""
    return (
        <>
            <div className = "flex flex-row bg-red-500 justify-content-center">
                <div className = "flex justify-center bg-green-400 w-150">
                    <DashContainer data={data}/> 
                </div>
                <div className="bg-blue-600 w-250">
                    <PieChart
                        data={data}
                        title="Total sales"
                        selection="count"
                    />
                </div>
                <div className="bg-blue-600 w-250">
                    <PieChart
                        data={data}
                        title="Total spend"
                        selection="spendTotal"
                    />
                </div>
                <div className="bg-blue-600 w-250">
                    <PieChart
                        data={data}
                        title="Average spend"
                        selection="spendAvg"
                    />
                </div>
                
            </div>
        </>
    );
};

