const users = [
    {
        id: 1,
        username: 'admin',
        //raw password is admin
        password: '$2b$10$D21ayBtt.Vu8RRc6.ZER..NerRcNiRULC25tGfS6x9OPzuumfUQEi',
    },
];

const findByUsername = (username) => users.find((user) => user.username === username);

module.exports = { findByUsername };
