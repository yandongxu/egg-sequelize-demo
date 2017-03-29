'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING } = app.Sequelize;

  return app.model.define('Post', {
    title: STRING,
    user_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }, {
    classMethods: {
      associate() {
        app.model.Post.belongsTo(app.model.User, { as: 'user' });
      },
    },
  });
};
