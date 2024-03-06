<template>
    <div class="content">
        <div>
            <div class="header-curve">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 88.67" width="100%" height="88.67" preserveAspectRatio="none">
                    <path d="M720 88.67c90 0 288.91-36 720-36V0H0v52.67c430 0 630 36 720 36z" fill="#fff"></path>
                </svg>
            </div>
            <div class="hero ">  
                <div class="wrapper">
                    <div class="hero_content">
                        <h1>ALLEXCEED VIETNAM INC</h1>
                        <h3>
                            <span>Là một công ty phát triển phần mềm được thành lập bởi 100% vốn đầu tư của công ty <a target="_blank" href="https://www.allexceed.co.jp">ALLEXCEED Nhật Bản.</a></span>
                        </h3>
                        <ul>
                            <li><i class="fa fa-check"></i>Với hơn 10 năm hoạt động trong lĩnh vực outsourcing, chúng tôi đã tạo ra rất nhiều sản phẩm phần mềm cung cấp cho khách hàng Việt Nam và Nhật Bản.</li>
                            <li><i class="fa fa-check"></i>Công ty có một đội ngũ nhân viên trẻ không ngại thay đổi, và làm việc một cách tích cực để đáp ứng đúng nhu cầu của khách hàng.</li>
                            <li><i class="fa fa-check"></i>Tạo điều kiện cho các kĩ sư trẻ Việt Nam đi học tập và làm việc tại Nhật Bản.</li>
                        </ul>
                        <div class="dot-frame-button">
                            <router-link :to="{name: 'about', params: {subdomain: 'recruit'}}" class="all-btn">Read More</router-link>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 140" class="curve-bottom"><path d="M0,115c158.5,0,162.37-77.51,518.05-25.18,292.31,32.82,470-81.65,594.19-89C1268.18-8.5,1321,74.88,1441,75c0,0,0,113,0,113H0S0,115,0,115Z" fill="#efefef"></path></svg>
            </div>
        </div>
        <hr>
        <div class="container benefit">
            <div class="row header">
                <div class="col-col-md-12 offset-4">
                    <h1>ALLEXCEED BENEFITS</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="box">
                        <a href="#">
                            <div class="icon health"></div>
                            <p class="description"><span>Healthy Care</span>
                                Search engines. Digital ads. Social media. Wherever your audience is spending their time, your brand needs to be front and center.</p>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="box">
                        <a href="#">
                            <div class="icon bonus"></div>
                            <p class="description"><span>Bonus twice year</span>
                                Google gets crowded. Your SEO strategy should cut through the noise and put you as the leading voice of your industry.</p>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="box">
                        <a href="#">
                            <div class="icon holiday"></div>
                            <p class="description"><span>Travel</span>
                                Not all leads are created equal. Aligning with sales is crucial for getting the right people in your pipeline to fuel revenue growth.</p>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="box">
                        <a href="#">
                            <div class="icon education"></div>
                            <p class="description"><span>Education</span>
                                When visitors want to learn more from you, make it easy for them to reach out. Build frictionless lead generation paths.</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="row career">
            <div class="col col-col-lg-12 justify-align-content-between">
                    <h1 class="">ALLEXCEED CAREERS</h1>
            </div>
        </div>
        <div class="container">
            <div class="row" id="career">
                <div class="col-md-4">
                    <div class="features_list">
                        <div class="item-course">
                            <div class="img">
                                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80">

                            </div>
                            <div class="content">
                                <h3><a href="#">ソフトウェアエンジニア(SE)</a>
                                </h3>
                            </div>
                        </div>
                        <div class="detail-course">
                            <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">
                            <h3><router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">ソフトウェアエンジニア(SE)</router-link></h3>
                            <p class="descrip s15">
                                Khởi nghiệp là một hành trình thú vị nhưng cũng lắm gian nan.
                                Chính vì
                                sự
                                gian
                                nan đó mà đôi khi những người khởi nghiệp chỉ tập trung vào sản
                                phẩm
                            </p>
                            <ul class="list magb10">
                                <li class="flex align-i-center">
                                    <span>12 chương</span>
                                    <span class="line"></span>
                                    <span>18 giờ học</span>
                                </li>
                                <li>Kỹ năng từ chối khách hàng</li>
                                <li>Tự tin giao tiếp</li>
                            </ul>
                            <p class="text-center mag0">
                                <a href="#" class="btn-orange" @click.prevent="applyNow($event)">Apply ngay</a>
                            </p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="features_list">
                        <div class="item-course">
                            <div class="img">
                                <img src="https://images.unsplash.com/photo-1553484771-11998c592b9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">

                            </div>
                            <div class="content">
                                <h3>
                                    <router-link :to="{name: 'detailt-job', params: {id: 'translator'}}">トランスレーター(TL)</router-link>
                                </h3>
                            </div>
                        </div>
                        <div class="detail-course">
                            <router-link :to="{name: 'detailt-job', params: {id: 'translator'}}">
                            <h3>
                                <router-link :to="{name: 'detailt-job', params: {id: 'translator'}}">トランスレーター(TL)</router-link>
                            </h3>
                            <p>
                                Khởi nghiệp là một hành trình thú vị nhưng cũng lắm gian nan.
                                Chính vì
                                sự
                                gian
                                nan đó mà đôi khi những người khởi nghiệp chỉ tập trung vào sản
                                phẩm
                            </p>
                            <ul class="list magb10">
                                <li class="flex align-i-center">
                                    <span>12 chương</span>
                                    <span class="line"></span>
                                    <span>18 giờ học</span>
                                </li>
                                <li>Kỹ năng từ chối khách hàng</li>
                                <li>Tự tin giao tiếp</li>
                            </ul>
                            <p class="text-center mag0">
                                <a href="#" class="btn-orange" @click.prevent="applyNow($event)">Apply ngay</a>
                            </p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                   <div class="features_list">
                        <div class="item-course">
                            <div class="img">
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link :to="{name: 'detailt-job', params: {id: 'internship'}}">インターンシップ</router-link>
                                </h3>
                            </div>
                        </div>
                        <div class="detail-course">
                             <router-link :to="{name: 'detailt-job', params: {id: 'internship'}}">
                            <h3>
                                <router-link :to="{name: 'detailt-job', params: {id: 'internship'}}">インターンシップ</router-link>
                            </h3>
                            <p class="descrip s15">
                                Khởi nghiệp là một hành trình thú vị nhưng cũng lắm gian nan.
                                Chính vì
                                sự
                                gian
                                nan đó mà đôi khi những người khởi nghiệp chỉ tập trung vào sản
                                phẩm
                            </p>
                            <ul class="list magb10">
                                <li class="flex align-i-center">
                                    <span>12 chương</span>
                                    <span class="line"></span>
                                    <span>18 giờ học</span>
                                </li>
                                <li>Kỹ năng từ chối khách hàng</li>
                                <li>Tự tin giao tiếp</li>
                            </ul>
                            <p class="text-center mag0">
                                <a href="#" class="btn-orange" @click.prevent="applyNow($event)">Apply ngay</a>
                            </p>
                             </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row career">
            <div class="col col-col-lg-12 justify-align-content-between">
                <h1 class="">スタッフの声</h1>
            </div>
        </div>
        <div class="container">
            <div class="staff">
                <section class="interview interview-01 interview-odd">
                    <div class="container clearfix">
                        <div class="interview_text block_text">
                            <div data-aos="fade" data-aos-duration="500" class="aos-init aos-animate">
                            <div class="interview_text_label wf">STAFF VOICE 01</div>
                            <h3 class="interview_text_title">Love working with Allexceed VietNam! The team is very responsive, fast and helpful and they are very organized!</h3>
                            <div class="btn_area"><a href="/recruit/voice01/" class="btn over">インタビューを読む</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="interview interview-02 interview-even">
                    <div class="container clearfix">
                        <div class="interview_text block_text">
                            <div data-aos="fade" data-aos-duration="500" class="aos-init">
                            <div class="interview_text_label wf">STAFF VOICE 02</div>
                            <h3 class="interview_text_title">I have loved working with Allexceed VietNam, they have done everything for us from the top down. </h3>
                            <div class="btn_area"><a href="/recruit/voice02/" class="btn over">インタビューを読む</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="interview interview-03 interview-odd">
                    <div class="container clearfix">
                        <div class="interview_text block_text">
                            <div data-aos="fade" data-aos-duration="500" class="aos-init">
                            <div class="interview_text_label wf">STAFF VOICE 03</div>
                            <h3 class="interview_text_title">We have been through three website designs and multiple projects with Allexceed VietNam and have never been disappointed.</h3>
                            <div class="btn_area"><a href="/recruit/voice03/" class="btn over">インタビューを読む</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <AppyForm></AppyForm>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    import AppyForm from '@/components/front/AppyForm.vue';

    @Component({
        components: {
            AppyForm
        }
    })
    export default class Recruit extends BaseComponent {
        private applyNow(event: Event) {
            window.core.ui.openModal("registerModal");
            return false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/recruit/home.scss'
</style>
