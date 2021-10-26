<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      py-28 py-md-7
      border border-1 border-gray
    "
  >
    <div
      class="
        container
        d-flex
        justify-content-end
        align-items-center
        position-relative
      "
    >
      <h1
        class="
          d-flex
          align-items-center
          position-absolute
          top-50
          start-50
          translate-middle
        "
      >
        <a
          href="https://wafflefrank.github.io/RollDice-Lobby/"
          class="navbar-brand text-primary fs-3 fw-bold fz-md-larger p-0"
          >Gayer娛樂城</a
        >
      </h1>
      <!-- 登入 / 註冊 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto" v-if="memberForm.login === false">
          <li class="nav-item me-md-32">
            <a
              class="nav-link p-0 link-secondary"
              href="https://wafflefrank.github.io/RollDice_Login/"
              >登入</a
            >
          </li>
          <li class="nav-item me-md-32">
            <a
              class="nav-link p-0 link-secondary"
              href="https://wafflefrank.github.io/RollDice_Login/"
              >註冊</a
            >
          </li>
        </ul>
        <!-- 會員登入後 -->
        <ul class="navbar-nav ms-auto" v-if="memberForm.login === true">
          <li class="nav-item me-md-32">
            {{ memberForm.name }}
          </li>
          <li class="nav-item me-md-32">${{ memberForm.money }}</li>
        </ul>
        <!-- //會員登入後 -->
      </div>
      <!-- 購物車 -->
      <button
        type="button"
        class="btn moneyPig d-flex position-relative p-0 "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        <span class="material-icons material-icons-outlined"
          ><span class="material-icons-outlined"> monetization_on </span>
        </span>
        <span
          class="
            position-absolute
            translate-middle
            badge
            rounded-pill
            bg-secondary
          "
        ></span>
      </button>
    </div>
  </nav>
  <router-view />
  <footer class="py-4 py-md-7">
    <div class="container d-flex align-items-center">
      <div class="d-flex align-items-center">
        <p class="fs-4 me-3 fw-bold">Gayer娛樂城</p>
        <p>© 2021. COPYRIGHT Reserved.</p>
      </div>
      <ul class="list-unstyled d-flex align-items-center ms-auto">
        <li class="me-4">
          <a href="#" class="link-secondary">登入</a>
        </li>
        <li class="me-4">
          <a href="#" class="link-secondary">註冊</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>

// import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: 'http://192.168.1.104:4000',
      memberForm: {
        login: false,
        id: 0,
        name: '王大天',
        account: 'user001',
        pwd: '123123123',
        email: 'aaa@gmail.com',
        status: 1,
        money: 50000,
        swiperName: 'swiper',

      },
    };
  },
  methods: {},
  mounted() {
    console.log(this.memberForm.money);
    console.log(this.memberForm.pwd);
    // const mySwiper = new Swiper('.swiper', {
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //   },
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap";
</style>
