const host = process.env.HOST || "localhost"

module.exports = {
    "type": "mysql",
    "host": host,
    "port": 3306,
    "username": "root",
    "password": "password",
    "database": "db",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity"
    }
}