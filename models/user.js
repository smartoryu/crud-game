const user_biodata = require("./user_biodata");
const user_game = require("./user_game");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.User_biodata);
      // this.hasMany(models.User_game);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      // fullname: DataTypes.STRING,
      // gender: DataTypes.STRING,
      // address: DataTypes.STRING,
      // difficulty: DataTypes.STRING,
      // level: DataTypes.INTEGER,
      // have_won: DataTypes.INTEGER,
      // have_lost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
