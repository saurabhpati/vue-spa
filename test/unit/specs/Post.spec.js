import Vue from 'vue';
import Post from '../../../src/themes/Post.vue';

describe('Post.Vue', () => {
    it('should render the link', () => {
        const PostConstructor = Vue.extend(Post);
        let comp = new PostConstructor({
            propsData: {
                link: 'http:/github.com/saurabhpati'
            }
        }).$mount()

        expect(comp.$el.querySelector('.card-footer-item').getAttribute('href')).to
        .equal('http:/github.com/saurabhpati');
    });
});