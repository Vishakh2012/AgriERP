import purchaseModel from "../../models/puchaseModel/puchaseModel.mjs";
import salesModel from "../../models/salesModel/salesModel.mjs";

export default async function calculateProfitLossRevenue(req, res, next) {
  try {
    const range = req.params.range;
    if (range !== "month" && range !== "year") {
      return res.status(400).json({ message: "Invalid range specified" });
    }

    // Calculate start and end dates based on the range
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    if (range === "month") {
      startDate.setMonth(startDate.getMonth() - 1);
    } else if (range === "year") {
      startDate.setFullYear(startDate.getFullYear() - 1);
    }

    // Find purchases within the specified date range
    const purchases = await purchaseModel.find({
      fpoId: req.user.fpoId,
      purchaseDate: { $gte: startDate, $lte: currentDate },
    });

    // Find sales within the specified date range
    const sales = await salesModel.find({
      fpoId: req.user.fpoId,
      saleDate: { $gte: startDate, $lte: currentDate },
    });

    console.log("Purchases:", purchases);
    // Calculate total purchase amount
    const totalPurchaseAmount = purchases.reduce(
      (acc, purchase) =>
        acc + (purchase.totalAmount ? purchase.totalAmount : 0),
      0
    );

    // Calculate total sales amount
    const totalSalesAmount = sales.reduce(
      (acc, sale) => acc + sale.finalAmount,
      0
    );

    // Calculate profit
    const profit = totalSalesAmount - totalPurchaseAmount;

    // Create response object
    const response = {
      labels: ["Property", "Amount"],
      data: [
        ["Total Purchases", totalPurchaseAmount],
        ["Total Sales", totalSalesAmount],
        ["Profit", profit],
      ],
    };

    // Send response
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error calculating profit, loss, and revenue:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
