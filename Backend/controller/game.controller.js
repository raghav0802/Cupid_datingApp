import Game from "../model/game.model.js"

export const getGame= async(req,response)=>{
    try {
        const game=await Game.find();
        response.status(200).json(game);
    } catch (error) {
        console.log("Erro:",error);
        response.status(500).json(error);
    }
};
