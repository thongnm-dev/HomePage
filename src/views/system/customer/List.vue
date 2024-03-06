<template>
    <div id="admin-customers-list">
        <div class="card shadow mb-5 card-search">
            <div class="card-header py-3" data-toggle="collapse" data-target="#collapseSearch" aria-controls="collapseSearch">
                <h6 class="m-0 font-weight-bold text-primary">Tìm kiếm
                    <i class="fa fa-chevron-up rotate-icon"></i>
                </h6>
            </div>
            <div class="card-body collapse show" id="collapseSearch">
                <div class="above row col-md-12 justify-content-end">
                    <button type="button" class="btn btn-md btn-success col-md-1 cus-button">
                    <!-- <button @click="add" class="btn btn-md btn-success col-md-1 cus-button"> -->
                        <i class="fa fa-plus-square"></i>
                        <span>Thêm mới</span>
                    </button>
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <div class="form-inline">
                                <div class="form-label">
                                    <label>Từ khóa</label>
                                </div>
                                <input type="text" class="form-control cus-input" v-model="keyWorks" placeholder="Nhập từ khóa">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <div class="form-inline">
                                <div class="form-label">
                                    <label>Ngôn ngữ</label>
                                </div>
                                <select class="form-control cus-select" style="color: #333;" v-model="language_selected">
                                    <option value="1">English</option>
                                    <!-- <option v-for="(itm, idx) in getLanguages" :key="idx" v-bind:value="itm.id">{{itm.language}}</option> -->
                                </select>  
                            </div>
                        </div>
                        
                    </div>
                    <div class="row col-12 justify-content-center">
                        <div class="col-sm-3 form-group">
                            <button type="button" class="btn btn-md btn-primary" @click="loadData()">
                                <i class="fa fa-search-plus"></i>
                                <span>Tìm kiếm</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-5 card-list">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Danh sách khách hàng</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="scrollTable table table-bordered table-striped" id="targetTable" width="100%" cellspacing="0">
                        <colgroup>
                            <col style="width: 40px !important">
                            <col style="width: 90px !important">
                            <col style="width: 90px !important">
                            <col style="width: 90px !important">
                            <col style="width: 80px !important">
                            <col style="width: 80px !important">
                            <col style="width: 90px !important">
                            <!-- <col style="width: 3%">
                            <col style="width: 12%">
                            <col style="width: 12%">
                            <col style="width: 38%">
                            <col style="width: 10%">
                            <col style="width: 10%">
                            <col style="width: 15%"> -->
                        </colgroup>
                        <thead>
                            <tr>
                                <th class="th-1">ID</th>
                                <th class="th-2">Mã khách hàng</th>
                                <th class="th-3">Tên khách hàng</th>
                                <th class="th-4">Thông tin khách hàng</th>
                                <th class="th-5">Ngày tạo</th>
                                <th class="th-6">Người tạo</th>
                                <th class="th-7"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="noData">
                                <td class="dataTables_empty" colspan="9">Không có dữ liệu</td>
                            </tr>
                            <tr v-for="(customer, index) in customerList" :key="index">
                                <td class="align-center"></td>
                                <td>{{customer.customer_no}}</td>
                                <td>{{customer.customer_name}}</td>
                                <td>{{customer.customer_info}}</td>
                                <td></td>
                                <td></td>
                                <td class="align-center">
                                    <button class="btn btn-primary btn-sm">Sửa</button>
                                    <button class="btn btn-danger btn-sm">Xóa</button>
                                    <!-- <button class="btn btn-primary btn-sm" @click="edit(customer.id)">Sửa</button>
                                    <button class="btn btn-danger btn-sm" @click="remove(customer.id)">Xóa</button> -->
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Paging from '../../../share/Paging.vue';
    import { unitOfWork } from "@/services/unit-of-work";
import Create from './Create.vue';
    @Component({
        components: {
            // Paging
        }
    })
    export default class List extends Vue {
        private customerList: [] = [];
        private languages: Array<any> = [];
        private language_selected: number = -1;
        private keyWorks: string = '';
        async mounted() {
            console.log('1');
            await this.loadData();
        }

        // get getLanguages() {
        //     this.languages = this.$store.getters.languages;
        //     if (this.languages.length > 0) {
        //         this.language_selected = this.languages[0].id;
        //     }
        //     console.log(this.language_selected);
        //     return this.languages;
        // }

        private async loadData(): Promise<void> {
            try {
                let postRequest = {
                    language_id: 1,//this.language_selected,
                    keyWork: this.keyWorks,
                    pageNumber: 1
                };
                let result = await unitOfWork.customerService.getList(postRequest);
                debugger
                this.customerList = result;
            } catch (error) {
                this.$router.push({name: 'error'})
            }
        }
       
       get noData() {
            console.log('2');
            return !(this.customerList.length > 0);
        }
    }
</script>
