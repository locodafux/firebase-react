import express from "express";
import admin from "firebase-admin";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
import serviceAccount from "./firebaseServiceAccountKey.json" assert { type: "json" };
import authenticateToken from "./middleware/authenticateToken";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid Token" });
  }
};

app.post("/generate-jwt", async (req, res) => {
  const { firebaseToken } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(firebaseToken);

    const token = jwt.sign(
      { uid: decoded.uid, email: decoded.email },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: "Invalid Firebase Token" });
  }
});

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

