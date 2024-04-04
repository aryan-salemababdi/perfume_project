import { NextPage } from 'next';
import React from 'react';
import DashboardComponent from '@/components/Atom/DashboardComponent/DashboardComponent';


export interface IDashboard {
    data: {
        id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number
        }
    }[];
}


const DashboardPage: NextPage<IDashboard> = ({ data }) => {
    return (
        <>
            <DashboardComponent  data={data} />
        </>
    )
}

export default DashboardPage;