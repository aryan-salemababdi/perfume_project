import DashboardPage from '@/components/Molecule/DashboardPage/DashboardPage';
import React from "react";


const Dashboard = async () => {

    const res = await fetch(`${process.env.BASE_URL}/products`, {
        cache: "no-store"
    });

    const data = await res.json();


    return (
        <>
            <DashboardPage data={data} />
        </>
    )
}

export default Dashboard;