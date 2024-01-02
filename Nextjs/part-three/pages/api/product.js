// function handle(req, res) {

//     res.json({ massage: 'product api' });

// }

// export default handle;

// function handle(req, res) {
//     if (req.method === 'POST') {

//         const title = req.body.title;
//         const price = req.body.price;

//         const newProduct = { title, price };

//         const products = [];
//         products.push(newProduct);

//         console.log(products);

//     }
// }

// export default handle;

// import fs from 'fs';
// import path from 'path';

// function handle(req, res) {

//     const filePath = path.join(process.cwd(), 'data', 'products.json');
//     const jsonData = fs.readFileSync(filePath);
//     const data = JSON.parse(jsonData);

//     if (req.method === 'POST') {

//         const title = req.body.title;
//         const price = req.body.price;

//         const newProduct = { title, price };

//         data.push(newProduct);

//         fs.writeFileSync(filePath, JSON.stringify(data));

//     }
//     else {
//         res.json({ data })
//     }
// }

// export default handle;

import { dbClient } from './../../utils/db';

async function handle(req, res) {

    const db = await dbClient();

    if (req.method === 'POST') {

        const title = req.body.title;
        const price = req.body.price;

        const newProduct = { title, price };

        await db.collection('products').insertOne({ title, price });

    }
    else {
        const data = await db.collection('products').find().toArray();
        res.json({ data });
    }
}

export default handle;