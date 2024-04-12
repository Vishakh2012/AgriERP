export interface Product {
    itemCode: string;
    itemName: string;
    HSN: string;
    SGST: string;
    CGST: string;
    IGST: string;
    rate: string;
    discount: string;
  }
  
  const productData: Product[] = [
    {
      itemCode: '001',
      itemName: 'Product 1',
      HSN: '12345',
      SGST: '5',
      CGST: '5',
      IGST: '0',
      rate: '100',
      discount: '10',
    },
    {
      itemCode: '002',
      itemName: 'Product 2',
      HSN: '67890',
      SGST: '7.5',
      CGST: '7.5',
      IGST: '0',
      rate: '150',
      discount: '15',
    },
  ];
  
  export default productData;
  