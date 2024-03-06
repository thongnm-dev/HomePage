<template>
    <div class="row" v-if="hasPagination">
        <div class="container container-pagination" :class="AlignStyle">
            <div class="pagination">
                <ul>
                    <li v-bind:class="[ isPrev ? 'disabled' : '']">
                        <a href="#" @click.prevent="change(Pagination.currentPage - 1)">Pre</a>
                    </li>
                    <li v-for="page in pagesNumber" :key="page.index"
                         v-bind:class="[(page === '...' ? 'disabled' : ''), (page === isActived ? 'active' : '')]">
                         <a href="#" @click.prevent="change(page)">{{ page }}</a>
                    </li>
                    <li v-bind:class="[ isNext ? 'disabled' : '']">
                        <a href="#" @click.prevent="change(Pagination.currentPage + 1)">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component, Prop} from '@/utils/base-component';
    import {Paging} from '@/models/paginate.ts';

    @Component
    export default class Paginate extends BaseComponent {
        @Prop()
        Pagination: Paging;
        @Prop()
        AlignStyle: string;

        private hasPagination: boolean = true;

        get isPrev() {
            if (this.Pagination.currentPage === 1) {
                return true;
            } else {
                return false;
            }
        }

        get isNext() {
            if (this.Pagination.currentPage === this.Pagination.lastPage) {
                return true;
            } else {
                return false;
            }
        }

        get pagesNumber() {
            if (!this.Pagination.to) {
                return [];
            }
            let pagesArray = Array<any>();
            let isShowLast = false;
            var from = this.Pagination.currentPage - 4;
            if (from < 1) {
                from = 1;
            } else {
                from = this.Pagination.currentPage - 1;
                pagesArray.push(1);
                pagesArray.push("...");
            }
            var to = from + 4;
            if (to >= this.Pagination.lastPage) {
                to = this.Pagination.lastPage;
            } else {
                isShowLast = true;
            }
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            if (isShowLast) {
                pagesArray.push("...");
                pagesArray.push(this.Pagination.lastPage);
            }
            this.hasPagination = pagesArray.length > 0;
            return pagesArray;
        }

        get isActived() {
            return this.Pagination.currentPage;
        }

        private change(page: number): void {
            this.$emit('change', page);
        }
    }
</script>

<style lang="scss">
    @import '@/assets/sass/paging.scss';
</style>
