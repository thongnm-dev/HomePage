<template>
    <div class="container">
        <section class="introduction">
            <div class="background">
                <div class="sologan">
                    <h3>From Challenge Get Success ALL to EXCEEED</h3>
                </div>
            </div>
        </section>
        <section class="details">
            <div class="box box_philosophy">
                <h3>企業理念</h3>
                <div class="box_content">
                    <h4>Our Mission</h4>
                    <p>
                        <i class="fa fa-check"/>私達のソフトウェア製品、サービスによって<br>
                        <i class="fa fa-check"/>今後さらに高度化する情報システム、通信ネットワークを<br>
                        <i class="fa fa-check"/>より使いやすく、有益なものとすることを通じて、地域社会、国際社会に貢献します。
                    </p>
                    <h4>Our Way</h4>
                    <p>
                        <i class="fa fa-check"/>私達は礼節を重んじ、変化を厭わず、積極的に仕事に取り組みます。<br>
                        <i class="fa fa-check"/>私達は安価で高品質な製品・サービスを納期厳守でご提供します。<br>
                        <i class="fa fa-check"/>私達はお客様の真の満足を実現し、安心してお取引いただける会社を目指します。
                    </p>
                </div>
            </div>
            <div class="box box_sumary">
                <h3>会社概要</h3>
                <div class="box_content">
                    <table>
                        <tbody>
                            <tr>
                                <th width="20%">名称</th>
                                <td>アレクシード･ベトナム</td>
                            </tr>
                            <tr>
                                <th>英名称</th>
                                <td>ALLEXCEED VIETNAM INC</td>
                            </tr>
                            <tr>
                                <th>役員</th>
                                <td>
                                    <div class="row" style="margin-bottom: 1rem">
                                        <div class="col-md-6"><strong>代表取締役会長：</strong>岡部克二郎</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6"><strong>取締役社長：</strong>吉崎 敏（ホーチミン常駐）</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>所在地</th>
                                <td>8th Floor, LANT Building, 56-58-60 Hai Ba Trung, District 1, Ho Chi Minh City
                                    <a title="アクセスマップ" href="https://www.google.com/maps/place/ALLEXCEED+VIETNAM+INC./@10.7772491,106.7021946,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f4617bea349:0x5638eff0cb3a13e3!8m2!3d10.7772491!4d106.7043833?hl=vi" target="_blank">[MAP→]</a>
                                </td>
                            </tr>
                            <tr>
                                <th>設立</th>
                                <td>2010年1月</td>
                            </tr>
                            <tr>
                                <th>資本金</th>
                                <td>230,000USD</td>
                            </tr>
                            <tr>
                                <th>従業員数</th>
                                <td>61名</td>
                            </tr>
                            <tr>
                                <th>業務内容</th>
                                <td>Webアプリケーションを中心とした業務システム開発（オフショア開発）<br>
                                ベトナム国内企業に対するシステムソリューションの提案及びシステム開発<br>
                                ベトナム進出支援、日本語・ベトナム語の相互翻訳</td>
                            </tr>
                            <tr>
                                <th>品質</th>
                                <td>
                                    ISO 9001:2015, JIS Q 9001:2015の認証を取得しております。<br>
                                    お客様から要求仕様（基本設計書、詳細設計書等）を頂き、それを元に<br>
                                    <span style="padding-left: 1rem">① 開発初期段階での疑問点の洗い出しとQ&Aによる解決</span><br>
                                    <span style="padding-left: 1rem">②（必要に応じて）お客様からの仕様説明を頂いてから開発に着手しております。</span><br>
                                    テスト段階では<br>
                                    <span style="padding-left: 1rem">① 開発者（プログラマ）による単体テスト</span><br>
                                    <span style="padding-left: 1rem">② 管理者（あるいは他の開発者）による再テスト</span><br>
                                    を実施の上、テスト結果（スクリーンショットなどのエビデンス）を付けて納品しております。起きてしまった問題や<br>
                                    課題について日本人が原因分析・対策の内容をチェックし改善に向けての指導を行っております。<br>
                                </td>
                            </tr>
                            <tr>
                                <th>情報セキュリティ</th>
                                <td>
                                    ISO/IEC 27001:2013、JIS Q 27001:2014の認証を取得しております。<br>
                                    日本と同様の情報セキュリティマネジメントシステムに基づきで運営しておりますので安心してご発注頂けます。<br>
                                </td>
                            </tr>
                            <tr>
                                <th>加盟団体</th>
                                <td>ホーチミン日本商工会議所 (JCCH)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="box has_header box_greeting">
                 <h3>
                    <router-link :to="{name: 'greeting', params: {subdomain: subDomain}}"><span>社長ご挨拶</span></router-link>
                </h3>
                <div class="box_header">
                    <img src="/image/upload/recruit/director.png" alt="社長ご挨拶">
                </div>
                <div class="box_content">
                    <h3 class="name">社長：吉崎敏</h3>
                    <p class="show-alway">
                        人とテクノロジーで地域の変化のチカラとなる"をスローガンに、お客様（企業・自治体）の課題解決に貢献します。<br>
                        私たちがお客様、社会の課題解決をお手伝いすることで、自分逹の住む地域は勿論、関わる全ての地域が良くなればと考えています。<br>
                        人とテクノロジーで地域の変化のチカラとなる"をスローガンに、お客様（企業・自治体）の課題解決に貢献します。<br>
                        私たちがお客様、社会の課題解決をお手伝いすることで、自分逹の住む地域は勿論、関わる全ての地域が良くなればと考えています。<br>
                    </p>
                    <div class="dot-frame-button float-right">
                        <router-link :to="{name: 'greeting', params: {subdomain: subDomain}}"><span>Read more</span></router-link>
                    </div>
                </div>
            </div>
            <div class="box has_header box_history">
                <h3>
                    <router-link :to="{name: 'history', params: {subdomain: subDomain}}"><span>沿革</span></router-link>
                </h3>
                <div class="box_header">
                    <img src="/image/upload/recruit/history.jpg" alt="社長ご挨拶">
                </div>
                <div class="box_content">
                    <table>
                        <tbody>
                            <tr>
                                <th width="20%">1976年 8月</th>
                                <td>会社設立</td>
                            </tr>
                            <tr>
                                <th>1979年 4月</th>
                                <td>受託計算センター業務開始</td>
                            </tr>
                            <tr>
                                <th>1980年 4月</th>
                                <td>県下ではじめて医療機関向け診療報酬請求書の漢字化を実現</td>
                            </tr>
                            <tr>
                                <th>1982年 3月</th>
                                <td>現在地（津市丸之内）に自社ビルを建設</td>
                            </tr>
                            <tr>
                                <th>2020年 2月</th>
                                <td>プライバシーマーク認定（JIS-Q15001-2017）移行審査終了（予定）</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="dot-frame-button float-right">
                        <router-link :to="{name: 'history', params: {subdomain: subDomain}}"><span>Read more</span></router-link>
                    </div>
                </div>
            </div>
            <div class="box box_customer">
                <h3>
                    <router-link :to="{name: 'customer', params: {subdomain: subDomain}}"><span>お客様紹介</span></router-link>
                </h3>
                <div class="box_content">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="/image/customer/customer1.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>DNP Co.</h5>
                                    <p>CEO, Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="/image/customer/customer2.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>Energia Co.</h5>
                                    <p>Market Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item mb-4 mb-lg-0">
                                <img src="/image/customer/customer3.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>Eyemovic Co.</h5>
                                    <p>Content Writter</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team-item">
                                <img src="/image/customer/customer3.jpg" alt="" class="img-fluid-2" />
                                <div class="team-info">
                                    <h5>ITEC Co.</h5>
                                    <p>Content Writter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box box_contact">
                <h3>
                    <router-link :to="{name: 'contact', params: {subdomain: subDomain}}"><span>お問い合わせ</span></router-link>
                </h3>
                <iframe class="map-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8656472162742!2d106.7042580039365!3d10.777276468405473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f482dafe8e7%3A0x82da6458b028ca3a!2zNjAgSGFpIELDoCBUcsawbmcsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1603952533636!5m2!1svi!2s"
                    width="100%" height="450" frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="box_content">
                    <div class="row">
                        <div class="col-md-6 offset-3 group_info">
                            <p>
                                <strong>ベトナムオフショア開発に関するご質問、<br> 
                                    ALLEXCEED VIETNAM INC <br>
                                    電話番号: <a href="tel:(+028) 3823 3202">(+028) 3823 3202</a> <br>
                                    Eメールアドレス : <a href="mailto:contact-info@allexceed.co.jp">contact-info@allexceed.co.jp</a>
                                </strong>
                            </p>
                            <div class="dot-frame-button">
                                <router-link :to="{name: 'faq', params: {subdomain: subDomain}}"class="lfa--action-box">
                                    <span class="icon icon-look-for-answer-question"></span>
                                        Q&A
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    @Component
    export default class AboutUs extends BaseComponent {
        private mounted() {
            this.$store.commit('fetchBreadcrumb', true);
        }

        private get subDomain() {
            return this.$store.state.Global.isViewCareer? 'recruit' : 'company';
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/about.scss'
</style>
