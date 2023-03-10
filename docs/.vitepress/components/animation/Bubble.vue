<script lang="ts" name="Bubble" setup></script>

<template>
    <div class="kuang">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
    </div>
</template>

<style lang="scss">
.kuang {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
}

.bubble {
    position: absolute;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: inset 0 0 8px #fff;
    animation: flutter 10s infinite;
    opacity: 0;
}

@keyframes flutter {
    0% {
        transform: translateX(0);
        bottom: -100px;
        opacity: 1;
    }

    50% {
        transform: translateX(100px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(0px);
        bottom: 100%;
        opacity: 0;
    }
}

.bubble:nth-child(1) {
    left: -10%;
    width: 50px;
    height: 50px;
    animation-duration: 9s;
    animation-delay: 0.1s;
}

.bubble:nth-child(2) {
    left: 15%;
    width: 20px;
    height: 20px;
    animation-duration: 6s;
    animation-delay: 1.5s;
}

.bubble:nth-child(3) {
    left: 20%;
    width: 60px;
    height: 60px;
    animation-duration: 10s;
}

.bubble:nth-child(4) {
    left: 30%;
    width: 30px;
    height: 30px;
    animation-duration: 5.5s;
    animation-delay: 1.5s;
}

.bubble:nth-child(5) {
    left: 40%x;
    width: 50px;
    height: 50px;
    animation-duration: 12s;
}

.bubble:nth-child(6) {
    left: 50%;
    width: 20px;
    height: 20px;
    animation-duration: 6s;
    animation-delay: 1s;
}

.bubble:nth-child(7) {
    left: 60%;
    width: 40px;
    height: 40px;
    animation-duration: 8s;
    animation-delay: 1s;
}

.bubble:nth-child(8) {
    left: 65%;
    width: 60px;
    height: 60px;
    animation-duration: 15s;
}

.bubble:nth-child(9) {
    left: 80%;
    width: 55px;
    height: 55px;
    animation-duration: 9s;
    animation-delay: 0.5s;
}

.bubble:nth-child(10) {
    left: 100%;
    width: 40px;
    height: 40px;
    animation-duration: 12s;
}

.bubble:nth-child(11) {
    left: 10%;
    width: 50px;
    height: 50px;
    animation-duration: 12s;
    animation-delay: 1s;
}

.bubble:nth-child(12) {
    left: 25%;
    width: 40px;
    height: 40px;
    animation-duration: 12s;
}

.bubble:nth-child(13) {
    left: 35%;
    width: 70px;
    height: 70px;
    animation-duration: 10s;
    animation-delay: 0.5s;
}

.bubble:nth-child(14) {
    left: 85%;
    width: 45px;
    height: 45px;
    animation-duration: 12s;
}

.bubble:nth-child(15) {
    left: -20%;
    width: 35px;
    height: 35px;
    animation-duration: 8s;
}
</style>
