const express = require("express");
const usersController = require("./users.controller");
const router = express.Router();

function isAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).send({ message: 'Access denied. Only admins can perform this action.' });
    }
    next();
}

router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.post("/", usersController.create);
router.put("/:id", isAdmin, usersController.update);
router.delete("/:id", isAdmin, usersController.delete);

module.exports = router;
