import ArticlesService from "./ArticlesService.js";

class ArticlesController {
    async create(req, res) {
        try {
            const article = await ArticlesService.create(req.body)
            res.json({
                "RequestId": article._id
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const articles = await ArticlesService.getAll(req.route.path);
            return res.json(articles);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ArticlesController();
