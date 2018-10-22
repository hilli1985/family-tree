const Sequelize = require("sequelize");


class dbConnect {
    constructor() {
        this.sequelize = new Sequelize(
            'mysql://sql2260487:lL8!wX9*@sql2.freesqldatabase.com:3306/sql2260487'
            );           
            this.start();
        }
        start() {
            // this.sequelize.close()
            // .then(()=> console.log('closed'));
            this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch(err => {
                console.error("Unable to connect to the database:", err);
            });
        }
    }

    console.log(1)
const dataAccess = new dbConnect();
module.exports = dataAccess;
    
    
    
    
    