<template>
    <div>
        <div id="main-wrapper" class="mm-page mm-slideout">
            <section id="main-banner" class="main-banner position-relative overflow-hidden clearfix">
                <div id="main-banner-image" class="position-absolute video-banner">
                    <video autoplay muted id="mainBannerVideo" class="d-md-block d-lg-block">
                        <source type="video/mp4" src="videos/video-background.mp4" />
                    </video>
                </div>
                <div class="button-block">
                    <a href="#" @click.prevent="goView('company')" class="btn animated-button2">
                        Informations
                    </a>
                    <a href="#" @click.prevent="goView('recruit')" class="btn animated-button1">
                        Recruitment
                    </a>
               </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    @Component
    export default class Recruit extends BaseComponent {
        private goView(view: string) {
            window.location.href = `/${view}`;
            return false;
        }
    }
</script>
<style scoped lang="scss" scoped>
    @import '@/assets/sass/welcome.scss';
</style>
