<template>
  <div>
    <section class="home-slider owl-carousel">
      <div
        class="slider-item bread-item"
        style="background-image: url('../assets/images/bg_1.jpg')"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container" data-scrollax-parent="true">
          <div class="row slider-text align-items-end">
            <div class="col-md-7 col-sm-12 ftco-animate mb-5">
              <!-- <p
                class="breadcrumbs"
                data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
              >
                <span class="mr-2"><a href="index.html"></a></span>
                <span>Xin lỗi :(</span>
              </p> -->
              <h1
                class="mb-3"
                data-scrollax=" properties: { translateY: '70%', opacity: .9}"
              >
                Hiện trang này không tồn tại :(
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>