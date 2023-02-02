interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
  email:string;
  token: string;
}

'use strict';
const {
  Model, Optional, Sequelize

} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
   class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public first_name!: string;
    public last_name!:string;
    public email!: string;
    public password!: string;
    public token!: string;

  // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type:Sequelize.UUID,
      primaryKey:true
      defaultValue: Sequelize.UUIDV4,
    },
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'users'
  });
  return User;
};

