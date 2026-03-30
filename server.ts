import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // ERPNext API Integration Layer
  app.post("/api/leads", async (req, res) => {
    const { name, email, phone, service, message, source, utm } = req.body;
    
    // Placeholder for ERPNext API call
    // In production, you would use fetch(process.env.ERP_BASE_URL + '/api/method/frappe.desk.form.lead.create_lead', ...)
    // with headers: { 'Authorization': `token ${process.env.ERP_API_KEY}:${process.env.ERP_API_SECRET}` }
    
    console.log("ERPNext Lead Received:", { name, email, phone, service, message, source, utm });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.status(200).json({ 
      success: true, 
      message: "Lead captured successfully in ERPNext",
      ref: "LEAD-" + Math.random().toString(36).substring(7).toUpperCase()
    });
  });

  app.post("/api/enquiry", async (req, res) => {
    console.log("Website Enquiry Received:", req.body);
    await new Promise(resolve => setTimeout(resolve, 800));
    res.status(200).json({ success: true, message: "Enquiry sent" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sterling Edge Ltd server running at http://localhost:${PORT}`);
  });
}

startServer();
