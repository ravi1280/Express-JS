const { db } = require("../config/db.js");

const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, data) => {
        if (err) return res.status(500).json({ message: "DB ERROR" });
        return res.json(data);
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
        if (err) return res.status(500).json({ message: "Insert failed 💀" });
        res.json({ message: "User added ✅" });
    });
};

module.exports = { getUsers, createUser };