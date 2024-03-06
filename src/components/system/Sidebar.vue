<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/admins">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink">
                </i>
            </div>
            <div class="sidebar-brand-text mx-3">Allexceed Viet Nam Inc</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-briefcase"></i>
                <span>Quản lý master</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <router-link class="collapse-item" to="/admins/about">About</router-link>
            </div>
            </div>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/admins/event">
                <i class="fa fa-bullhorn"></i>
                Sự kiện
            </router-link>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" aria-hidden="true" id="sidebarToggle"></button>
        </div>

    </ul>
</template>


<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class Sidebar extends BaseComponent {

    }
</script>
