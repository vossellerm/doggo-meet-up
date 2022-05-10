const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Setting extends Model {}

Setting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5, 5],
      },
    },
    park: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "dog",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "setting",
  }
);

module.exports = Setting;
