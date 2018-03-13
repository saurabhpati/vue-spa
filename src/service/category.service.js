import BaseService from './base.service';

class CategoryService extends BaseService {
    getPosts(categoryId) {
        return this.serviceClient.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page-6`)
            .then(function (response) {
                return response.data;
            }).catch(function (reason) {
                console.log('Category service call failed, reason ==>', reason);
            });
    }
}

const service = new CategoryService();
export default service;