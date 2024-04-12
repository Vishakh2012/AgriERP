interface Product {
    itemCode: string;
    itemName: string;
    HSN: string;
    SGST: string;
    CGST: string;
    IGST: string;
    rate: string;
    discount: string;
  }
  
  const getProductDetails = (itemCode: string, productData: Product[]): Product | null => {
    // Find the product with the given itemCode
    const product = productData.find(product => product.itemCode === itemCode);
    return product ? { ...product } : null;
  };
  
  export default getProductDetails;
  