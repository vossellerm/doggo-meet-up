const Owner = require("./owner");
const Dog = require("./dog");
const Setting = require("./setting");

Owner.hasOne(Dog, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Dog.belongsTo(Owner, {
  foreignKey: "owner_id",
});

Dog.hasOne(Setting, {
  foreignKey: "dog_id",
  onDelete: "CASCADE",
});

Setting.belongsTo(Dog, {
  foreignKey: "dog_id",
});

module.exports = { Owner, Dog, Setting };
