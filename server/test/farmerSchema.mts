import mongoose from "mongoose";
import Farmer from "../db/farmerSchema/farmerSchema.mjs";

// Mock FPO model
jest.mock("../fpoSchema/fpoSchema.mjs", () => ({
  default: {
    findOne: jest.fn().mockResolvedValue({ _id: "fpo_id" }), // Mock FPO.findOne() method
  },
}));

describe("Farmer schema", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // Connect to a test database
  });

  afterAll(async () => {
    await mongoose.connection.close(); // Close database connection after tests
  });

  it("should save a farmer", async () => {
    const farmerData = {
      farmerId: "12345",
      fpoRegId: "fpo_id", // Mocked FPO ID
      name: "John Doe",
      gender: "male",
      address: {
        houseName: "123 Main St",
        district: "District",
        city: "City",
        postOffice: "Post Office",
        pinNumber: "123456",
      },
      mobile: "1234567890",
      state: "State",
      dob: new Date(),
    };

    const savedFarmer = await Farmer.create(farmerData); // Create a farmer document

    expect(savedFarmer._id).toBeDefined(); // Ensure _id is defined
    expect(savedFarmer.farmerId).toBe(farmerData.farmerId); // Ensure farmerId matches
    expect(savedFarmer.fpoRegId).toBe(farmerData.fpoRegId); // Ensure fpoRegId matches
    // Add more expectations for other fields as needed
  });
});
