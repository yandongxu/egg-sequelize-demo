'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  return app.model.define('user', {
    name: STRING(8),
    email: STRING(32),
  }, {
    timestamps: false,
    classMethods: {
      * findByEmail(email) {
        return yield this.findOne({ email });
      },
    },
  });
};
