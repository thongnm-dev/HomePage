<template>
  <div id="faq">
    <!-- Banner Section Start -->
    <section class="banner-2">
      <div class="container">
       
        <h1 class="title-banner" style="color:white">個人情報保護方針</h1>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
    <!-- Banner Section end -->

   <div class="page-wrapper">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-xl-12">
                <div class="post-single">
                    <div class="single-post-content">
                        <h4>基本方針</h4>
                        <p>
                            株式会社アレクシード（以下「当社」といいます。）の所有する情報資産は経営資産そのものであり、事業の継続および拡大のために非常に重要な要素です。<br/> 
                            その情報の機密性、完全性、可用性を確保することは、経営上の重要な課題です。
                        </p>
                        <br/>
                        <p>
                            また、情報資産を適切に維持管理することは、お客様に継続的かつ安全、安定的なサービスを実施するためには不可欠な前提条件です。<br/>
                            当社は情報やプロダクツおよびコンピュータやネットワークなどを情報資産と位置づけて、国際規格ISO/ＩＥＣ　27001及び、ＪＩＳ　Ｑ　27001に基づく情報セキュリティマネジメント<br/>
                            システム（ISMS）を構築し、維持・改善することにより、企業の社会的責任を果たします。<br/>
                        </p>
                    </div>
                    <div class="single-post-content">
                        <h4>活動方針</h4>
                        <p>
                           基本方針を達成するために、経営陣・ＩＳＭＳ管理責任者・ＩＳＭＳ推進委員会が中心となり、下記の事項を実施します。
                        </p>
                        <ul>
                            <li class="ml-4">
                                <p> <i class="fa fa-check"></i> 当社が保有する情報資産を認可されていない第三者アクセスから保護すること。（機密性）</p>
                                <p> <i class="fa fa-check"></i> 当社が保有する情報資産を認可されていない第三者に故意または不注意な行為により、開示しないこと。（機密性）</p>
                                <p> <i class="fa fa-check"></i> 認可されていない第三者のアクセスにより情報資産の改ざんなどから保護すること。（完全性）</p>
                                <p> <i class="fa fa-check"></i> 許可された利用者が必要なときに情報を利用できるようにすること。（可用性）</p>
                                <p> <i class="fa fa-check"></i> 国際規格ISO/ＩＥＣ27001に基づき、リスクアセスメント、及び、リスクマネジメントを行う。</p>
                                <p> <i class="fa fa-check"></i> 情報セキュリティに関する法規制等、及び、契約上の要求事項を遵守すること。</p>
                                <p> <i class="fa fa-check"></i> 事業継続計画を策定し、維持し、必要に応じてレビューすること。</p>
                                <p> <i class="fa fa-check"></i> 情報セキュリティ教育・訓練をすべての社員に対して、定期的に実施すること。</p>
                                <p> <i class="fa fa-check"></i> 情報セキュリティ違反とその疑いのある弱点がすべてＩＳＭＳ管理責任者に報告され対応すること。</p>
                                <p> <i class="fa fa-check"></i> ISMSの有効性を分析し継続的に改善を実施すること。</p>
                            </li>
                        </ul>
                         <p>
                           2006年8月1日 <br/>
                           株式会社アレクシード　　代表取締役社長　岡部 克二郎
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </div>
</template>

<script lang="ts">
import BaseComponent, { Component } from "@/utils/base-component";
@Component({})
export default class Faq extends BaseComponent {}
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/about/security.scss";
</style>
