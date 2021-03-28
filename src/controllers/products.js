// GET PRODUCTS
exports.getProducts = (req, res, next) => {
  res.json({
    message: "Get Product Success",
    data: [
      {
        id: 1,
        name: "Sari Gandum",
        price: 8000,
      },
      {
        id: 2,
        name: "Energen",
        price: 10000,
      },
    ],
  });
  next();
};
// CREATE PRODUCTS
exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      name: "Sari Gandum",
      price: 8000,
    },
  });
  next();
};
