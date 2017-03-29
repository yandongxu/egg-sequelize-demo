'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const User = app.model.define('User', {
    name: STRING(8),
    email: STRING(32),
  }, {
    timestamps: false,
    classMethods: {
      associate() {
        app.model.User.hasMany(app.model.Post, { as: 'posts' });
      },

      * findByEmail(email) {
        return yield this.findOne({ email });
      },
    },
  });

  return User;

};
