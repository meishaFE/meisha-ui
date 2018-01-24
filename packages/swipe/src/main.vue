<template>
  <div class="ms-swipe">
        <div class="ms-swipe__wrapper"
             ref="wrapper">
            <slot></slot>
        </div>
        <div class="ms-swipe__indicators"
             v-show="showIndicators">
            <div class="ms-swipe__indicator"
                 v-for="(page, idx) in pages"
                 :key="`ms-swipe-indicator-${idx}`"
                 :class="{ 'is-active': idx === index }"></div>
        </div>
    </div>
</template>

<script>
// need refactor
import { addClass, removeClass, once } from '../../../src/utils/dom';
export default {
  name: 'MsSwipe',
  props: {
    speed: {
      type: Number,
      default: 300
    },
    auto: {
      type: Number,
      default: 3000
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    indicatorPostion: String,
    stopPropagation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      ready: false,
      isDragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false,
      isDone: false,
      prevent: false
    };
  },

  methods: {
    swipeItemCreated() {
      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },
    swipeItemDestroyed() {
      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },
    rafTranslate(element, initOffset, offset, callback, nextElement) {
      let ALPHA = 0.88;
      this.animating = true;
      var _offset = initOffset;
      var raf = 0;
      function animationLoop() {
        if (Math.abs(_offset - offset) < 0.5) {
          this.animating = false;
          _offset = offset;
          element.style.webkitTransform = '';
          if (nextElement) {
            nextElement.style.webkitTransform = '';
          }
          cancelAnimationFrame(raf);
          if (callback) {
            callback();
          }
          return;
        }
        _offset = ALPHA * _offset + (1.0 - ALPHA) * offset;
        element.style.webkitTransform = `translate3d(${_offset}px, 0, 0)`;
        if (nextElement) {
          nextElement.style.webkitTransform = `translate3d(${_offset - offset}px, 0, 0)`;
        }
        raf = requestAnimationFrame(animationLoop.bind(this));
      }
      animationLoop.call(this);
    },
    translate(element, offset, speed, callback) {
      if (speed) {
        this.animating = true;
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
        setTimeout(() => {
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
        }, 50);
        var called = false;
        var transitionEndCallback = () => {
          if (called) return;
          called = true;
          this.animating = false;
          element.style.webkitTransition = '';
          element.style.webkitTransform = '';
          if (callback) {
            callback.apply(this, arguments);
          }
        };
        once(element, 'webkitTransitionEnd', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = '';
        element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      }
    },
    /* eslint-disable complexity */
    doAnimate(towards, options) {
      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;
      var prevPage, nextPage, currentPage, pageWidth, offsetLeft, speedX;
      var speed = this.speed || 300;
      var index = this.index;
      var pages = this.pages;
      var pageCount = pages.length;
      if (!options) {
        pageWidth = this.$el.clientWidth;
        currentPage = pages[index];
        prevPage = pages[index - 1];
        nextPage = pages[index + 1];
        if (this.loop && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }
          if (!nextPage) {
            nextPage = pages[0];
          }
        }
        if (prevPage) {
          prevPage.style.display = 'block';
          this.translate(prevPage, -pageWidth);
        }
        if (nextPage) {
          nextPage.style.display = 'block';
          this.translate(nextPage, pageWidth);
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
        speedX = options.speedX;
      }
      var newIndex;
      var oldPage = this.$children[index].$el;
      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }
        if (this.loop && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }
        if (this.loop && index === pageCount - 1) {
          newIndex = 0;
        }
      }
      var callback = () => {
        if (newIndex !== undefined) {
          var newPage = this.$children[newIndex].$el;
          removeClass(oldPage, 'is-active');
          addClass(newPage, 'is-active');
          this.index = newIndex;
        }
        if (this.isDone) {
          this.end();
        }
        if (prevPage) {
          prevPage.style.display = '';
        }
        if (nextPage) {
          nextPage.style.display = '';
        }
      };
      setTimeout(() => {
        if (towards === 'next') {
          this.isDone = true;
          this.before(currentPage);
          if (speedX) {
            this.rafTranslate(currentPage, offsetLeft, -pageWidth, callback, nextPage);
          } else {
            this.translate(currentPage, -pageWidth, speed, callback);
            if (nextPage) {
              this.translate(nextPage, 0, speed);
            }
          }
        } else if (towards === 'prev') {
          this.isDone = true;
          this.before(currentPage);
          if (speedX) {
            this.rafTranslate(currentPage, offsetLeft, pageWidth, callback, prevPage);
          } else {
            this.translate(currentPage, pageWidth, speed, callback);
            if (prevPage) {
              this.translate(prevPage, 0, speed);
            }
          }
        } else {
          this.isDone = false;
          this.translate(currentPage, 0, speed, callback);
          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage && offsetLeft < 0) {
              this.translate(nextPage, pageWidth, speed);
            }
          } else {
            if (prevPage) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage) {
              this.translate(nextPage, pageWidth, speed);
            }
          }
        }
      }, 10);
    },
    /* eslint-enable */
    reInitPages() {
      const children = this.$children;
      const pages = [];
      const intDefaultIndex = Math.floor(this.defaultIndex);
      const defaultIndex = intDefaultIndex >= 0 && intDefaultIndex < children.length ? intDefaultIndex : 0;

      this.noDrag = children.length === 1;
      this.index = defaultIndex;

      children.forEach((child, index) => {
        const $el = child.$el;
        pages.push($el);

        removeClass($el, 'is-active');

        if (index === defaultIndex) {
          addClass($el, 'is-active');
        }
      });

      this.pages = pages;
    },
    initTimer() {
      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(() => {
          if (!this.loop && this.index + 1 >= this.pages.length) {
            return this.clearTimer();
          }
          if (!this.isDragging && !this.animating) {
            this.next();
          }
        }, this.auto);
      }
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },

    next() {
      this.doAnimate('next');
    },
    prev() {
      this.doAnimate('prev');
    },
    before() {
      this.$emit('before', this.index);
    },
    end() {
      this.$emit('end', this.index);
    },

    /* eslint-disable complexity */
    handleTouchStart(event) {
      if (this.noDrag) return;

      const ele = this.$el;
      const dragState = this.dragState;
      const touch = event.touches[0];
      const $children = this.$children;

      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;
      dragState.pageWidth = ele.offsetWidth;
      dragState.pageHeight = ele.offsetHeight;

      let prevPage = $children[this.index - 1];
      const currentPage = $children[this.index];
      let nextPage = $children[this.index + 1];

      if (this.loop && this.pages.length > 1) {
        if (!prevPage) prevPage = $children[$children.length - 1];
        if (!nextPage) nextPage = $children[0];
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = currentPage ? currentPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },
    handleTouchMove(event) {
      if (this.noDrag) return;

      const dragState = this.dragState;
      const touch = event.touches[0];

      dragState.speedX = touch.pageX - dragState.currentLeft;
      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;

      let offsetLeft = dragState.currentLeft - dragState.startLeft;
      const offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;
      const distanceX = Math.abs(offsetLeft);
      const distanceY = Math.abs(offsetTop);

      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
        this.userScrolling = true;
        return;
      } else {
        this.userScrolling = false;
        event.preventDefault();
      }
      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);
      const towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }
      this.translate(dragState.dragPage, offsetLeft);
      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },
    handleTouchEnd(event) {
      if (this.noDrag) return;
      var dragState = this.dragState;
      var dragDuration = new Date() - dragState.startTime;
      var towards = null;
      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTop - dragState.startTop;
      var pageWidth = dragState.pageWidth;
      var index = this.index;
      var pageCount = this.pages.length;
      if (dragDuration < 300) {
        let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }
      if (dragDuration < 300 && dragState.currentLeft === undefined) return;
      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }
      if (!this.loop) {
        if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
          towards = null;
        }
      }
      if (this.$children.length < 2) {
        towards = null;
      }
      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage,
        speedX: dragState.speedX
      });
      this.dragState = {};
    }
    /* eslint-enable */
  },

  created() {
    this.dragState = {};
  },

  mounted() {
    this.ready = true;

    this.initTimer();

    this.reInitPages();

    const ele = this.$el;

    ele.addEventListener('touchstart', event => {
      if (this.prevent) event.preventDefault();
      if (this.stopPropagation) event.stopPropagation();
      if (this.animating) return;

      this.isDragging = true;
      this.userScrolling = true;
      this.handleTouchStart(event);
    });

    ele.addEventListener('touchmove', event => {
      if (!this.isDragging) return;
      if (this.timer) this.clearTimer();
      this.handleTouchMove(event);
    });

    ele.addEventListener('touchend', event => {
      if (this.userScrolling) {
        this.isDragging = false;
        this.dragState = {};
        return;
      }
      if (!this.isDragging) return;
      this.initTimer();
      this.handleTouchEnd(event);
      this.isDragging = false;
    });
  },

  destroyed() {
    if (this.timer) {
      this.clearTimer();
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  }
};
</script>
