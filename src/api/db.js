const db = [
  {
    id: 1,
    title: "Vivo T1X",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/1/t1x_01.png",
    sale: 20,
    prevPrice: "3.990.000",
    nextPrice: "4.990.000",
    infor1:
      "Bộ vi xử lí mạnh mẽ nói không với giật lag - Qualcomm Snapdragon® 680",
    infor2:
      "Sạc nhanh tức thì, sử dụng dài lâu - Pin lớn 5000mAh, sạc siêu tốc 18W",
    infor3:
      "RAM Mở Rộng 2.0 - Thoả sức lưu trữ các ứng dụng yêu thích và vận hành mượt mà",
  },
  {
    id: 2,
    title: "Xiaomi 12T",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg",
    sale: 20,
    prevPrice: "12.490.000",
    nextPrice: "11.490.000",
    infor1:
      " Kiến tạo khoảnh khắc hoàn hảo - Camera chuyên nghiệp 108MP + 8MP + 2MP, chống rung quang học OIS ",
    infor2:
      " Làm chủ tốc độ, bứt phá hiệu năng - MediaTek Dimensity 8100-Ultra, RAM 8GB",
    infor3:
      " Năng lượng bất tận, khám phá cả ngày - Dung lượng pin 5000mAh, sạc siêu nhanh HyperCharge 120W",
  },
  {
    id: 3,
    title: "Samsung Galaxy S22 Ultra (8GB - 128GB)",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg",
    sale: 20,
    prevPrice: "20.990.000",
    nextPrice: "19.990.000",
    infor1: " Vi xử lý mạnh mẽ nhất Galaxy - Snapdragon 8 Gen 1 (4 nm)",
    infor2: " Camera mắt thần bóng đêm Nightography - Chụp đêm cực đỉnh",
    infor3: " S Pen đầu tiên trên Galaxy S - Độ trễ thấp, dễ thao tác",
  },
  {
    id: 4,
    title: "Samsung Galaxy Z Fold4",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg",
    sale: 20,
    prevPrice: "40.990.000",
    nextPrice: "990.000",
    infor1:
      " Camera mắt thần bóng đêm cho trải nghiệm chụp ảnh ấn tượng - Camera chính: 50MP",
    infor2:
      " Khai mở trải nghiệm di động linh hoạt biến hóa - Màn hình ngoài 6.2' cùng màn hình chính 7.6' độc đáo",
    infor3:
      " Hiệu năng mạnh mẽ đến từ dòng chip cao cấp của Qualcomm - Snapdragon 8 Plus Gen 1",
  },
  {
    id: 5,
    title: "Xiaomi 12T Pro",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-xanh_2.jpg",
    sale: 20,
    prevPrice: "3.990.000",
    nextPrice: "4.990.000",
    infor1:
      " Kiến tạo siêu khoảnh khắc - Hệ thống camera 200MP, chống rung quang học OIS và ống kính 8P",
    infor2:
      " Thiết kế siêu việt - Trọn vẻ đẹp sang trọng, đẳng cấp, vỏ nhám chống bám vân tay, khung kim loại cứng cáp, độc đáo",
    infor3:
      " Đạt đến sự ưu việt một cách dễ dàng - Chipset Snapdragon 8+ Gen 1 siêu mạnh mẽ cùng RAM 12GB cho đa nhiệm mượt mà",
  },
  {
    id: 7,
    title: "Vivo V23e",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/9/c91ba5bf721d5b2d4eae4f821b8e4ced.png",
    sale: 20,
    prevPrice: "5.790.000",
    nextPrice: "4.990.000",
    infor1: " Hiển thị chân thực, sống động - Màn hình 6.44' AMOLED FullHD",
    infor2:
      " Hiệu năng mạnh mẽ vượt trội - Chip MediaTek Helio G96, RAM mở rộng đến 12GB, Android 11 mượt mà",
    infor3:
      " Làm chủ mọi khung hình - Cụm 3 camera sau lên đến 64MP, camera selfie 50MP",
  },
  {
    id: 8,
    title: "Samsung Galaxy S22 (8GB - 128GB)",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s901_galaxys22_front_pinkgold_211122.jpg",
    sale: 20,
    prevPrice: "20.990.000",
    nextPrice: "14.990.000",
    infor1:
      " Camera mắt thần bóng đêm Nightography - Ghi lại khoảnh khắc đêm diệu kì",
    infor2:
      " Mãn nhãn từng khoảnh khắc - Màn hình 6.1', Dynamic AMOLED 2X, 120Hz",
    infor3: " Bứt phá hiệu năng - Snapdragon 8 Gen 1 (4 nm)",
  },
  {
    id: 9,
    title: "Samsung Galaxy S22 Ultra (12GB - 256GB)",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119_2.jpg",
    sale: 20,
    prevPrice: "33.990.000",
    nextPrice: "28.990.000",
    infor1: " Vi xử lý mạnh mẽ nhất Galaxy - Snapdragon 8 Gen 1 (4 nm)",
    infor2: " Camera mắt thần bóng đêm Nightography - Chụp đêm cực đỉnh",
    infor3: " S Pen đầu tiên trên Galaxy S - Độ trễ thấp, dễ thao tác",
  },
  {
    id: 10,
    title: "Nokia C31 4GB 128GB  ",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250_1.jpg",
    sale: 20,
    prevPrice: "4.990.000",
    nextPrice: "2.990.000",
    infor1:
      "Bộ 3 camera AI sắc nét 13MP tích hợp ứng dụng Camera từ Google cho những bức ảnh hoàn hảo",
    infor2:
      "Màn hình siêu rộng 6.7” chuẩn HD+ mang đến trải nghiệm giải trí chất lượng cao với hình ảnh sống động",
    infor3:
      "Hệ điều hành Android 12 mới nhất với tính năng bảo mật và chia sẻ dễ dàng kết hợp vi xử lý 8 nhân mạnh mẽ giúp thao tác mượt mà",
  },
  {
    id: 11,
    title: "Samsung Galaxy S21 FE 8GB 128GB",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv.png",
    sale: 20,
    prevPrice: "15.990.000",
    nextPrice: "12.990.000",
    infor1: " Thiết kế cao cấp - Vẻ đẹp tinh tế cùng nhiều màu sắc thời thượng",
    infor2:
      " Trọn vẹn từng khung hình - Màn hình 6.4', độ sáng cao cùng tần số quét 120Hz",
    infor3:
      " Sắc nét từng khung hình - Bộ ba camera 12MP, hỗ trợ quay video 4K, chống rung điện từ EIS",
  },
  {
    id: 12,
    title: "Laptop Asus Gaming Rog Strix G15 G513IH HN015W",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/h/4h43.png",
    sale: 20,
    prevPrice: "20.990.000",
    nextPrice: "18.990.000",
    infor1:
      "Thiết kế nhỏ gọn, năng động với màu xám hiện đại, màn hình 11.6 inch độ phân giải Full HD, trọng lượng chỉ 1.40 kg dễ dàng bỏ vào balo mang theo mọi nơi.",
    infor2:
      "Bộ xử lý Intel Pentium Silver N6000 sử dụng mượt mà với các tác vụ văn phòng, lướt web cơ bản. Cùng với đó là card màn hình Intel UHD Graphics xử lý công việc, học tập trên office cơ bản, xem phim, nghe nhạc giải trí thoải mái. ",
    infor3:
      "RAM 8GB DDR4 cùng ổ cứng 128GB cho không gian lưu trữ vừa đủ giúp lưu lại tất cả những dữ liệu, tài liệu, video, các bài thuyết trình powerpoint một cách dễ dàng. ",
  },
  {
    id: 13,
    title: "Giá treo màn hình máy tính North Bayou NB-F80",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/i/gi_treo.png",
    sale: 20,
    prevPrice: "690.000",
    nextPrice: "590.000",
    infor1: "Mới, đầy đủ phụ kiện từ nhà sản xuất",
    infor2: "Cứng cáp, bền bỉ chịu mọi lực tác động",
    infor3: "Bảo hành 12 tháng chính hãng.",
  },
  {
    id: 14,
    title: "Samsung Galaxy Tab S8 WIFI",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_2.jpg",
    sale: 20,
    prevPrice: "17.990.000",
    nextPrice: "15.990.000",
    infor1:
      " Không gian sáng tạo vô hạn - Màn hình 11', 120Hz, TFT LCD cho hình ảnh sống động",
    infor2: " Thoả sức sáng tạo - Bút S Pen quyền năng thế hệ mới ",
    infor3: " Hiệu năng khủng, cân mọi tác vụ - Snapdragon 8 Gen 1 (4 nm)",
  },
  {
    id: 15,
    title:
      "Tai nghe Bluetooth Apple AirPods 3 2022 sạc có dây | Chính hãng Apple Việt Nam",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_170_1_1.png",
    sale: 20,
    prevPrice: "7.990.000",
    nextPrice: "4.990.000",
    infor1:
      "Thời lượng pin siêu tốt, hoạt động lên đến 30 giờ khi đi kèm hộp sạc",
    infor2: "Chất lượng âm thanh đỉnh cao khi được xử lý bởi con chip Apple H1",
    infor3:
      "Hỗ trợ sạc Magsafe giúp cho việc nạp đầy pin trở nên vô cùng tiện lợi",
  },
  {
    id: 16,
    title:
      "Apple Watch SE 40mm (GPS) Viền Nhôm - Dây Cao Su | Chính Hãng VN/Av",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_280.jpg",
    sale: 20,
    prevPrice: "8.490.000",
    nextPrice: "5.790.000",
    infor1: "Màn hình retina cho màu sắc hiển thị rực rỡ,sống động.",
    infor2:
      "Chức năng cảnh báo khẩn cấp động gọi tới các số diện thoại đã lưu khi phát hiện người dùng té ngã",
    infor3:
      "Nghe gọi ngay trên đồng hồ khi kết nối với iPhone thông qua Bluetooth hoặc wifi",
  },
  {
    id: 17,
    title: "Android Tivi Xiaomi A2 58 inch",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_45_20.jpg",
    sale: 20,
    prevPrice: "12.790.000",
    nextPrice: "9.190.000",
    infor1:
      " Thiết kế màn hình siêu mỏng, tràn viền làm nổi bật không gian sống",
    infor2: " Thêm các chi tiết kim loại tăng độ sang trọng cho sản phẩm",
    infor3: " Màn hình đẹp, sắc nét với độ phân giải 4K",
  },
  {
    id: 18,
    title:
      "Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_256.png",
    sale: 20,
    prevPrice: "33.790.000",
    nextPrice: "30.990.000",
    infor1:
      "Hiệu năng vượt trội - Chip M2, 10 nhân GPU xử lý tốt các Photoshop, Illustrator, Premiere, xử lý các video 4K",
    infor2:
      "16GB Ram, 512GB - Đa nhiệm tốt, mở cùng lúc trên Safari hay nhiều ứng dụng",
    infor3: "Thiết kế mỏng nhẹ tinh tế - Vỏ kim loại, trọng lượng chỉ 1.4kg",
  },
  {
    id: 19,
    title: "iPad mini 6 WiFi 64GB | Chính hãng Apple Việt Nam",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_229.jpg",
    sale: 20,
    prevPrice: "15.990.000",
    nextPrice: "12.990.000",
    infor1: " Mạnh mẽ bứt phá - Chip xử lý Apple A15 Bionic 6 nhân",
    infor2:
      " Hiển thị sắc nét, mượt mà hơn - Màn hình IPS LCD 8,3 inch hỗ trợ True Tone",
    infor3:
      " Phá vỡ giới hạn sáng tạo - Hỗ trợ Apple Pencil 2, iPadOS 15 tiện ích hơn",
  },
  {
    id: 20,
    title: "Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV NH.QENSV.003",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/e/text_ng_n_7.png",
    sale: 20,
    prevPrice: "24.990.000",
    nextPrice: "20.490.000",
    infor1:
      "Chip Core i5-12500H cùng card rời RTX™ 3050 4GB cho khả năng chiến các tựa game AAA, chỉnh sửa hình ảnh trên PTS, Render video ngắn mượt mà.",
    infor2:
      "Ram 8GB + 1 khe trống cho phép nâng cấp tối đa đến 32GB, ổ cứng SSD 512GB cho khả năng nâng cấp vượt trội.",
    infor3:
      "Màn hình Full HD kích thước chuẩn 15.6 inch, tần số quét 144Hz, tấm nền IPS mang lại chất lượng hiển thị sắc nét.",
  },
  {
    id: 21,
    title: "Tai nghe Bluetooth Havit TW945",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_196_1_.png",
    sale: 20,
    prevPrice: "890.000",
    nextPrice: "590.000",
    infor1: "Thiết kế nhỏ gọn, đột phá với tông màu trong suốt",
    infor2: "Trang bị Bluetooth 5.3, kết nối nhanh chóng, ổn định",
    infor3: "Gaming Mode 0.05s, mang đến trải nghiệm tuyệt vời",
  },
  {
    id: 22,
    title: "Đồng hồ thông minh Huawei Watch GT3 dây da",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/a/watch_3_leather.jpg",
    sale: 20,
    prevPrice: "7.490.000",
    nextPrice: "5.390.000",
    infor1:
      "Mặt đồng hồ trang bị công nghệ Always on Display - tiện lợi theo dõi thông tin",
    infor2: "Bảo vệ sức khoẻ tốt hơn với tính năng điện tâm đồ ECG",
    infor3:
      "Chống nước 5ATM cùng tính năng lặn tự do - cho phép lặn sâu đến 30m",
  },
  {
    id: 23,
    title: "Người iuu =))",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt6clsGB7-qG_nc01QHJr-TdEqxmWp7A85w&usqp=CAU",
    sale: 50,
    prevPrice: "999.999",
    nextPrice: "21.400",
    infor1: "",
    infor2: "",
    infor3: "",
  },

  {
    id: 24,
    title: "Tai nghe JBL Quantum 300",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/j/b/jbl-quantum-300.jpg",
    sale: 50,
    prevPrice: "1.990.000",
    nextPrice: "329.000",
    infor1:
      "Công nghệ JBL Signature Sound độc quyền mang đến âm thanh sống động",
    infor2:
      "Trải nghiệm nghe nhạc tuyệt đỉnh với màng loa 9mm và âm bass mạnh mẽ",
    infor3:
      "Thiết kế đơn giản, cá tính, có sẵn 3 size tai nghe phù hợp với mọi khuôn tai",
  },
  {
    id: 25,
    title: "Đĩa game PS5 Spider Man Miles Morale Ecas 00003E",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/2/22_2_72.jpg",
    sale: 50,
    prevPrice: "950.000",
    nextPrice: "190.000",
    infor1: "Một trong những đĩa game hot năm 2022!",
    infor2: "Trải nghiệm siêu anh hùng chân thực",
    infor3: "Được đánh giá cao trong cộng đồng game thủ",
  },
  {
    id: 26,
    title: "Robot hút bụi Xiaomi Vacuum Mop 2 Lite",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/o/mop-2-lite.jpg",
    sale: 50,
    prevPrice: "12.990.000",
    nextPrice: "1.990.000",
    infor1:
      "Dung lượng pin lớn cho phép hoạt động trong 150 phút,làm sạch diện tích 250m",
    infor2: "Tích hợp tính năng lau nhà tiện lợi",
    infor3: "Thiết lập tường ảo giúp thiết lau dọn đúng trong phạm vi cho phép",
  },
  {
    id: 27,
    title: "Máy lọc không khí Xiaomi Air Purifier 4",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/may-loc-khong-khi-xiaomi-mi-air-purifier-4-ksp.jpg",
    sale: 50,
    prevPrice: "10.490.000",
    nextPrice: "2.190.000",
    infor1: " Thiết kế sang trọng - Màu trắng nhã nhặn, kích thước nhỏ gọn",
    infor2:
      " Cảm biến bụi thông minh - cảm biến phát hiện bụi, nhiệt độ và độ ẩm trong không khí",
    infor3:
      " Hoạt động êm ái, không gây tiếng ồn - Độ ồn hoạt động chỉ 32.1dB(A)",
  },
  {
    id: 28,
    title: "Pin sạc dự phòng Anker PowerCore Select 20000mAh A1363",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/1/213213123_1_2.jpg",
    sale: 50,
    prevPrice: "2.790.000",
    nextPrice: "490.000",
    infor1: "Pin dung lượng lớn 20.000 mAh",
    infor2:
      "Công nghệ độc quyền Anker là Power IQ và VoltageBoots tối ưu công suất",
    infor3: "Gọn nhẹ dễ dàng mang theo",
  },
  {
    id: 29,
    title: "Chuột có dây Gaming Dareu EM908 RGB",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_105_3.png",
    sale: 50,
    prevPrice: "1.790.000",
    nextPrice: "290.000",
    infor1:
      "Thiết kế công thái học vừa với lòng bàn tay thuận tiện cho người sử dụng",
    infor2:
      "Dải đèn LED RGB tuyệt đẹp của gồm 16.7 triệu màu quanh viền của chuột",
    infor3:
      "Độ phân giải có thể tùy chỉnh 600 - 6000 DPI hỗ trợ tốt mọi nhu cầu cho game thủ",
  },
  {
    id: 30,
    title: "USB Sandisk 32GB CZ600 3.0",
    src: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/b/fbbc5a804518251180930f1b0e673d74_1.jpg",
    sale: 50,
    prevPrice: "990.000",
    nextPrice: "290.000",
    infor1: "Dung lượng lên đến 64GB",
    infor2: "Vỏ nắp cứng cáp",
    infor3: "Gọn nhẹ dễ dàng mang theo",
  },
];
export default db;
