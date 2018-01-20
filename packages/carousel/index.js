import MsCarousel from './src/main.vue';

MsCarousel.install = function(Vue) {
  Vue.component(MsCarousel.name, MsCarousel);
};

export default MsCarousel;
