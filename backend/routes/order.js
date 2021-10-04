const express = require("express");
const { router } = require("../app");

const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// admin routes
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), myOrders);

module.exports = router;
