<template>
  <div>
    新增葉面
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <router-link
            to="/newpage/childa"
            href="#"
            class="list-group-item list-group-item-action"
          >
            元件A頁面
          </router-link>
          <router-link
            to="/newpage/childb"
            href="#"
            class="list-group-item list-group-item-action"
          >
            元件B頁面
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
