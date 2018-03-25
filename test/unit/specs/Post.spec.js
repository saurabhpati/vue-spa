import Vue from 'vue';
import Post from '../../../src/themes/Post.vue';

const _createComponent = () => {
    let PostConstructor = Vue.extend(Post);
    let component = new PostConstructor({
        propsData: {
            link: 'http:/github.com/saurabhpati'
        }
    }).$mount();

    return component;
}

describe('Post.Vue', () => {
    it('should render the link', () => {
        let component = _createComponent();
        expect(component.$el.querySelector('.card-footer-item').getAttribute('href')).to
            .equal('http:/github.com/saurabhpati');
    });

    it('should update element href when link changes', (done) => {
        let component = _createComponent();
        expect(component.$el.querySelector('.card-footer-item').getAttribute('href')).to
            .equal('http:/github.com/saurabhpati');

        component.link = 'https://twitter.com/saurabhpati';
        Vue.nextTick(() => {
            expect(component.$el.querySelector('.card-footer-item').getAttribute('href')).to
                .equal('https://twitter.com/saurabhpati');
            done();
        });
    });
});