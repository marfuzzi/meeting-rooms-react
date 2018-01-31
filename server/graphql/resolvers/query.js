const { models } = require('../../models');

//тут ретурнятся промисы!!!

module.exports = {
  user (root, { id }) {
    return models.User.findById(id);
  },
  users (root, args, context) {
    return models.User.findAll({}, context);
  },
  event (root, { id }) {
    return models.Event.findById(id);
  },
  events (root, args, context) {
    //удалить перед коммитом
    console.log('%% events: args', args);
    console.log('%% events: context', context);

    return models.Event.findAll({}, context);
  },
  room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms (root, args, context) {
    return models.Room.findAll({}, context);
  }
};
