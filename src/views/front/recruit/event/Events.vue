<template>
    <div class="container" id="event_list">
        <div class="row blog-posts">
            <div class="post-outer col-xl-4 col-lg-12 col-md-6" v-for="n in 9" :key="n">
                <div class="post clearfix">
                    <div class="post-thumbnail">
                        <router-link class="lazyloaded" :style="style(n)"  :to="{name: 'evtDetail', params: {url: 'donec-dolor-elit-pellentesque-a-massa-pellentesque'}}"></router-link>
                    </div>
                    <article>
                        <div class="post-canvas">
                            <div class="post-details">
                                <h3 class="post-title h4">
                                    <router-link :to="{name: 'evtDetail', params: {url: 'Donec-dolor-elit-pellentesque-a-massa-pellentesque'}}">Donec dolor elit, pellentesque a massa pellentesque.</router-link>
                                </h3>
                                <div class="post-meta">
                                    <span class="post_author">
                                        <i class="fa fa-pencil-alt"></i>
                                        <span class="fn">
                                            <span itemprop="name">Admin</span>
                                        </span>
                                    </span>
                                    <span class="post_timestamp">
                                        <i class="fa fa-clock"></i>May 25, 2018
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        <Paginate :Pagination="pagination" :AlignStyle="'right'" @change="changePage"></Paginate>
    </div>
</template>
<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    import Paginate from '@/components/general/Paginate.vue';
    import {Paging} from '@/models/paginate.ts';

    @Component({
        components: {
            Paginate
        }
    })
    export default class Events extends BaseComponent {
        private pagination: Paging = {
            pageCount: 4,
            currentPage: 1,
            lastPage: 4,
            from: 1,
            to: 4,
        };
        private style(idx: string): string {
            return "background: url('/image/upload/recruit/event/img-" + idx + ".jpg');";
        }
         private changePage(page: number): void {
            this.pagination.currentPage = page;
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/recruit/event.scss';
</style>
