module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username:'invoices',//invoices
    password:'invoices',
    database:'gobarber',
    define:{
        timestamps: true,
        underscored:true,
        underscoredAll: true,
    }
}
