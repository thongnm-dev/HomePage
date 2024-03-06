<template>
    <div class="modal fade modal_form" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Software Engineer<span>Allexceed VietNam</span></h5>
                </div>
                <div class="modal-body">
                    <form class="form-register form-validation" id="formRegister">
                        <input type="hidden" name="job_id" value="155" />
                        <input type="hidden" name="job_title" value="" />
                        <div class="row">
                            <div class="col-md-12 career-mt-1">
                                <h4 class="title1">Thông tin cá nhân</h4>
                                <div class="row">
                                    <div class="col-6 col-sm-6 col-md-6 has-danger">
                                        <input type="text" class="form-control" name="full_name" placeholder="Họ và tên*" />
                                        <div class="full_name-error form-control-feedback hidden"></div>
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 has-danger">
                                        <input type="text" class="form-control" name="phone" placeholder="Số điện thoại*" />
                                        <div class="phone-error form-control-feedback hidden"></div>
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 has-danger">
                                        <input type="email" class="form-control" name="email" placeholder="Địa chỉ email"/>
                                        <div class="email-error form-control-feedback hidden"></div>
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 has-danger">
                                        <select class="form-control" id="sex" name="sex">
                                            <option value="">Giới tính</option>
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                        </select>
                                        <div class="sex-error form-control-feedback hidden"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 has-danger">
                                <div class="row">
                                     <label class="col-6 col-sm-6 col-md-6 uniform">
                                        <input class="form-check-input" v-model="hasJanpanese" type="checkbox"/>Tiếng Nhật
                                    </label>
                                    <label class="col-6 col-sm-6 col-md-6 uniform" v-if="hasJanpanese">
                                        <select class="form-control select2" name="skill_word[]">
                                            <option value="">N1</option>
                                            <option value="1">N2</option>
                                            <option value="3">N3</option>
                                            <option value="4">N4</option>
                                            <option value="5">N5</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="language-error form-control-feedback hidden"></div>
                            </div>
                            <div class="col-md-6 file_attachment has-danger">
                                <div class="w-50 file-style">
                                    <p id="fileName"></p>
                                    <button class="btn btn-default btn_input_file" type="button">
                                        <span>Chọn file đính kèm</span>
                                    </button>
                                    <input type="file" id="file_path" name="file_path" class="input-file-hidden" accept=".doc,.docx,.pdf,.jpeg"/>
                                    <div class="file_path-error form-control-feedback hidden"></div>
                                </div>
                                <div class="w-50">
                                    <p>
                                        Định dạng file: <br />
                                        .doc, .docx, .pdf, .jpeg. <br />
                                        Kích thước file &lt 30Mb.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group has-success message hidden">
                                    <div class="form-control-feedback"></div>
                                </div>
                            </div>
                            <div class="col-md-12 text-center">
                                <button class="btn" type="submit">Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    @Component
    export default class AppyForm extends BaseComponent {
        private hasJanpanese: boolean = false;
    }
</script>
