<template>
<div class="row justify-content-center">
    <div class="col-xl-5 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mt-4 font-weight-bold">
                                    Sign up
                                    <span class="d-block">Allexceed Viet Name Inc</span>
                                </h1>
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="hasError">
                                {{message}}
                            </div>
                            <div class="alert alert-success" role="alert" v-if="success">
                                {{message}}
                            </div>
                            <!-- Default form register -->
                            <form class="text-center border border-light">
                                <div class="form-row mt-4">
                                    <div class="col">
                                        <!-- First name -->
                                        <input type="text" id="FirstName" class="form-control" :class="hasErrs['FirstName']? 'error_required': ''" placeholder="First name" v-model="name" />
                                        <errorMessage :hasError="hasErrs['FirstName']" :message="errors['FirstName']"></errorMessage>
                                    </div>
                                    <div class="col">
                                        <!-- Last name -->
                                        <input type="text" id="LastName" class="form-control" :class="hasErrs['LastName']? 'error_required': ''" placeholder="Last name" v-model="last_name" />
                                        <errorMessage :hasError="hasErrs['LastName']" :message="errors['LastName']"></errorMessage>
                                    </div>
                                </div>

                                <!-- E-mail -->
                                <input type="text" id="Email" class="form-control mt-4" :class="hasErrs['Email']? 'error_required': ''" placeholder="E-mail" v-model="email" />
                                <errorMessage :hasError="hasErrs['Email']" :message="errors['Email']"></errorMessage>

                                <!-- Password -->
                                <input type="password" id="Password" class="form-control mt-4" :class="hasErrs['Password']? 'error_required': ''" placeholder="Password" v-model="password" aria-describedby="FormPasswordHelpBlock" />
                                <errorMessage :hasError="hasErrs['Password']" :message="errors['Password']"></errorMessage>

                                <!-- Phone number -->
                                <input type="text" id="PhoneNumber" class="form-control mt-4" :class="hasErrs['PhoneNumber']? 'error_required': ''" v-model="phone_number" placeholder="Phone number" />
                                <errorMessage :hasError="hasErrs['PhoneNumber']" :message="errors['PhoneNumber']"></errorMessage>

                                <!-- Address -->
                                <input type="text" id="Address" class="form-control mt-4" :class="hasErrs['Address']? 'error_required': ''" v-model="address" placeholder="Address" />
                                <errorMessage :hasError="hasErrs['Address']" :message="errors['Address']"></errorMessage>
                                <!-- Sign up button -->
                                <button class="btn btn-primary btn-user btn-block mt-4" type="button" @click="register()">Sign in</button>
                            </form>
                            <!-- Default form register -->
                            <hr />
                            <div class="text-center">
                                <!-- Login -->
                                <p>
                                    Have an account?
                                    <router-link to="/login">Login</router-link>
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

    @Component({
        components: {
            errorMessage,
        }
    })
    export default class Login extends BaseComponent {
        private email: string = "";
        private password: string = "";
        private name: string = "";
        private last_name: string = "";
        private phone_number: string = "";
        private address: string = "";
        private message: string = "";
        private hasError: boolean = false;
        private hasErrs: any = {};
        private success: boolean = false;
        private errors: any = {};

        private async register(): Promise<void> {
            this.isLoading = true;
            this.errors = [];
            if (!this.checkValidate()) {
                this.isLoading = false;
            } else {
                const fomrdata = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    full_name: this.last_name + ' ' + this.name,
                    phone_number: this.phone_number,
                    address: this.address
                }
                debugger
                const result = await unitOfWork.authenticationService.userRegister(fomrdata);
                if (result.isSuccess == "true") {
                    this.isLoading = false;
                    this.success = true;
                    this.message = "Account was created!";
                    setTimeout(() => {
                    this.goToPage('login');
                    }, 2000)
                    console.log('successs: ', result.data);
                } else {
                    debugger
                    this.isLoading = false;
                    this.hasError = true;
                    this.message = "Email already exists!";
                }
            }
            
        }

        private checkValidate() {
            this.errors = {};
                this.hasErrs['FirstName'] = false;
                this.hasErrs['LastName'] = false;
                this.hasErrs['PhoneNumber'] = false;
                this.hasErrs['Address'] = false;
                this.hasErrs['email'] = false;
                this.hasErrs['Email'] = false;
                this.hasErrs['Password'] = false;
                
            if (!this.name) {
                this.hasErrs['FirstName'] = true;
                this.errors['FirstName'] = 'First Name required.';
            }
            
            if (!this.last_name) {
                this.hasErrs['LastName'] = true;
                this.errors['LastName'] = 'Last Name required.';
            }
            if (!this.email) {
                this.hasErrs['Email'] = true;
                this.errors['Email'] = 'Email required.';
            } else if (!this.validEmail(this.email)) {
                this.hasErrs['Email'] = true;
                this.errors['Email'] = 'Valid email required.';
            }
            if (!this.password) {
                this.hasErrs['Password'] = true;
                this.errors['Password'] = 'Password required.';
            }
            
            if (!this.phone_number) {
                this.hasErrs['PhoneNumber'] = true;
                this.errors['PhoneNumber'] = 'Phone Number required.';
            }
            
            if (!this.address) {
                this.hasErrs['Address'] = true;
                this.errors['Address'] = 'Address required.';
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
