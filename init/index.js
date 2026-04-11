const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
      ...obj,
      owner: "69d3d4b7bc65296db3cd0be4",  
    }))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}
initDB();