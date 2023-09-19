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
            const created = new Graph(req.graphInput)
        const res = await created.save();

        return {
            id: res.id,
            ...res._doc
            }
        },
        async deleteGraph(_, req) {
            const isDeleted = (await Graph.deleteOne({_id: req.ID})).deletedCount;
            return isDeleted; //return 0 or 1
        },
        async editGraph(_, req) {
            console.log("req",req);
            const isEdited = (await Graph.findByIdAndUpdate(req.ID, req.editInput, { new: true })).upsertedCount;
            return isEdited; //return 0 or 1
        }
    }
}