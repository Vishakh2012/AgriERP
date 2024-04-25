import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import sample from './productSample.json';

const TopFarmers = () => {
    const [farmerData, setFarmerData] = useState(sample);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/posts');
            if(response.ok){
                const jsonData = await response.json();
                setFarmerData(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>Farmers with most Transactions</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Farmer</TableHead>
                        <TableHead>Transactions</TableHead>
                        <TableHead>Revenue</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {farmerData.product && farmerData.quantity && farmerData.revenue && farmerData.product.map((product, index) => (
                        <TableRow key={product}>
                            <TableCell className="font-medium">{product}</TableCell>
                            <TableCell>{farmerData.quantity[index]}</TableCell>
                            <TableCell>{farmerData.revenue[index]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TopFarmers;
