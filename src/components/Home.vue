<template>
  <div class="">
    <template v-for="(panel, idx) in panelMap" >
      <div class="panel position-relative w-100 d-table" v-bind:key="idx">
        <div class="panel-back position-absolute h-100 w-100">
          <div class="panel-back-img h-100 w-100" v-bind:class="[`panel-back-img-${panel}`]" />
        </div>
        <div class="d-table-cell align-middle">
          <div class="d-flex">
            <div class="position-relative">
              <h1>He</h1>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      panelMap: [1,2,3,4,5]
    }
  }
}
</script>

<style>

.panel {
  height: 110vh;
}

.panel-back {
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
}

.panel-back-img {
  /* height: 110vh; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.panel-back-img-1 {
  background-image: url("./home/iu0.jpeg")
}
.panel-back-img-2 {
  background-image: url("./home/twice1.jpg")
}
.panel-back-img-3 {
  background-image: url("./home/twice6.jpg")
}
.panel-back-img-4 {
  background-image: url("./home/twice3.jpg")
}
.panel-back-img-5 {
  background-image: url("./home/blackpink0.jpeg")
}

</style>
