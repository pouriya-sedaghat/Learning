// import db from './../../utils/db';
// import User from './../../models/user';
// import users from '../../data/users';


// async function handle(req, res) {

//     await db.connect();
//     await User.deleteMany();
//     await User.insertMany(users);
//     res.send({ massage: 'Ueser Added !' });

// }

// export default handle;

import db from './../../utils/db';
import User from './../../models/user';
import bcrypt from 'bcryptjs';


async function handle(req, res) {

    if (req.method === 'POST') {

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const newUser = { name, email, password: bcrypt.hashSync(password) };

        await db.connect();
        await User.create(newUser);

        res.send({ massage: 'User Added !' });

    }

}

export default handle;