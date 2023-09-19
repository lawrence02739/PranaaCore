const Graph = require('/Users/lawrence/Desktop/PranaaCore/app/model/user.model');

module.exports = {
    Query: {
        async graph(_, req) {
            return await Graph.findById(req.ID);
        },
        async getGraph(_, req) {
            return await Graph.find().limit(req.count)
        }
    },
    Mutation: {
        async createGraph(_, req){
            console.log("req",req.graphInput);
            const created = (await Graph.find({email:req.graphInput.email}))
           // if(req.graphInput.password==created.password){
                return {
                   id: created.id,
                   ...created._doc
                }
            // }else{
            //     return{
            //         msg:"invalid password"
            //     }
            // }

        }
    }
}