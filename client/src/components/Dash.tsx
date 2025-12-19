import {useEffect, useState} from 'react';
import DashContainer from './DashContainer';
import PieChart from "./PieChart";
import BarChart from "./BarChart";

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
                <div>
                    <div className="w-250 m-5">
                        <BarChart
                            data={data}
                            title="Sales per State"
                            selection="spendTotal"
                        />
                    </div>
                    <div className="bg-blue-600 flex flex-row justify-between">
                        <div className="m-5">
                            <PieChart
                                data={data}
                                title="Total sales"
                                selection="count"
                            />
                        </div>
                        <div className="m-5">
                            <PieChart
                                data={data}
                                title="Total spend"
                                selection="spendTotal"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

