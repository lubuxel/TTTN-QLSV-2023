'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Point.init({
    MSSV: DataTypes.STRING,
    MAMH: DataTypes.STRING,
    DIEM: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};