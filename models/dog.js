const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
      },
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "owner",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dog",
  }
);

module.exports = Dog;
