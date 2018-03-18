import categoryService from "../service/category.service";

const state = {
    posts: [],
    categoryId: 0
}

const getters = {
    posts: state => state.posts
}

const actions = {
    updateCategory: (context, categoryId) => {
        categoryService
            .getPosts(categoryId)
            .then((data) => {
                context.commit('updateCategory', { categoryId, data });
            })
            .catch(reason => {
                console.log("Could not get posts, reason ==>", reason);
            });
    }
}

const mutations = {
    updateCategory(state, category) {
        state.categoryId = category.categoryId;
        state.posts = category.data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}