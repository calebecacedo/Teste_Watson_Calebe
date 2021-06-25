const db = require('./db')

const Post = db.sequelize.define('comentarios',{
  comentario: {
    type: db.Sequelize.STRING
  }
})

module.exports = Post
