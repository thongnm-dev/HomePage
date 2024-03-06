<template>
    <div id="career">
        <div class="container">
            <article class="career_item">
                <div class="container">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/328605143?autoplay=1" allow="autoplay; fullscreen"></iframe>
                            </div>
                        </div>
                        <div class="row">
                            <h3>Tuyển dụng Software Engineer</h3>
                        </div>
                        <div class="row">
                            <div class="job_reason_to_join_us">
                                <h4 class="title">Top 3 Reasons To Join Us</h4>
                                <div class="reasons">
                                    <ul>
                                        <li><i class="fa fa-check"/>Enjoyable Team Environment</li>
                                        <li><i class="fa fa-check"/>Engaging and Innovative Work</li>
                                        <li><i class="fa fa-check"/>13 month salary and bonus</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="job_description">
                                <div class="title-apply-line">
                                    <h4 class="title">Job Description</h4>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="description">
                                    <p>This position is responsible for serving as a technical expert; designing, 
                                        developing and maintaining high profile application software and software tools for large projects and 
                                        complex applications.<br><br>
                                        This position is also responsible for adhering to and promoting Allexceed VietNam vision and 
                                        values by performing duties in a manner that is consistent with being a team member and 
                                        supporting the continued growth of the company.
                                    </p>
                                </div>
                            </div>
                            <div class="skills_experience">
                                <h4 class="title">Your Skills and Experience</h4>
                                <div class="experience">
                                    <ul>
                                        <li><i class="fa fa-genderless"/>Software development on .NET platform project.</li>
                                        <li><i class="fa fa-genderless"/>Technical area involving parts as follows: C# / WinForms.</li>
                                        <li><i class="fa fa-genderless"/>Understanding of business logic.</li>
                                        <li><i class="fa fa-genderless"/>Creating development documents.</li>
                                        <li><i class="fa fa-genderless"/>Computer science degree or an equivalent degree.</li>
                                        <li><i class="fa fa-genderless"/>Understanding about data structure &amp; algorithm.</li>
                                        <li><i class="fa fa-genderless"/>Understanding about OOP.</li>
                                        <li><i class="fa fa-genderless"/>Good problem solving skills / Good communicating skills / Good team worker.</li>
                                        <li><i class="fa fa-genderless"/>Good English reading and writing ability. Basic English Oral communication ability</li>
                                        <li><i class="fa fa-genderless"/>Experiences in these fields is advantageous:
                                            <ul class="sub_skill">
                                                <li><i class="fa fa-minus"/>ASP.NET / MVC</li>
                                                <li><i class="fa fa-minus"/>Java</li>
                                                <li><i class="fa fa-minus"/>JavaScript</li>
                                                <li><i class="fa fa-minus"/>WPF / UWP<br>&nbsp;</li>
                                            </ul>
                                        </li>
                                        <li><i class="fa fa-genderless"/>Phát triển phần mềm trên nền tảng .NET.</li>
                                        <li><i class="fa fa-genderless"/>Công nghệ liên quan: C# / WinForms.</li>
                                        <li><i class="fa fa-genderless"/>Hiểu biết về nghiệp vụ logic.</li>
                                        <li><i class="fa fa-genderless"/>Tạo tài liệu phát triển.</li>
                                        <li><i class="fa fa-genderless"/>Có bằng cấp về khoa học máy tính hoặc tương đương.</li>
                                        <li><i class="fa fa-genderless"/>Có kiến thức về cấu trúc dữ liệu và giải thuật.</li>
                                        <li><i class="fa fa-genderless"/>Có kiến thức về lập trình hướng đối tượng.</li>
                                        <li><i class="fa fa-genderless"/>Kỹ năng giải quyết vấn đề tốt/ kỹ năng giao tiếp tốt/ Kỹ năng làm việc nhóm.</li>
                                        <li><i class="fa fa-genderless"/>Có khả năng đọc và viết tiếng anh, giao tiếp tiếng anh cơ bản.</li>
                                        <li><i class="fa fa-genderless"/>Có kinh nghiệm trong các lĩnh vực sau là một lợi thế.ASP.NET, MVC / Java / JavaScript / WPF / UWP</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="love_working_here">
                                <h4 class="title">Why You'll Love Working Here</h4>
                                <div class="culture_description">
                                    <p><strong>WHY ALLEXCEED VIETNAM?</strong></p>
                                    <p>- Flexible work hours in the morning between 8:00 AM - 9:00 AM</p>
                                    <p>- Annual Health check-up by famous hospitals</p>
                                    <p>- Annual summer vacation</p>
                                    <p>- Monthly team building budget</p>
                                    <p>- Comfortable and relaxing office setting with West Lake view</p>
                                    <p>- Free tea &amp; coffee corner</p>
                                    <p>- A variety of corporate events: sports competitions, monthly birthday parties, team building parties, 
                                        Family Day party, Year End party.</p><p>- 12 paid annual leave days</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-6 offset-3 align-content-center">
                                <a class="btn btn-apply" href="#" @click="applyForm($event)">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
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
    export default class Career extends BaseComponent {
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
