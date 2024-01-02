import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'pouriya',
        email: 'pouriyastk1@gmail.com',
        password: bcrypt.hashSync('Pou7riy9@31'),
        isAdmin: true
    },
    {
        name: 'masood',
        email: 'masoodsadri@gmail.com',
        password: bcrypt.hashSync('Masood@31'),
        isAdmin: false
    },
    {
        name: 'zahra',
        email: 'zahrasedaghat@gmail.com',
        password: bcrypt.hashSync('Zahra@31'),
        isAdmin: false
    }
]

export default users;