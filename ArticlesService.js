import { Documents1, Documents2 } from "./Article.js";

class ArticlesService {
    async create(article) {
        const createdArticle = await Documents1.create({...article});
        return createdArticle;
    }

    async getAll(path) {
        if (path === '/documents1') {
            const articles = await Documents1.find();
            return articles;
        } 

        if (path === '/documents2') {
            const articles = await Documents2.find();
            return articles;
        }
    }

}


export default new ArticlesService();
