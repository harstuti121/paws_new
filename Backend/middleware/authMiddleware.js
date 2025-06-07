// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const token = req.header("Authorization");

//     if (!token) {
//         return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: "Invalid token." });
//     }
// };

// module.exports = authMiddleware;

// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Adds user info to the request object
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token and decode user info
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adds user info to the request object
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
