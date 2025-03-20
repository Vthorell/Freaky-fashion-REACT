const express = require('express');
const Database = require('better-sqlite3');
const cors = require("cors");

const port = 8080;

const db = new Database('./db/products.db', {
  verbose: console.log,
});

const app = express();

// Middleware för att hantera JSON-data
app.use(express.json());

// CORS-inställningar
app.use(cors({
  origin: ["http://localhost:3000"]
}));

// Hjälpfunktion för att skapa slug från produktnamn
const generateSlug = (name) => {
  return name
    .toLowerCase() // Gör om till små bokstäver
    .replace(/\s+/g, '-') // Ersätt alla mellanslag med bindestreck
    .replace(/[^a-z0-9åäö\-]+/g, '') // Ta bort alla icke-alfanumeriska tecken förutom bindestreck
    .replace(/(^-|-$)/g, ''); // Ta bort eventuella bindestreck i början och slutet
};

// Hämtar alla produkter
app.get('/api/products', (req, res) => {
  const select = db.prepare(`
    SELECT id,
           name,
           description,
           image_url,
           slug,
           price,
           brand,
           sku
      FROM products
  `);
  
  const products = select.all();

  res.json(products);
});

// Lägg till en ny produkt
app.post('/api/products', (req, res) => {
  const { name, description, image_url, brand, sku, price } = req.body;

  if (!name || !description || !image_url || !brand || !sku || !price) {
    return res.status(400).json({ error: "Alla fält måste fyllas i" });
  }

  // Generera slug baserat på produktens namn
  const slug = generateSlug(name);

  try {
    const insert = db.prepare(`
      INSERT INTO products (name, description, image_url, brand, sku, price, slug)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(name, description, image_url, brand, sku, price, slug);

    const newProduct = {
      id: result.lastInsertRowid,
      name,
      description,
      image_url,
      brand,
      sku,
      price,
      slug
    };

    res.status(201).json(newProduct); // Skicka tillbaka den nyinlagda produkten som svar
  } catch (error) {
    console.error("Fel vid tillägg av produkt:", error);  // Logga felet
    res.status(500).json({ error: "Något gick fel på servern" });
  }
});

app.listen(port, () => {
  console.log(`Servern lyssnar på port ${port}`);
});

