var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
'use strict';
var _a = require('sequelize'), Model = _a.Model, Optional = _a.Optional, Sequelize = _a.Sequelize, INTEGER = _a.INTEGER, FLOAT = _a.FLOAT, STRING = _a.STRING, TEXT = _a.TEXT, ENUM = _a.ENUM, DATE = _a.DATE, NOW = _a.NOW;
module.exports = function (sequelize) {
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        User.associate = function (models) {
            // define association here
        };
        return User;
    }(Model));
    User.init({
        id: {
            type: INTEGER,
            primaryKey: true
        },
        first_name: STRING,
        last_name: STRING,
        email: STRING,
        password: STRING,
        token: STRING
    }, {
        sequelize: sequelize
    });
    return User;
};
