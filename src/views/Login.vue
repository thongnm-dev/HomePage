<template>
        <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4 font-weight-bold">
                                        Sign in
                                        <span class="d-block">Allexceed Viet Name Inc</span>
                                    </h1>
                                </div>
                                <form class="user">
                                    <div class="form-group">
                                        <input type="text" class="form-control form-control-user" :class="hasErrs['email']? 'error_required': ''" id="txtEmail" aria-describedby="emailHelp" v-model="email" placeholder="Email" />
                                        <errorMessage :hasError="hasErrs['email']" :message="errors['email']"></errorMessage>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user" :class="hasErrs['password']? 'error_required': ''" id="txtPassword" v-model="password" placeholder="Password"/>
                                        <errorMessage :hasError="hasErrs['password']" :message="errors['password']"></errorMessage>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck" v-model="rememberMe"/>
                                            <label class="custom-control-label" for="customCheck">Remember me</label>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-user btn-block" @click="onLogin()">Sign in</button>
                                </form>
                                <hr />
                                <div class="text-center">
                                    <!-- Register -->
                                    <p>Not a member?
                                        <router-link to="/register">Register</router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    import { unitOfWork } from "@/services/unit-of-work";
    import _ from '@/utils/helper';
    import constant from '@/utils/constant';
    import errorMessage from '@/components/system/errorMessage.vue';
    import {store} from '../store';

    @Component({
        components: {
            errorMessage,
        }
    })
    export default class Login extends BaseComponent {
        private email: string = "";
        private password: string = "";
        private rememberMe: boolean = false;
        private hasError: boolean = false;
        private hasErrs: any = {};
        private errors: any = {};
        private message: string = "";

        private async onLogin(): Promise<void> {
            this.isLoading = true;
            if(!this.checkValidate()){
                this.isLoading = false;
                this.hasError = true;
            } else {
                const result = await unitOfWork.authenticationService.userLogin(this.email, this.password);
                if (result !== null) {
                    var tokenExpireDate = this.rememberMe ? (new Date(new Date().getTime() + 1000 * parseInt(result.expiredTime))) : undefined;
                    console.log('2:, ', store);
                    _.core.utils.setCookieValue(constant.authorization.encrptedAuthTokenName, result.accessToken, tokenExpireDate, constant.appDomain);
                    const user = await unitOfWork.authenticationService.getUser();
                    localStorage['user'] = JSON.stringify(user);
                    store.commit('Auth/loginSuccess', user,{root: true});
                    let url = this.$route.query.returnUrl;
                    url = url === null? '': url.toString();
                    if (url !== ''){
                        this.goToPage(url);
                    }
                    else {
                        this.goToPage('/home');
                    }
                    this.goToPage(url);
                    this.isLoading = false;
                }

            }
            
        }

        private checkValidate() {
            this.errors = {};
                this.hasErrs['email'] = false;
                this.hasErrs['password'] = false;
            if (!this.email) {
                this.hasErrs['email'] = true;
                this.errors['email'] = 'Email required.';
            } else if (!this.validEmail(this.email)) {
                this.hasErrs['email'] = true;
                this.errors['email'] = 'Valid email required.';
            }
            if (!this.password) {
                this.hasErrs['password'] = true;
                this.errors['password'] = 'Password required.';
            }
            if (!Object.keys(this.errors).length) {
                return true;
            }
            return false;
        }

        private validEmail(email: string){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
</script>
<style lang="scss">
    @import '@/assets/sass/login.scss';
</style>