CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    image_url TEXT,
    slug TEXT UNIQUE NOT NULL,
    brand TEXT NOT NULL
);

INSERT INTO products (name, price, description, image_url, slug, brand) VALUES
('Svart T-shirt', 199, 'En klassisk svart t-shirt i mjuk bomull.', '/images/svarttshirt.jpg', 'svart-tshirt', 'Nike'),
('Vit T-shirt', 179, 'En stilren vit t-shirt perfekt för alla tillfällen.', '/images/vittshirt.jpg', 'vit-tshirt', 'Adidas'),
('Röd T-shirt', 189, 'En snygg röd t-shirt med bekväm passform.', '/images/rödtshirt.jpg', 'rod-tshirt', 'Puma'),
('Blå T-shirt', 209, 'Sportig blå t-shirt i funktionsmaterial.', '/images/blåtshirt.jpg', 'bla-tshirt', 'Under Armour'),
('Grön T-shirt', 199, 'Ekologisk grön t-shirt av hög kvalitet.', '/images/gröntshirt.jpg', 'gron-tshirt', 'Reebok'),
('Gul T-shirt', 169, 'Ljusgul t-shirt som ger energi och glädje.', '/images/gultshirt.jpg', 'gul-tshirt', 'Champion'),
('Grå T-shirt', 189, 'Mjuk och bekväm grå t-shirt.', '/images/gråtshirt.jpg', 'gra-tshirt', 'H&M'),
('Brun T-shirt', 219, 'Trendig brun t-shirt för en unik stil.', '/images/bruntshirt.jpg', 'brun-tshirt', 'Zara');

