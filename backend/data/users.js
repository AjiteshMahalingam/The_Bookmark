import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin User',
        email : 'admin.bookmark@gmail.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'Ajitesh',
        email : 'ajitesh.mahalingam@gmail.com',
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : 'Barathraj',
        email : 'barathraj@gmail.com',
        password : bcrypt.hashSync('123456', 10)
    }
];

export default users;