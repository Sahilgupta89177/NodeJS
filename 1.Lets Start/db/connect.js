// URL ="mongodb+srv://sahilgupta:WoeY3wqEQ2R9na6Q@dumpdata.jkmz7iw.mongodb.net/"

const mongoose =require("mongoose")


const connnectDb =(URL)=>{

    try {
         mongoose.connect(URL);
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
    }

}

module.exports=connnectDb