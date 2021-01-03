<template>
  <body>
    <!-- Nav -->
    <section class="home-slider owl-carousel">
      <div
        class="slider-item"
        style="background-image: url('./assets/images/bg_1.jpg')"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text align-items-center"
            data-scrollax-parent="true"
          >
            <div
              class="col-md-6 col-sm-12 ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                class="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Phòng khám chấn thương chỉnh hình
              </h1>
              <p
                class="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Do các bác sĩ đang công tác tại bệnh viện Chấn thương Chỉnh hình
                TP.HCM “Đau xương khớp, có chúng tôi”
              </p>
              <p
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                <a href="#" class="btn btn-primary px-4 py-3">Đặt lịch hẹn</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="slider-item"
        style="background-image: url('./assets/images/bg_2.jpg')"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text align-items-center"
            data-scrollax-parent="true"
          >
            <div
              class="col-md-6 col-sm-12 ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                class="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Phòng khám chấn thương chỉnh hình
              </h1>
              <p class="mb-4">
                Do các bác sĩ đang công tác tại bệnh viện Chấn thương Chỉnh hình
                TP.HCM “Đau xương khớp, có chúng tôi”
              </p>
              <p>
                <a href="#" class="btn btn-primary px-4 py-3"
                  >Đặt lịch hẹn</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-intro">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-3 color-1 p-4">
            <h3 class="mb-4">Liên hện khẩn</h3>
            <p>Chúng tôi luôn sẵn sàng cho những cuộc gọi khẩn từ bệnh nhân</p>
            <span class="phone-number">098 7736853</span>
          </div>
          <div class="col-md-3 color-2 p-4">
            <h3 class="mb-4">Giờ mở cửa</h3>
            <p class="openinghours d-flex">
              <span>Thứ 2 - Thứ 6</span>
              <span>8:00 - 19:00</span>
            </p>
            <p class="openinghours d-flex">
              <span>Thứ 7</span>
              <span>10:00 - 17:00</span>
            </p>
            <p class="openinghours d-flex">
              <span>Chủ nhật</span>
              <span>10:00 - 16:00</span>
            </p>
          </div>
          <div class="col-md-6 color-3 p-4">
            <h3 class="mb-2">Đặt lịch hẹn</h3>
            <form action="#" class="appointment-form">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="select-wrap">
                      <div class="icon">
                        <span class="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" class="form-control">
                        <option value="">Cột sống</option>
                        <option value="">Chi trên</option>
                        <option value="">Chi dưới</option>
                        <option value="">Phẩu thuật chỉnh hình</option>
                        <option value="">Nội soi xương khớp</option>
                        <option value="">Khác</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="icon"><span class="icon-user"></span></div>
                    <input
                      type="text"
                      class="form-control"
                      id="appointment_name"
                      placeholder="Tên"
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="icon">
                      <span class="icon-paper-plane"></span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="appointment_email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="icon">
                      <span class="ion-ios-calendar"></span>
                    </div>
                    <input
                      type="text"
                      class="form-control appointment_date"
                      placeholder="Chọn ngày"
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="icon">
                      <span class="ion-ios-clock"></span>
                    </div>
                    <input
                      type="text"
                      class="form-control appointment_time"
                      placeholder="Thời gian"
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="icon"><span class="icon-phone2"></span></div>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  value="Gửi yêu cầu"
                  class="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-services">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-2">Our Service Keeps you Smile</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="flaticon-tooth-1"></span>
              </div>
              <div class="media-body p-2 mt-3">
                <h3 class="heading">Teeth Whitening</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="flaticon-dental-care"></span>
              </div>
              <div class="media-body p-2 mt-3">
                <h3 class="heading">Teeth Cleaning</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="flaticon-tooth-with-braces"></span>
              </div>
              <div class="media-body p-2 mt-3">
                <h3 class="heading">Quality Brackets</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block text-center">
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="flaticon-anesthesia"></span>
              </div>
              <div class="media-body p-2 mt-3">
                <h3 class="heading">Modern Anesthetic</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-wrap mt-5">
        <div class="row d-flex no-gutters">
          <div
            class="col-md-6 img"
            style="background-image: url(https://khopviet.com/storage/app/media/23561807_1507057892681263_6339143052412612156_n.jpg)"
          ></div>
          <div class="col-md-6 d-flex">
            <div class="about-wrap">
              <div
                class="heading-section heading-section-white mb-5 ftco-animate"
              >
                <h2 class="mb-2">BẰNG CẤP VÀ KINH NGHIỆM</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
              <div class="list-services d-flex ftco-animate">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="icon-check2"></span>
                </div>
                <div class="text">
                  <h3>Bằng cấp</h3>
                  <p>
                    <b>2006-2012:</b> Đại học Y Dược Thành Phố Hồ Chí Minh
                    <br/>
                    <b>2013-2015:</b> Bác sĩ chuyên khoa Chân thương chỉnh hình thành phố Hồ Chí Minh
                  </p>
                </div>
              </div>
              <div class="list-services d-flex ftco-animate">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="icon-check2"></span>
                </div>
                <div class="text">
                  <h3>Chương trình học đã tham gia</h3>
                  <p>
                    <b>2013:</b> Khoá nội soi khớp AAOS – VOA ( cùng giáo sư  AAOS - Pietro Tonino ) tại bệnh viện Chấn thương Chỉnh hình TP. HCM.
                    <br/>
                    <b>2014:</b> Khoá Vi phẫu tạo hình tại bệnh viện Chấn thương Chỉnh hình TP. HCM.
                    <br/>
                    <b>2014:</b> Tham dự hội nghị APOA – RCOST tại Pattaya, Thái Lan.
                    <br/>
                    <b>2016:</b> Tham gia chương trình 3 tháng fellowship về phẫu thuật chỉnh hình tại bệnh viện Epworth ( cùng với bác sĩ Andrew Beischer) và tại bệnh viện Dandenong ( cùng giao sư Ton Tran), Melbourne, Australia.
                    <br/>
                    <b>2017:</b> Tham gia chương trình fellowship 3 tháng về Y học thể thao (cùng với bác sĩ Dr. Kenneth Montgomery) tại Tri-County Orthopedics, New Jersey, USA. 
                    <br/>
                    <b>2019:</b> Tham dự chương trình báo cáo giao lưu Senior Fellow Asian (Singapore, Indonesia, Myanma)
                  </p>
                </div>
              </div>
              <div class="list-services d-flex ftco-animate">
                <div
                  class="icon d-flex justify-content-center align-items-center"
                >
                  <span class="icon-check2"></span>
                </div>
                <div class="text">
                  <h3>Hoạt động nghề nghiệp</h3>
                  <p>
                    <b>2013 – hiện tại:</b> Phẫu thuật viên Chấn Thương Chỉnh Hình tại bệnh viện Chấn Thương Chỉnh Hình thành phố Hồ Chí Minh
                    <br/>
                    <b>2017</b> Thực hiện báo cáo tại Mỹ và Mỗ thực hành nội soi tại Mỹ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <!-- <div class="container">
        <div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Meet Our Experience Dentist</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div
                class="img mb-4"
                style="background-image: url(./assets/images/person_5.jpg)"
              ></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Tom Smith</a></h3>
                <span class="position">Dentist</span>
                <div class="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <ul class="ftco-social">
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-google-plus"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div
                class="img mb-4"
                style="background-image: url(./assets/images/person_6.jpg)"
              ></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Mark Wilson</a></h3>
                <span class="position">Dentist</span>
                <div class="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <ul class="ftco-social">
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-google-plus"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div
                class="img mb-4"
                style="background-image: url(./assets/images/person_7.jpg)"
              ></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Patrick Jacobson</a></h3>
                <span class="position">Dentist</span>
                <div class="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <ul class="ftco-social">
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-google-plus"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate">
            <div class="staff">
              <div
                class="img mb-4"
                style="background-image: url(./assets/images/person_8.jpg)"
              ></div>
              <div class="info text-center">
                <h3><a href="teacher-single.html">Ivan Dorchsner</a></h3>
                <span class="position">System Analyst</span>
                <div class="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <ul class="ftco-social">
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                    <li class="ftco-animate">
                      <a href="#"><span class="icon-google-plus"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 justify-conten-center">
          <div class="col-md-8 ftco-animate">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              vero accusantium sunt sit aliquam ipsum molestias autem
              perferendis, incidunt cumque necessitatibus cum amet cupiditate,
              ut accusamus. Animi, quo. Laboriosam, laborum.
            </p>
          </div>
        </div>
      </div> -->
    </section>

    <!-- <section
      class="ftco-section ftco-counter img"
      id="section-counter"
      style="background-image: url(./assets/images/bg_1.jpg)"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-3 aside-stretch py-5">
            <div
              class="heading-section heading-section-white ftco-animate pr-md-4"
            >
              <h2 class="mb-3">Thành tựu</h2>
              <p>
                Phòng khám đi vào hoạt động được hơn 7 năm
              </p>
            </div>
          </div>
          <div class="col-md-9 py-5 pl-md-5">
            <div class="row">
              <div
                class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
              >
                <div class="block-18">
                  <div class="text">
                    <strong class="number" data-number="7">0</strong>
                    <span>Kinh nghiệm làm việc</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
              >
                <div class="block-18">
                  <div class="text">
                    <strong class="number" data-number="1">0</strong>
                    <span>Bác sĩ nhiều năm kinh nghiệm</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
              >
                <div class="block-18">
                  <div class="text">
                    <strong class="number" data-number="1500">0</strong>
                    <span>Khách hàng cảm thấy hài lòng</span>
                  </div>
                </div>
              </div>
              <div
                class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
              >
                <div class="block-18">
                  <div class="text">
                    <strong class="number" data-number="320">0</strong>
                    <span>Bệnh nhân mỗi năm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <Achivement />
    <section class="ftco-section">
      <!-- <div class="container">
        <div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Our Best Pricing</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 ftco-animate">
            <div class="pricing-entry pb-5 text-center">
              <div>
                <h3 class="mb-4">Basic</h3>
                <p>
                  <span class="price">$24.50</span>
                  <span class="per">/ session</span>
                </p>
              </div>
              <ul>
                <li>Diagnostic Services</li>
                <li>Professional Consultation</li>
                <li>Tooth Implants</li>
                <li>Surgical Extractions</li>
                <li>Teeth Whitening</li>
              </ul>
              <p class="button text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                  >Order now</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-3 ftco-animate">
            <div class="pricing-entry pb-5 text-center">
              <div>
                <h3 class="mb-4">Standard</h3>
                <p>
                  <span class="price">$34.50</span>
                  <span class="per">/ session</span>
                </p>
              </div>
              <ul>
                <li>Diagnostic Services</li>
                <li>Professional Consultation</li>
                <li>Tooth Implants</li>
                <li>Surgical Extractions</li>
                <li>Teeth Whitening</li>
              </ul>
              <p class="button text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                  >Order now</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-3 ftco-animate">
            <div class="pricing-entry active pb-5 text-center">
              <div>
                <h3 class="mb-4">Premium</h3>
                <p>
                  <span class="price">$54.50</span>
                  <span class="per">/ session</span>
                </p>
              </div>
              <ul>
                <li>Diagnostic Services</li>
                <li>Professional Consultation</li>
                <li>Tooth Implants</li>
                <li>Surgical Extractions</li>
                <li>Teeth Whitening</li>
              </ul>
              <p class="button text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                  >Order now</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-3 ftco-animate">
            <div class="pricing-entry pb-5 text-center">
              <div>
                <h3 class="mb-4">Platinum</h3>
                <p>
                  <span class="price">$89.50</span>
                  <span class="per">/ session</span>
                </p>
              </div>
              <ul>
                <li>Diagnostic Services</li>
                <li>Professional Consultation</li>
                <li>Tooth Implants</li>
                <li>Surgical Extractions</li>
                <li>Teeth Whitening</li>
              </ul>
              <p class="button text-center">
                <a
                  href="#"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                  >Order now</a
                >
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </section>

    <section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div
              class="col-md-7 text-center heading-section heading-section-white ftco-animate"
            >
              <h2>Đăng kí để nhận thêm về các bài luyện tập về xương khớp mới nhất</h2>
              <p>
                Cơ xương khớp không chỉ giúp bạn thực hiện những công việc hàng ngày trong cuộc sống mà còn ảnh hưởng đến vóc dáng cơ thể. Bạn nên thực hiện những bài tập thể dục tốt cho xương khớp để giúp tăng cường sức khỏe xương, nhất là vào thời điểm xương khớp bị lão hóa.
              </p>
              <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Thư điện tử ( email )"
                      />
                      <input
                        type="submit"
                        value="Đăng kí"
                        class="submit px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section testimony-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-2">Nhận xét</h2>
            <span class="subheading">Lời bình luận về từ những khách hàng của chúng tôi</span>
          </div>
        </div>
        <div class="row justify-content-center ftco-animate">
          <div class="col-md-8">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div
                    class="user-img mb-5"
                    style="background-image: url(https://khopviet.com/storage/app/uploads/public/5a6/593/891/5a6593891e4e2337733751.png)"
                  >
                    <span
                      class="quote d-flex align-items-center justify-content-center"
                    >
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-5">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <p class="name">Dennis Green</p>
                    <span class="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div
                    class="user-img mb-5"
                    style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ed/4ec/62e/5ed4ec62eecdf231309365.jpg)"
                  >
                    <span
                      class="quote d-flex align-items-center justify-content-center"
                    >
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p class="name">Dennis Green</p>
                    <span class="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div
                    class="user-img mb-5"
                    style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ec/f86/cae/5ecf86cae99a5104317569.png)"
                  >
                    <span
                      class="quote d-flex align-items-center justify-content-center"
                    >
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p class="name">Dennis Green</p>
                    <span class="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div
                    class="user-img mb-5"
                    style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ee/d8c/e42/5eed8ce42633d167592145.jpg)"
                  >
                    <span
                      class="quote d-flex align-items-center justify-content-center"
                    >
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p class="name">Dennis Green</p>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div
                    class="user-img mb-5"
                    style="background-image: url(./assets/images/person_1.jpg)"
                  >
                    <span
                      class="quote d-flex align-items-center justify-content-center"
                    >
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-5">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p class="name">Dennis Green</p>
                    <span class="position">System Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-gallery">
      <div class="container-wrap">
        <div class="row no-gutters">
          <div class="col-md-3 ftco-animate">
            <a
              href="#"
              class="gallery img d-flex align-items-center"
              style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ee/d8c/e42/5eed8ce42633d167592145.jpg)"
            >
              <div
                class="icon mb-4 d-flex align-items-center justify-content-center"
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              href="#"
              class="gallery img d-flex align-items-center"
              style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ec/f86/cae/5ecf86cae99a5104317569.png)"
            >
              <div
                class="icon mb-4 d-flex align-items-center justify-content-center"
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              href="#"
              class="gallery img d-flex align-items-center"
              style="background-image: url(https://khopviet.com/storage/app/uploads/public/5ed/4ec/62e/5ed4ec62eecdf231309365.jpg)"
            >
              <div
                class="icon mb-4 d-flex align-items-center justify-content-center"
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              href="#"
              class="gallery img d-flex align-items-center"
              style="background-image: url(https://khopviet.com/storage/app/uploads/public/5eb/584/0bd/5eb5840bd8477361659942.png)"
            >
              <div
                class="icon mb-4 d-flex align-items-center justify-content-center"
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-2">Tin tức</h2>
            <!-- <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <div class="blog-entry">
              <a
                href="blog-single.html"
                class="block-20"
                style="background-image: url('https://khopviet.com/storage/app/uploads/public/5ed/0d7/bc2/5ed0d7bc2b9dd917575394.png')"
              >
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">29 05 2020</a></div>
                  <!-- <div><a href="#">Admin</a></div> -->
                  <div>
                    <a href="#" class="meta-chat"
                      ><span class="icon-chat"></span> 3</a
                    >
                  </div>
                </div>
                <div class="desc pl-3">
                  <h3 class="heading">
                    <a href="#"
                      >Tam chứng đau khổ cũ (chronic terrible triad)</a
                    >
                  </h3>
                  <p>Tam chứng đau khổ là gãy trật phức tạp vùng khuỷu bao gồm gãy chỏm quay, mỏm vẹt và trật khớp khuỷu. Người đầu tiên đưa ra thuật ngữ này là Hotchkiss vào năm 1996 do kết quả xấu từ tổn thương này. Tổn thương này chiếm 4% gãy chỏm quay ở người lớn và chiếm 31% trật khuỷu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="blog-entry" data-aos-delay="100">
              <a
                href="blog-single.html"
                class="block-20"
                style="background-image: url('https://khopviet.com/storage/app/uploads/public/5ec/f7f/740/5ecf7f740dbe0767382964.png')"
              >
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">28 05 2020</a></div>
                  <!-- <div><a href="#">Admin</a></div> -->
                  <div>
                    <a href="#" class="meta-chat"
                      ><span class="icon-chat"></span> 3</a
                    >
                  </div>
                </div>
                <div class="desc pl-3">
                  <h3 class="heading">
                    <a href="#"
                      >Viêm dính khớp vai (Đông cứng khớp vai)</a
                    >
                  </h3>
                  <p>Viêm dính khớp vai là tình trạng hạn chế tầm vận động khớp vai (cứng khớp vai). Người ta hình dung chỏm xương cánh tay như 1 trái banh, còn ổ chảo xương bả vai như 1 cái ổ (socket), xung quanh được bao phủ bởi phần mềm rất mỏng gọi là bao khớp. Thông thường bao khớp vai rất co dãn đàn hồi để hỗ trợ tất cả các tầm vận động.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="blog-entry" data-aos-delay="200">
              <a
                href="blog-single.html"
                class="block-20"
                style="background-image: url('https://khopviet.com/storage/app/uploads/public/5ec/a44/fb2/5eca44fb286c8242354637.png')"
              >
              </a>
              <div class="text d-flex py-4">
                <div class="meta mb-3">
                  <div><a href="#">20 05 2020</a></div>
                  <!-- <div><a href="#">Admin</a></div> -->
                  <div>
                    <a href="#" class="meta-chat"
                      ><span class="icon-chat"></span> 3</a
                    >
                  </div>
                </div>
                <div class="desc pl-3">
                  <h3 class="heading">
                    <a href="#"
                      >VẬT LÝ TRỊ LIỆU KHỚP VAI</a
                    >
                  </h3>
                  <p>Tập vật lí trị liệu (VLTL) bao gồm vận động, sử dụng các thiết bị hỗ trợ và các phương pháp như mátxa và điện trị liệu để phục hồi và cải thiện tầm vận động khớp vai. VLTL là vô cùng quan trọng để cải thiện kết quả sau phẫu thuật vùng vai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-quote">
      <div class="container">
        <div class="row">
          <div class="col-md-6 pr-md-5 aside-stretch py-5 choose">
            <div
              class="heading-section heading-section-white mb-5 ftco-animate"
            >
              <h2 class="mb-2">
                DentaCare Procedure &amp; High Quality Services
              </h2>
            </div>
            <div class="ftco-animate">
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar. Because there were thousands
                of bad Commas, wild Question Marks and devious Semikoli
              </p>
              <ul class="un-styled my-5">
                <li>
                  <span class="icon-check"></span>Consectetur adipisicing elit
                </li>
                <li>
                  <span class="icon-check"></span>Adipisci repellat accusamus
                </li>
                <li>
                  <span class="icon-check"></span>Tempore reprehenderit vitae
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 py-5 pl-md-5">
            <div class="heading-section mb-5 ftco-animate">
              <h2 class="mb-2">Get a Free Quote</h2>
            </div>
            <form action="#" class="ftco-animate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Get a Quote"
                      class="btn btn-primary py-3 px-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- <div id="map"></div> -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.748614643888!2d106.6786208152602!3d10.753847362549571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f039035f8fd%3A0x56cf35165b90316d!2zMzE1IMSQxrDhu51uZyBDYW8gxJDhuqF0LCBQaMaw4budbmcgMSwgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1592204254230!5m2!1svi!2sus" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen=""></iframe>

    <!-- <Footer/> -->
    <!-- <Footer/> -->

    <!-- loader -->
    <Loader />

    <!-- Modal -->
    <Modal />
  </body>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Modal from "@/components/Modal.vue";
import Achivement from "@/components/Achivement.vue";
export default {
  name: "Dashboard",
  components: {
    Loader,
    Modal,
    Achivement
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
