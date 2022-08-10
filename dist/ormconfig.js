"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'develop',
    entities: ['dist/src/**/*.entity.js'],
    migrations: ['dist/migration/**/*.migration.js'],
};
module.exports = options;
//# sourceMappingURL=ormconfig.js.map