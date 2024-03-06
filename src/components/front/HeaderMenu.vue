<template>
    <header id="header">
        <div class="logo">
            <a href="#" @click.prevent="homeClick($event)">
                <img src="/image/logo_allexceed.gif" alt="allexceed" title="Allexceed Viet Nam Inc">
            </a>
        </div>
        <div class="menu-container" v-if="isPageCareer">
            <nav>
                <ul class="menu_list">
                    <li class="menu_list_item">
                        <router-link :to="{name: 'about', params: {subdomain: 'recruit'}}">会社概要</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'service', params: {subdomain: 'recruit'}}">サービス情報</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'job-list'}" class="menu_list_item_has_child">採用情報</router-link>
                        <div class="menu_list_item_inner">
                            <ul class="menu_sublist">
                                <li class="menu_sublist_item">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'software-engineer'}}">ソフトウェアエンジニア(SE)</router-link>
                                </li>
                                <li class="menu_sublist_item">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'translator'}}">トランスレーター(TL)</router-link>
                                </li>
                                <li class="menu_sublist_item">
                                    <router-link :to="{name: 'detailt-job', params: {id: 'internship'}}">インターンシップ</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="menu_list_item">
                        <router-link :to="{name: 'event'}">イベント</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'blogs'}">Developer's Blog</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'contact', params: {subdomain: 'recruit'}}">お問い合わせ</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menu-container" v-if="!isPageCareer">
            <nav>
                <ul class="menu_list">
                    <li class="menu_list_item">
                        <router-link :to="{name: 'about', params: {subdomain: 'company'}}">会社案内</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'service', params: {subdomain: 'company'}}">サービス情報</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'develop'}">開発実績</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'security', params: {subdomain: 'company'}}">個人情報保護方針</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'certificate', params: {subdomain: 'company'}}">各種認証</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'customer', params: {subdomain: 'company'}}">お客様情報</router-link>
                    </li>
                    <li class="menu_list_item">
                        <router-link :to="{name: 'contact', params: {subdomain: 'company'}}">お問い合わせ</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="float-right cbox_language">
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    <img style="padding-right: 5px;" src="/image/common/lang/jp.png">日本語
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <img src="/image/common/lang/vn.png" style="padding-left: 5px; padding-right: 5px;">Tiếng Việt
                    </li>
                    <li>
                        <img src="/image/common/lang/jp.png" style="padding-left: 5px; padding-right: 5px;">日本語
                    </li>
                    <li>
                        <img src="/image/common/lang/us.png" style="padding-left: 5px; padding-right: 5px;">English
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<script lang="ts">
    import BaseComponent, {Component, Prop, Emit} from '@/utils/base-component';

    @Component
    export default class HeaderMenu extends BaseComponent {
        @Prop()
        public isPageCareer: boolean;

        @Emit("homeClick") 
        private homeClick(event: Event) {
            return false;
        }
    }
</script>
