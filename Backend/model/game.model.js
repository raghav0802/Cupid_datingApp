import mongoose from "mongoose";
const gameSchema=mongoose.Schema({
    name:String,
    description:String,
    duration:String,
    category:String,
    image:String

})
const Game=mongoose.model("Game",gameSchema);
export default Game;