'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.hasMany(models.groupmessage, { foreignKey: 'group_id'});
      group.belongsToMany(models.user, { through: 'groupuser', foreignKey: 'group_id'});
      Group.hasMany(models.groupuser, { foreignKey: 'group_id'});
    }
  }
  group.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};