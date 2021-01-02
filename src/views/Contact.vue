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
              <p
                class="breadcrumbs"
                data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
              >
                <span class="mr-2"><a href="./">Trang chủ</a></span>
                <span>Liên hệ</span>
              </p>
              <h1
                class="mb-3"
                data-scrollax=" properties: { translateY: '70%', opacity: .9}"
              >
                Liện hệ ngay cho chúng tôi để để tư vấn ngay
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section contact-section ftco-degree-bg">
      <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4">
            <h2 class="h4">Thông tin liên hệ</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3">
            <p>
              <span>Địa chỉ:</span>	315H đường Cao Đạt, phường 1, quận 5, thành phố Hồ Chí Minh
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <span>Số diện thoại:</span> <a href="tel://(08)98313122">	(08) 98 31 31 22
</a>
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <span>Email:</span>
              <a href="mailto:info@yoursite.com">khopviet@gmail.com</a>
            </p>
          </div>
          <div class="col-md-3">
            <p><span>Website</span> <a href="#">khopviet.com</a></p>
          </div>
        </div>
        <div class="row block-9">
          <div class="col-md-6 pr-md-5">
            <form action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên khách hàng"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Địa chỉ email"
                />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Tiêu đề" />
              </div>
              <div class="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  class="form-control"
                  placeholder="Mô tả"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  value="Gửi yêu cầu"
                  class="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <!-- <div class="col-md-6" id="map"></div> -->
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.748614643888!2d106.6786208152602!3d10.753847362549571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f039035f8fd%3A0x56cf35165b90316d!2zMzE1IMSQxrDhu51uZyBDYW8gxJDhuqF0LCBQaMaw4budbmcgMSwgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1592204254230!5m2!1svi!2sus" width="50%" height="500" frameborder="0" style="border:0" allowfullscreen=""></iframe>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Contact"
};
</script>