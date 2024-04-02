import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import sample from './productSample.json';

const TopSellingProducts = () => {
    const [productData, setProductData] = useState(sample);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/posts');
            if(response.ok){
                const jsonData = await response.json();
                setProductData(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>Top Selling Products</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Revenue</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productData.product && productData.quantity && productData.revenue && productData.product.map((product, index) => (
                        <TableRow key={product}>
                            <TableCell className="font-medium">{product}</TableCell>
                            <TableCell>{productData.quantity[index]}</TableCell>
                            <TableCell>{productData.revenue[index]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TopSellingProducts;
