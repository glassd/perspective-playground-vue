const vm = Vue.createApp({
    data() {
        return {
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            perspective: 100,
        }
    },
    methods: {
        resetPerspective() {
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.perspective = 100;
        }
    },
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)`
            }
        }
    }
}).mount('#app');