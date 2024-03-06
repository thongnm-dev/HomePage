<template>
    <div>
        <div>
            <!-- Banner Section Start -->
            <section class="banner">
                <div class="container banner-mr">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-xl-8 col-lg-8">
                            <div class="banner-content">
                                <h1 class="font-sm">ALLEXCEED VIETNAM INC.</h1>
                                <p class="mb-3">Là một công ty phát triển phần mềm được thành lập bởi 100% vốn đầu tư của công ty ALLEXCEED Nhật Bản.</p>
                                <ul style="text-align: left; color: white; margin-bottom: 4%;">
                                    <li><i class="fa fa-check"></i> Với hơn 10 năm hoạt động trong lĩnh vực outsourcing, chúng tôi đã tạo ra rất nhiều sản phẩm phần mềm cung cấp cho khách hàng Việt Nam và Nhật Bản.</li>
                                    <li><i class="fa fa-check"></i> Công ty có một đội ngũ nhân viên trẻ không ngại thay đổi, và làm việc một cách tích cực để đáp ứng đúng nhu cầu của khách hàng.</li>
                                    <li><i class="fa fa-check"></i> Tạo điều kiện cho các kĩ sư trẻ Việt Nam đi học tập và làm việc tại Nhật Bản.</li>
                                </ul>
                                <img src="image/upload/about/button.svg" alt="" class="figure-img" />
                                <router-link style="z-index: 3;" class="btn1 btn-main btn-custom" :to="{name: 'about', params: {subdomain: 'company'}}">
                                    <span>Read more </span> <span class="arrow">&#10230;</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-6 col-lg-6 mb-4">
                            <div class="banner-img-round mt-5 mt-lg-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="our-service-sass">
                <div class="container">
                    <div class="theme-title-one text-center">
                        <h2 class="main-title">Dịch vụ</h2>
                    </div>
                    <div class="inner-wrapper">
                        <div class="row">
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service1', params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <span class="snow-dot"></span>
                                    <div class="hover-content"></div>
                                    <i class="fa fa-wrench icon-s"></i>
                                    <h5 class="title"><a>CATV system</a></h5>
                                    <p>Symphonizer" được phát triển...</p>
                                </div>
                                </router-link>
                                
                            </div>
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service2' ,params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <div class="hover-content"></div>
                                        <i class="fa fa-bars icon-s"></i>
                                        <h5 class="title"><a>Automation system</a></h5>
                                        <p>Hệ thống kho hàng tự động hóa</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service3', params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <div class="hover-content"></div>
                                        <i class="fa fa-medkit icon-s"></i>
                                        <h5 class="title"><a>Medical system</a></h5>
                                        <p>Hệ thống quản lý bệnh nhân</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service4', params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <div class="hover-content"></div>
                                        <i class="fa fa-desktop icon-s"></i>
                                        <h5 class="title"><a>System Solution</a></h5>
                                        <p>Phần mềm nhận diện khuôn mặt</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service5', params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <div class="hover-content"></div>
                                        <i class="fa fa-phone-volume icon-s"></i>
                                        <h5 class="title"><a>Customer support</a></h5>
                                        <p>SE giàu kinh nghiệm</p>
                                    </div>
                                </router-link>
                            </div>
                            <div class="col-lg-4 single-block">
                                <router-link :to="{path: 'company/service', hash: 'service6', params: {subdomain: 'company'}}">
                                    <div class="service-block">
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <span class="snow-dot"></span>
                                        <div class="hover-content"></div>
                                        <i class="fa fa-bookmark icon-s"></i>
                                        <h5 class="title"><a>Offshore development</a></h5>
                                        <p>Có nhiều kinh nghiệm ủy thác dự án</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-timeline">
                <div class="section-wrapper">
                    <div class="container">
                        <div class="theme-title-one text-center">
                            <h2 class="main-title">Thực tế phát triển</h2>
                        </div>
                    </div>
                    <div class="two-col-timeline">
                        <div class="two-col-timeline__row">
                            <div class="two-col-timeline__col-text">
                                <router-link style="color:black" :to="{path: 'company/develop', hash: 'develop-list'}">
                                    <div class="two-col-timeline__col-text-inner slide-in">
                                    <div class="two-col-timeline__text-wrapper">
                                        <h4 class="two-col-timeline__col-title">
                                           ケーブルテレビ会社向けパッケージソフト開発
                                        </h4>
                                        <p class="two-col-timeline__col-supporting-text">
                                            <p><i class="fa fa-check"></i> 委託内容: 機能強化、カスタマイズに対する設計・開発・検証</p>
                                            <p><i class="fa fa-check"></i> 開発環境: Java, ORACLE SWT, Jface RichClient</p>
                                            <p><i class="fa fa-check"></i> 開発人月: 190人月</p>
                                            <p><i class="fa fa-check"></i> 開発期間: 12ヶ月</p>
                                        </p>
                                    </div>
                                    <div style="color: #fdc06a; opacity: 0.1;" class="two-col-timeline__row-number">32MM</div>
                                </div>
                                </router-link>
                                <div class="two-col-timeline__dash"></div>
                            </div>

                            <div class="two-col-timeline__line"></div>
                            <div></div>
                        </div>

                        <div class="two-col-timeline__row">
                            <div class="two-col-timeline__col-text right">
                                 <router-link style="color:black" :to="{path: 'company/develop', hash: 'develop-list'}">
                                <div class="two-col-timeline__col-text-inner slide-in">
                                    <div class="two-col-timeline__text-wrapper">
                                        <h4 class="two-col-timeline__col-title">
                                           ケーブルテレビ会社向けパッケージソフト開発
                                        </h4>
                                        <p class="two-col-timeline__col-supporting-text">
                                            <p><i class="fa fa-check"></i> 委託内容: カスタマイズに対する設計・開発・検証</p>
                                            <p><i class="fa fa-check"></i> 開発環境: VB, ORACLE</p>
                                            <p><i class="fa fa-check"></i> 開発人月: 32人月</p>
                                            <p><i class="fa fa-check"></i> 開発期間: 7ヶ月</p>
                                        </p>
                                    </div>
                                    <div style="color: #fdc06a; opacity: 0.1;" class="two-col-timeline__row-number">20MM</div>
                                </div>
                                 </router-link>
                                <div class="two-col-timeline__dash"></div>
                            </div>

                            <div class="two-col-timeline__line"></div>
                            <div></div>
                        </div>

                        <div class="two-col-timeline__row">
                            <div class="two-col-timeline__col-text">
                                 <router-link style="color:black" :to="{path: 'company/develop', hash: 'develop-list'}">
                                <div class="two-col-timeline__col-text-inner slide-in">
                                    <div class="two-col-timeline__text-wrapper">
                                       <h4 class="two-col-timeline__col-title">
                                           連盟会員管理システム開発
                                        </h4>
                                        <p class="two-col-timeline__col-supporting-text">
                                            <p><i class="fa fa-check"></i> 委託内容: 設計・開発・検証・不具合対応</p>
                                            <p><i class="fa fa-check"></i> 開発環境: Java, Postgre SWT, Jface, RichClient</p>
                                            <p><i class="fa fa-check"></i> 開発人月: 28人月</p>
                                            <p><i class="fa fa-check"></i> 開発期間: 4ヶ月</p>
                                        </p>
                                    </div>
                                      <div style="color: #fdc06a; opacity: 0.1;" class="two-col-timeline__row-number">20MM</div>
                                </div>
                                 </router-link>
                                <div class="two-col-timeline__dash"></div>
                            </div>

                            <div class="two-col-timeline__line"></div>
                            <div></div>
                        </div>

                        <div class="two-col-timeline__row">
                            <div class="two-col-timeline__col-text right">
                                 <router-link style="color:black" :to="{path: 'company/develop', hash: 'develop-list'}">
                                <div class="two-col-timeline__col-text-inner slide-in">
                                    <div class="two-col-timeline__text-wrapper">
                                       <h4 class="two-col-timeline__col-title">
                                          国際レース計時システム改修
                                        </h4>
                                        <p class="two-col-timeline__col-supporting-text">
                                            <p><i class="fa fa-check"></i> 委託内容: 機能UP開発ならびにVB6から VB.NETへのリプレイス（ﾌﾚｰﾑﾜｰｸの再設計は日本）</p>
                                            <p><i class="fa fa-check"></i> 開発環境: VB.NET</p>
                                            <p><i class="fa fa-check"></i> 開発人月: 27人月</p>
                                            <p><i class="fa fa-check"></i> 開発期間: 4ヶ月</p>
                                        </p>
                                    </div>
                                    <div style="color: #74c385; opacity: 0.1;" class="two-col-timeline__row-number">44MM</div>
                                </div>
                                 </router-link>
                                <div class="two-col-timeline__dash"></div>
                            </div>

                            <div class="two-col-timeline__line"></div>
                            <div></div>
                        </div>

                        <div class="two-col-timeline__row">
                            <div class="two-col-timeline__col-text">
                                 <router-link style="color:black" :to="{path: 'company/develop', hash: 'develop-list'}">
                                <div class="two-col-timeline__col-text-inner slide-in">
                                    <div class="two-col-timeline__text-wrapper">
                                       <h4 class="two-col-timeline__col-title">
                                           CRM開発
                                        </h4>
                                       <p class="two-col-timeline__col-supporting-text">
                                            <p><i class="fa fa-check"></i> 委託内容: 概要設計をインプット情報とし、設計・開発・検証</p>
                                            <p><i class="fa fa-check"></i> 開発環境: Java,ORACLE, Spring, Struts</p>
                                            <p><i class="fa fa-check"></i> 開発人月: 18人月</p>
                                            <p><i class="fa fa-check"></i> 開発期間: 5ヶ月</p>
                                        </p>
                                    </div>
                                    <div style="color: #e45b87; opacity: 0.1;" class="two-col-timeline__row-number">92MM</div>
                                </div>
                                 </router-link>
                                <div class="two-col-timeline__dash"></div>
                            </div>

                            <div class="two-col-timeline__line"></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="our-certificate">
                <svg class="wave-certificate" width="1440" height="522" viewBox="0 0 1440 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.29">
                        <path
                            d="M1506.86 124.119C1463.72 145.055 1377.44 213.095 1291.17 220.03C1204.89 227.488 1094.35 154.737 1009.47 136.68C918.447 117.315 859.778 148.98 773.5 176.458C687.222 203.935 600.944 232.722 514.667 225.263C428.389 218.329 342.111 176.458 255.833 176.458C169.556 176.458 83.2778 218.329 40.1389 239.264L-3 260.199V289.117C-3 289.117 32.5896 294.743 64.8359 282.182C106.034 266.088 179.909 246.461 261.226 247.115C334.67 247.769 380.181 277.209 435.938 296.313C568.159 341.848 675.359 387.251 811.031 414.729C946.703 442.207 1149.35 432.001 1285.02 403.607C1393.08 381.363 1434.17 347.474 1542.24 332.296C1544.72 331.903 1549.78 331.249 1549.78 331.249L1549.89 268.181V103.315L1506.86 124.119Z"
                            fill="#00A3FB"
                            fill-opacity="0.2"
                        ></path>
                        <path
                            d="M1555.61 377.569V0.730957L1518.62 14.7315C1481.62 28.2087 1407.86 56.9949 1333.44 84.4727C1259.78 111.95 1185.69 140.737 1112.36 189.15C1037.94 237.563 963.527 308.22 890.191 328.763C816.1 350.091 742.44 321.305 668.025 251.956C594.258 182.608 520.275 70.0796 445.86 49.5367C372.416 28.2087 298.109 98.8658 224.773 119.409C150.467 140.737 77.0226 111.95 39.2761 98.4732L-1.70583 84.4727L-3 260.723C-3 260.723 38.629 273.807 53.5119 285.06C120.269 335.174 136.446 335.567 179.585 330.726C229.195 325.23 266.834 281.397 335.425 265.826C355.7 261.246 382.77 262.293 419.006 288.986C470.989 327.193 489.107 358.334 505.823 371.288C506.255 371.681 506.686 371.942 507.225 372.335C507.657 372.727 508.196 373.251 508.951 373.905C519.196 384.111 552.845 414.991 586.709 437.758C629.416 466.413 689.163 489.704 689.163 489.704C788.167 518.229 1050.88 520.976 1248.89 521.369C1356.41 521.107 1463.94 504.751 1555.61 485.386"
                            fill="#00A3FB"
                            fill-opacity="0.2"
                        ></path>
                    </g>
                </svg>
                <div class="certificate-text-wrapper">
                    <h2 class="main-title">
                        Các chứng chỉ
                    </h2>
                </div>
                <section class="testimonial">
                    <div class="container">
                        <div class="container-fluid px-120">
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <div class="owl-carousel owl-theme testimonials-slides">
                                        <a class="portfolio-popup" @click="stop()" href="image/certificated/certified001.jpg">
                                            <div class="testimonial-item">
                                                <img src="image/certificated/certified001.jpg" alt="" class="img-fluid" />
                                            </div>
                                        </a>
                                        <a class="portfolio-popup" @click="stop()" href="image/certificated/certified002.jpg">
                                            <div class="testimonial-item">
                                                <img src="image/certificated/certified002.jpg" alt="" class="img-fluid" />
                                            </div>
                                        </a>
                                        <a class="portfolio-popup" @click="stop()" href="image/certificated/certified003.jpg">
                                            <div class="testimonial-item">
                                                <img src="image/certificated/certified003.jpg" alt="" class="img-fluid lg-2" />
                                            </div>
                                        </a>
                                        <a class="portfolio-popup" @click="stop()" href="image/certificated/certified004.jpg">
                                            <div class="testimonial-item">
                                                <img src="image/certificated/certified004.jpg" alt="" class="img-fluid" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="team">
                <div class="container">
                    <div class="row justify-content-center mb-custom">
                        <div class="col-lg-7 col-xl-7">
                            <div class="certificate-text-wrapper">
                                <h2 class="main-title">
                                    Thông tin khách hàng
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="image/customer/customer1.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>DNP Co.</h5>
                                    <p>CEO, Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="image/customer/customer2.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>Energia Co.</h5>
                                    <p>Market Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="image/customer/customer3.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>Eyemovic Co.</h5>
                                    <p>Content Writter</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item">
                                <img src="image/customer/customer3.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>ITEC Co.</h5>
                                    <p>Content Writter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact">
                <img src="image/upload/about/shape-17.svg" alt="" style="position: absolute;" class="img-fluid-2" />
                <div class="container">
                    <div class="row align-items-center justify-content-center mb-custom">
                        <div class="col-lg-7 col-xl-7">
                            <div class="certificate-text-wrapper">
                                <h2 class="main-title">
                                    Thông tin liên hệ
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <div class="contact-item">
                                        <p>Địa chỉ</p>
                                        <h4>Lầu 8, LANT Building 56-58-60 Hai Bà Trưng, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh.</h4>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <div class="contact-item">
                                        <p>Liên hệ</p>
                                        <h4>Ms.Ngân</h4>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6">
                                    <div class="contact-item">
                                        <p>Email</p>
                                        <h4>contact-info@allexceed.co.jp</h4>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-6 mb-4">
                                    <div>
                                        <p>Điện thoại</p>
                                        <h4>(+028) 3823 3202</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img src="image/background/lant-bg.jpg" style="scale: 1;" class="img-fluid-2" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Banner Section end -->
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class About extends BaseComponent {
        mounted(){
            window.core.ui.owlCarousel('play');
            window.core.ui.popup();
            this.$store.commit('fetchBreadcrumb', false);
        };

        public show(msg: any){
            alert(msg);
        }

        public stop(){
            window.core.ui.owlCarousel('stop');
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/about/home.scss";

    .mfp-zoom-out-cur,
    .mfp-zoom-out-cur .mfp-image-holder .mfp-close {
        cursor: pointer !important;
    }
</style>
