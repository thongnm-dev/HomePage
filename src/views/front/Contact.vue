<template>
    <div id="contact-page" class="container">
        <div class="company-title">
            <div class="container"></div>
            <div class="row">
                <div class="col-md-9">
                    <div class="company-label"><span class="title">Công ty</span></div>
                    <div class="company-name">
                        ALLEXCEED VIETNAM INC.
                    </div>
                    <div class="company-country sp-hidden">
                        <span><img src="/image/flag-vietnam.jpg" />Việt nam</span>
                    </div>
                </div>
                <div class="col-md-3 col-company-photo"></div>
            </div>
        </div>
        <div class="contact-section section-padding bg-grey">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="skill-img">
                            <img src="/image/background/lant-bg.jpg" alt="" class="img-fluid-servicce building-img scale-1" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="section-heading">
                            <span class="subheading">Chi tiết</span>
                            <h3>Thông tin liên hệ</h3>
                        </div>
                        <div class="contact-content">
                            <div class="contact-text-block">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <h4>Lầu 8, LANT Building 56-58-60 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh.</h4>
                            </div>
                            <div class="contact-text-block">
                                <i class="fa fa-female" aria-hidden="true"></i>
                                <h4>Ms.Ngân</h4>
                            </div>
                            <div class="contact-text-block">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <h4>contact-info@allexceed.co.jp</h4>
                            </div>
                            <div class="contact-text-block">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <h4>(+028) 3823 3202</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map-content">
            <div class="container">
                <div class="row align-items-center">
                    <iframe
                        class="map-item"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8656472162742!2d106.7042580039365!3d10.777276468405473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f482dafe8e7%3A0x82da6458b028ca3a!2zNjAgSGFpIELDoCBUcsawbmcsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1603952533636!5m2!1svi!2s"
                        width="600"
                        height="450"
                        frameborder="0"
                        style="border: 0;"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, { Component } from "@/utils/base-component";
    @Component({})
    export default class Contact extends BaseComponent {}
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/about/contact.scss";
</style>
