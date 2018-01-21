<template>
    <transition name="ms-loading-fade">
        <div class="ms-loading__wrapper"
             v-show="visible">
            <div class="ms-loading">
                <div class="ms-loading__content">
                    <div class="ms-loading__oval"></div>
                    <div class="ms-loading__dot ms-loading__circular"></div>
                    <div class="ms-loading__dot ms-loading__square"></div>
                    <div class="ms-loading__dot ms-loading__triangle">
                        <svg class="ms-loading__triangle__img"
                             width="32px"
                             height="30px"
                             viewBox="0 0 32 30"
                             version="1.1">
                            <g id="iPhone-8-Copy"
                               stroke="none"
                               stroke-width="1"
                               fill="none"
                               fill-rule="evenodd"
                               transform="translate(-158.000000, -287.000000)">
                                <path d="M177.535152,289.677509 L188.891532,311.128449 C189.925161,313.080859 189.180341,315.501523 187.227931,316.535152 C186.651326,316.840413 186.008805,317 185.35638,317 L162.64362,317 C160.434481,317 158.64362,315.209139 158.64362,313 C158.64362,312.347576 158.803207,311.705054 159.108468,311.128449 L170.464848,289.677509 C171.498477,287.725098 173.919141,286.980279 175.871551,288.013908 C176.580314,288.389135 177.159924,288.968746 177.535152,289.677509 Z"

                                      id="Triangle"
                                      fill="#FF908A"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <p class="ms-loading__text">
                    <slot name="text">{{text}}</slot>
                </p>
            </div>
            <div class="ms-loading__mask"
                 @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'MsLoading',

  props: {
    text: {
      type: String,
      default: '加载中...'
    }
  },

  data() {
    return {
      visible: false
    };
  }
};
</script>
