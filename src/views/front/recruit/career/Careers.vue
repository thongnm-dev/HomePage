<template>
    <div id="careers">
        <div class="job-header">
            <div class="container">
                <div class="job-text">
                    <div class="row">
                        <div class="col-lg-10">
                            <h2>CƠ HỘI NGHỀ NGHIỆP TẠI ALLEXCEED VIETNAM INC</h2>
                            <p>
                                Mang tài năng của bạn đến ALLEXCEED VIETNAM và giúp chúng tôi tạo nên<br>một tương lai công nghệ rực rỡ nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <section>
                <article class="career_item">
                    <div class="row">
                        <div class="col col-md-4">
                            <img src="/image/upload/recruit/career001.png" alt="">
                        </div>
                        <div class="col col-md-7 offset-1">
                            <div class="row">
                                <div class="job_description">
                                    <div class="job_body">
                                        <div class="details">
                                            <div class="career_title">
                                                <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">
                                                    <h4>1. Tuyển dụng Software Engineer</h4>
                                                </router-link>
                                            </div>
                                            <div class="description">
                                                <i class="fa fa-check"/>実力のあるSEを目指す人には、絶好のフィールドです。<br>
                                                <i class="fa fa-check"/>私たちの仕事は、お客様に効率良く仕事を行って頂き、さらに満足して頂けるソフトウェアを開発することです。<br>
                                                <i class="fa fa-check"/>アレクシードで、開発からの第一歩を踏み出し、実力あるＳＥへ成長を目指しましょう。<br>
                                                <i class="fa fa-check"/>アレクシードでは、2021年4月に入社して頂ける、ソフトウェア開発技術者を志す、活気のある若い人材を募集しています。<br>
                                                <i class="fa fa-check"/>あなたの能力をぜひアレクシードで活かし、共に成長しませんか。<br>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-bottom">
                                        <div class="tag-list">
                                            <div class="job_skill">
                                                <span>Java</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>.Net</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Php</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Python</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Nodejs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row job-button">
                                <a class="btn btn-apply" href="#" @click="applyForm($event)">Apply Now</a>
                                <button class="btn btn-apply" type="button">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">Chi tiết</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="career_item">
                    <div class="row">
                        <div class="col col-md-4">
                            <img src="/image/upload/recruit/career002.png" alt="">
                        </div>
                        <div class="col col-md-7 offset-1">
                            <div class="row">
                                <div class="job_description">
                                    <div class="job_body">
                                        <div class="details">
                                            <div class="career_title">
                                                <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">
                                                    <h4>2. Tuyển dụng phiên dịch viên</h4>
                                                </router-link>
                                            </div>
                                            <div class="description">
                                                <i class="fa fa-check"/>実力のあるSEを目指す人には、絶好のフィールドです。<br>
                                                <i class="fa fa-check"/>私たちの仕事は、お客様に効率良く仕事を行って頂き、さらに満足して頂けるソフトウェアを開発することです。<br>
                                                <i class="fa fa-check"/>アレクシードで、開発からの第一歩を踏み出し、実力あるＳＥへ成長を目指しましょう。<br>
                                                <i class="fa fa-check"/>アレクシードでは、2021年4月に入社して頂ける、ソフトウェア開発技術者を志す、活気のある若い人材を募集しています。<br>
                                                <i class="fa fa-check"/>あなたの能力をぜひアレクシードで活かし、共に成長しませんか。<br>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-bottom">
                                        <div class="tag-list">
                                            <div class="job_skill">
                                                <span>N3</span>
                                            </div>
                                            <div class="job_skill link-skill" >
                                                <i class="fa fa-arrow-right"></i>
                                            </div>
                                            <div class="job_skill" >
                                                <span>N1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row job-button">
                                <a class="btn btn-apply" href="#" @click="applyForm($event)">Apply Now</a>
                                <button class="btn btn-apply" type="button">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">Chi tiết</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="career_item">
                    <div class="row">
                        <div class="col col-md-4">
                            <img src="/image/upload/recruit/career003.png" alt="">
                        </div>
                        <div class="col col-md-7 offset-1">
                            <div class="row">
                                <div class="job_description">
                                    <div class="job_body">
                                        <div class="details">
                                            <div class="career_title">
                                                <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">
                                                    <h4>3. Tuyển thực tập sinh</h4>
                                                </router-link>
                                            </div>
                                            <div class="description">
                                                <i class="fa fa-check"/>実力のあるSEを目指す人には、絶好のフィールドです。<br>
                                                <i class="fa fa-check"/>私たちの仕事は、お客様に効率良く仕事を行って頂き、さらに満足して頂けるソフトウェアを開発することです。<br>
                                                <i class="fa fa-check"/>アレクシードで、開発からの第一歩を踏み出し、実力あるＳＥへ成長を目指しましょう。<br>
                                                <i class="fa fa-check"/>アレクシードでは、2021年4月に入社して頂ける、ソフトウェア開発技術者を志す、活気のある若い人材を募集しています。<br>
                                                <i class="fa fa-check"/>あなたの能力をぜひアレクシードで活かし、共に成長しませんか。<br>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-bottom">
                                        <div class="tag-list">
                                            <div class="job_skill">
                                                <span>Java</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>.Net</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Php</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Python</span>
                                            </div>
                                            <div class="job_skill" >
                                                <span>Nodejs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row job-button">
                                <a class="btn btn-apply" href="#" @click="applyForm($event)">Apply Now</a>
                                <button class="btn btn-apply" type="button">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">Chi tiết</router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
        <AppyForm></AppyForm>
    </div>
</template>
<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    import AppyForm from '@/components/front/AppyForm.vue';
    import { unitOfWork } from "@/services/unit-of-work";
    
    @Component({
        components: {
            AppyForm
        }
    })
    export default class Careers extends BaseComponent {
        
        private applyForm(event: Event) {
            event.preventDefault();
            window.core.ui.openModal("registerModal");
            return false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/recruit/career.scss';
</style>
