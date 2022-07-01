import {Sequelize} from 'sequelize'

const db = new Sequelize('notitas','root','',{
    host:'localhost',
    dialect: 'mysql'
})

export default db