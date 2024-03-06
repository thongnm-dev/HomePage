<template>
  <div id="customer">
      <div class="container">
            <div class="section-header">
                <section class="testimonial">
                     <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-7">
                                <div class="section-heading center-heading">
                                    <h3>Đối tác phát triển</h3>
                                    <p class="mt-4">
                                        Allexceed Vietnam Inc hiện là đối tác tin cậy có nhiều năm kinh nghiệm thực hiện những dự án lớn & phức tạp với những công nghệ mới nhất của hơn 100 khách hàng đến từ nhiều quốc gia trên thế giới.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid px-120">
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <div class="owl-carousel owl-theme testimonials-slides">
                                        <div class="testimonial-item">
                                            <img src="/image/customer/dnp.png" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    DNP Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/ec.png" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    Energia Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/eyemovic2.png" alt="" class="img-fluid lg-2" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    Eyemovic Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/itec2.jpg" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    ITEC Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/mitani.png" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    Mitani Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/playfull.png" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    Playful Co.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="testimonial-item">
                                            <img src="/image/customer/Symphonizer.jpg" alt="" class="img-fluid" />
                                            <div class="client-info">
                                                <div class="testionial-author">
                                                    Symphonizer Co.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </section>
                <section class="world">
                    <div class="container-fluid px-120">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <img class="img-fluid-3" src="/image/background/map.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  </div>
</template>

<script lang="ts">
import BaseComponent, { Component } from "@/utils/base-component";
@Component({})
export default class Customer extends BaseComponent {
    mounted(){
            window.core.ui.owlCarousel('play');
        };
}
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/about/customer.scss";
</style>
