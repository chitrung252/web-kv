<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html"
          >PHÒNG KHÁM <span>KHỚP VIỆT</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Danh sách
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="./" class="nav-link">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a href="./about" class="nav-link">Thông tin</a>
            </li>
            <li class="nav-item">
              <a href="./service" class="nav-link">Chuyên môn</a>
            </li>
            <li class="nav-item">
              <a href="./doctor" class="nav-link">Bác sĩ</a>
            </li>
            <li class="nav-item">
              <a href="./blog" class="nav-link">Bài viết</a>
            </li>
            <li class="nav-item">
              <a href="./contact" class="nav-link">Liên hệ</a>
            </li>
            <li class="nav-item cta">
              <a
                href="contact.html"
                class="nav-link"
                data-toggle="modal"
                data-target="#modalRequest"
                ><span>Đăt lịch hẹn</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>