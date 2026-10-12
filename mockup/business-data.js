/* A single, fixed illustrative snapshot keeps the screens internally consistent. */
const businessData = {
  asOf: '12/10/2026 · 17:30',
  periods: {
    oct: {label:'Tháng 10 · đến 12/10',days:'12/31 ngày',revenue:986.4,target:1045,collected:721.8,orders:14,grossMargin:24.8,quotes:28,wins:8},
    sep: {label:'Tháng 9 · đã chốt',days:'30/30 ngày',revenue:2383.7,target:2350,collected:2271.4,orders:39,grossMargin:25.6,quotes:71,wins:24},
    q3: {label:'Quý 3 · đã chốt',days:'92/92 ngày',revenue:6655.7,target:6500,collected:6202.7,orders:114,grossMargin:25.2,quotes:207,wins:68}
  },
  revenueTrend: [
    {month:'T4',actual:1610,target:1700},{month:'T5',actual:1735,target:1750},
    {month:'T6',actual:1829,target:1850},{month:'T7',actual:2074,target:2050},
    {month:'T8',actual:2198,target:2100},{month:'T9',actual:2383.7,target:2350},
    {month:'T10*',actual:986.4,target:1045}
  ],
  funnel: [
    {label:'Nhu cầu mới',count:86},{label:'Đủ điều kiện',count:52},
    {label:'Đã gửi báo giá',count:28},{label:'Đàm phán',count:13},{label:'Chốt đơn',count:8}
  ],
  workTrend: [
    {label:'T5',done:76,onTime:68},{label:'T6',done:83,onTime:75},
    {label:'T7',done:92,onTime:82},{label:'T8',done:101,onTime:88},
    {label:'T9',done:110,onTime:98},{label:'T10*',done:45,onTime:40}
  ],
  salesMore: [
    ['dong-thanh','Nâng cấp nhà máy Đồng Thành','Công ty Đồng Thành','CH-2026-116','Chờ duyệt giá','amber','attention','Máy chấm công & cửa xưởng','Trần Vy','241,35 triệu ₫','Duyệt chiết khấu bản 3'],
    ['hai-nam','Văn phòng Hải Nam','Công ty Hải Nam','CH-2026-117','Cần chăm sóc','amber','attention','12 bộ kiểm soát cửa','Nguyễn Hà','78,62 triệu ₫','Nhắc lịch demo 14/10'],
    ['thanh-cong','Trung tâm Thành Công','Công ty Thành Công','CH-2026-118','Đang khảo sát','blue','active','Kiểm soát ra vào 6 tầng','Lê Minh','198,54 triệu ₫','Chốt bản vẽ cửa'],
    ['phuoc-an','Khách sạn Phước An','Khách sạn Phước An','CH-2026-119','Chờ phản hồi','blue','active','Khóa và phần mềm quản lý','Trần Vy','134,27 triệu ₫','Gọi bộ phận mua sắm'],
    ['viet-phat','Kho vận Việt Phát','Công ty Việt Phát','CH-2026-120','Chờ báo giá','amber','attention','Thiết bị chấm công 4 điểm','Lê Minh','47,83 triệu ₫','Lấy cấu hình thiết bị'],
    ['an-loc','Nhà máy An Lộc','Công ty An Lộc','CH-2026-121','Đã chốt','green','done','Cửa phân quyền khu sản xuất','Nguyễn Hà','327,45 triệu ₫','Chuyển lịch cung ứng'],
    ['tuan-minh','Văn phòng Tuấn Minh','Công ty Tuấn Minh','CH-2026-122','Đang đàm phán','blue','active','Nâng cấp 9 cửa hiện hữu','Trần Vy','63,94 triệu ₫','Gửi phương án lắp ngoài giờ'],
    ['nam-viet','Chuỗi Nam Việt','Công ty Nam Việt','CH-2026-123','Cần chăm sóc','amber','attention','20 cửa tại 4 chi nhánh','Lê Minh','286,18 triệu ₫','Xác nhận ngân sách'],
    ['kien-phong','Trụ sở Kiến Phong','Công ty Kiến Phong','CH-2026-124','Đang khảo sát','blue','active','Ra vào bằng thẻ & khuôn mặt','Nguyễn Hà','156,76 triệu ₫','Nhận mặt bằng tầng 2'],
    ['minh-quang','Trường Minh Quang','Trường Minh Quang','CH-2026-125','Chờ báo giá','amber','attention','Cổng kiểm soát học sinh','Trần Vy','88,52 triệu ₫','Duyệt cấu hình cổng'],
    ['vinh-phuc','Tòa nhà Vĩnh Phúc','Công ty Vĩnh Phúc','CH-2026-126','Đã chốt','green','done','Kiểm soát thang máy','Nguyễn Hà','212,41 triệu ₫','Chuyển đơn cho kế toán'],
    ['gia-huy','Xưởng Gia Huy','Công ty Gia Huy','CH-2026-127','Chờ phản hồi','blue','active','Máy chấm công & phần mềm','Lê Minh','42,39 triệu ₫','Theo dõi báo giá'],
    ['hoa-sen','Bệnh viện Hoa Sen','Bệnh viện Hoa Sen','CH-2026-128','Chờ duyệt giá','amber','attention','Cửa khu vực hạn chế','Trần Vy','394,68 triệu ₫','Trình điều kiện bảo trì'],
    ['phu-thinh','Showroom Phú Thịnh','Công ty Phú Thịnh','CH-2026-129','Đang demo','blue','active','Khóa thông minh 5 cửa','Nguyễn Hà','51,73 triệu ₫','Tổng hợp nhận xét demo'],
    ['quoc-bao','Nhà máy Quốc Bảo','Công ty Quốc Bảo','CH-2026-130','Đã chốt','green','done','Kiểm soát ca làm 3 xưởng','Lê Minh','176,82 triệu ₫','Chuyển đơn cung ứng'],
    ['kim-long','Tòa nhà Kim Long','Công ty Kim Long','CH-2026-131','Đang đàm phán','blue','active','Cửa sảnh và bãi xe','Trần Vy','219,64 triệu ₫','Rà lại phạm vi thi công'],
    ['tai-loc','Kho Tài Lộc','Công ty Tài Lộc','CH-2026-132','Cần chăm sóc','amber','attention','Kiểm soát xe ra vào','Lê Minh','73,86 triệu ₫','Hẹn khảo sát lại'],
    ['duong-minh','Đại lý Dương Minh','Đại lý Dương Minh','CH-2026-133','Đang báo giá','blue','active','24 bộ đầu đọc thẻ','Nguyễn Hà','109,37 triệu ₫','Xác nhận giá đại lý']
  ].map(([id,name,client,code,status,tone,group,need,owner,amount,next])=>({id,name,client,code,status,tone,group,need,owner,amount,next,note:`Hồ sơ ${code} đang ở bước ${status.toLocaleLowerCase('vi')}. Người phụ trách cần ${next.toLocaleLowerCase('vi')}.`})),
  operationsMore: [
    ['KHO-2026-085','Xuất bộ đầu đọc cho An Lộc','IDW-2026-055','active','warehouse','Công ty An Lộc','Đã giữ 18/18 bộ; chờ phiếu xuất','Kho','Lập phiếu xuất'],
    ['GH-2026-058','Giao thiết bị Trường Hoàng Gia','IDW-2026-046','attention','warehouse','Trường Hoàng Gia','Khách đổi địa chỉ nhận sang cơ sở 2','Kho / kinh doanh','Xác nhận địa chỉ'],
    ['NK-2026-015','Kiểm tra chứng từ lô đầu đọc','PO-2026-027','issue','procurement','Nội bộ IDWORLD','Thiếu bản scan CO từ nhà cung cấp','Nhập khẩu','Nhắc bổ sung CO'],
    ['KT-2026-073','Lắp hệ thống xưởng Quốc Bảo','IDW-2026-056','active','field','Công ty Quốc Bảo','Đội 2 đã hoàn thành 6/10 cửa','Kỹ thuật B','Cập nhật biên bản'],
    ['MH-2026-032','Đặt phụ kiện cho Vĩnh Phúc','IDW-2026-054','done','procurement','Công ty Vĩnh Phúc','Đơn mua đã xác nhận 48 phụ kiện','Mua hàng','Chờ ngày nhận'],
    ['GH-2026-059','Bàn giao dự án Hòa Sen','IDW-2026-035','done','warehouse','Bệnh viện Hoa Sen','Đã ký biên bản giao đợt 2','Kho / kỹ thuật','Lưu hồ sơ serial'],
    ['KT-2026-074','Khảo sát Tòa nhà Kim Long','CH-2026-131','attention','field','Công ty Kim Long','Chưa có người mở phòng kỹ thuật','Điều phối','Xác nhận người hỗ trợ'],
    ['KHO-2026-086','Kiểm kê lô khóa thông minh','PO-2026-026','active','warehouse','Nội bộ IDWORLD','Đang đối chiếu 54 serial với phiếu nhập','Kho','Hoàn tất đối chiếu'],
    ['NK-2026-016','Thông quan lô thiết bị tháng 10','PO-2026-029','active','procurement','Nội bộ IDWORLD','Chờ lịch kiểm hóa từ đơn vị vận chuyển','Nhập khẩu','Theo dõi lịch kiểm hóa'],
    ['KT-2026-075','Bảo trì tòa nhà Đông Á','IDW-2026-019','done','field','Công ty Đông Á','Đã kiểm tra 8 cửa và bàn giao','Kỹ thuật A','Lưu ảnh hiện trường'],
    ['GH-2026-060','Giao đợt 2 Minh An','IDW-2026-042','issue','warehouse','Công ty Minh An','Phụ thuộc lô nhập còn 4 thiết bị','Kho','Chờ ETA đã xác nhận'],
    ['MH-2026-033','Duyệt nguồn cung thẻ RFID','PO-2026-030','attention','procurement','Nội bộ IDWORLD','So sánh 3 báo giá nhà cung cấp','Mua hàng','Trình phê duyệt'],
    ['KT-2026-076','Lắp bổ sung chi nhánh Nam Phương','IDW-2026-049','active','field','Công ty Nam Phương','Đội 1 chờ xác nhận ngày giao hàng','Điều phối','Chốt lịch khách'],
    ['KHO-2026-087','Chuẩn bị vật tư showroom Phú Thịnh','CH-2026-129','attention','warehouse','Công ty Phú Thịnh','Dự phòng 5 bộ khóa phục vụ demo','Kho','Kiểm tra tồn khả dụng'],
    ['GH-2026-061','Đối chiếu ký nhận Việt Phát','IDW-2026-039','done','warehouse','Công ty Việt Phát','Khách đã ký biên bản giao đợt 1','Kho','Lưu biên bản'],
    ['KT-2026-077','Nghiệm thu văn phòng Hải Nam','IDW-2026-034','done','field','Công ty Hải Nam','Đã nghiệm thu 12 cửa, không phát sinh','Kỹ thuật B','Chuyển kế toán']
  ].map(([id,title,order,status,type,customer,work,owner,next])=>({id,title,order,status,type,customer,work,owner,next,source:type==='field'?'Lịch kỹ thuật':type==='procurement'?'Đề xuất mua / lô nhập':'Kho / phiếu giao',route:order==='IDW-2026-042'?'deal':null})),
  invoices: [
    ['HD-2026-610','Công ty Thái Bình','IDW-2026-058',186.48,'20/10','Chưa đến hạn'],
    ['HD-2026-598','Công ty An Lộc','IDW-2026-055',142.7,'15/10','Sắp đến hạn'],
    ['HD-2026-587','Trường Hoàng Gia','IDW-2026-046',127.45,'28/10','Chưa đến hạn'],
    ['HD-2026-571','Công ty Nam Phương','IDW-2026-049',119.2,'04/10','Quá hạn'],
    ['HD-2026-565','Công ty Vĩnh Phúc','IDW-2026-054',108.34,'18/10','Chưa đến hạn'],
    ['HD-2026-558','Công ty Đông Á','IDW-2026-019',99.6,'21/10','Chưa đến hạn'],
    ['HD-2026-550','Công ty Kim Long','IDW-2026-038',89.2,'16/10','Sắp đến hạn'],
    ['HD-2026-544','Công ty Hưng Thịnh','IDW-2026-031',82.75,'25/10','Chưa đến hạn'],
    ['HD-2026-531','Công ty Việt Phát','IDW-2026-039',76.1,'14/10','Sắp đến hạn'],
    ['HD-2026-528','Cửa hàng Bắc Nam','IDW-2026-036',65.4,'29/09','Quá hạn'],
    ['HD-2026-521','Công ty Hải Nam','IDW-2026-034',49.8,'30/10','Chưa đến hạn'],
    ['HD-2026-514','Công ty Thành Công','IDW-2026-029',32.3,'19/10','Chưa đến hạn']
  ].map(([id,customer,order,amount,due,status])=>({id,customer,order,amount,due,status})),
  people: [
    {name:'Nguyễn Hà',team:'Kinh doanh',assigned:8,done:7,onTime:86,revenue:406.8,quotes:11},
    {name:'Lê Minh',team:'Kinh doanh',assigned:7,done:6,onTime:83,revenue:274.5,quotes:9},
    {name:'Trần Vy',team:'Kinh doanh',assigned:7,done:6,onTime:100,revenue:305.1,quotes:8},
    {name:'Mai Phương',team:'Mua hàng',assigned:6,done:5,onTime:80,revenue:null,quotes:null},
    {name:'Vũ Long',team:'Kho & giao',assigned:8,done:7,onTime:86,revenue:null,quotes:null},
    {name:'Đức Hoàng',team:'Kỹ thuật',assigned:6,done:5,onTime:100,revenue:null,quotes:null},
    {name:'Bảo Anh',team:'Kỹ thuật',assigned:5,done:4,onTime:100,revenue:null,quotes:null},
    {name:'Thu Trang',team:'CSKH',assigned:6,done:5,onTime:80,revenue:null,quotes:null}
  ],
  channels: [
    {name:'Website / SEO',leads:26,qualified:15,orders:2,cost:18.4},
    {name:'Zalo OA',leads:18,qualified:9,orders:1,cost:6.8},
    {name:'Đối tác giới thiệu',leads:12,qualified:10,orders:2,cost:12.6},
    {name:'Kinh doanh chủ động',leads:21,qualified:11,orders:1,cost:5.2},
    {name:'Khách giới thiệu',leads:9,qualified:7,orders:2,cost:2.1}
  ],
  tickets: [
    ['BH-2026-018','Công ty Minh An','Khóa cửa không phản hồi','Chờ điều phối','Sắp hạn','Đức Hoàng','13/10 10:00'],
    ['BH-2026-019','Công ty Đông Á','Đầu đọc thẻ lỗi nguồn','Đang xử lý','Trong hạn','Bảo Anh','14/10 16:00'],
    ['HT-2026-047','Trường Hoàng Gia','Phân quyền người dùng','Đã xử lý','Trong hạn','Thu Trang','12/10 15:30'],
    ['BH-2026-020','Công ty Hưng Thịnh','Mất kết nối một cửa','Chờ hãng','Quá hạn','Đức Hoàng','11/10 17:00'],
    ['HT-2026-048','Cửa hàng Bắc Nam','Cập nhật lịch ra vào','Đã xử lý','Trong hạn','Thu Trang','12/10 11:00'],
    ['BH-2026-021','Công ty Nam Phương','Khóa kêu liên tục','Đang xử lý','Sắp hạn','Bảo Anh','13/10 09:00'],
    ['HT-2026-049','Công ty An Lộc','Thêm nhân viên mới','Đã xử lý','Trong hạn','Thu Trang','12/10 14:00'],
    ['BH-2026-022','Công ty Vĩnh Phúc','Vân tay nhận chậm','Đang xử lý','Trong hạn','Đức Hoàng','15/10 16:00'],
    ['BH-2026-023','Công ty Kim Long','Bo mạch cần thay','Chờ báo giá sửa','Quá hạn','Bảo Anh','10/10 17:00'],
    ['HT-2026-050','Công ty Việt Phát','Xuất báo cáo chấm công','Đã xử lý','Trong hạn','Thu Trang','12/10 09:30'],
    ['BH-2026-024','Công ty Hải Nam','Cửa đóng không hết','Đang xử lý','Trong hạn','Đức Hoàng','14/10 10:00'],
    ['HT-2026-051','Công ty Thành Công','Tạo nhóm quyền mới','Đã xử lý','Trong hạn','Thu Trang','12/10 16:00'],
    ['BH-2026-025','Công ty Quốc Bảo','Đầu đọc offline','Chờ điều phối','Sắp hạn','Bảo Anh','13/10 16:00'],
    ['HT-2026-052','Công ty Phú Thịnh','Hướng dẫn app quản trị','Đã xử lý','Trong hạn','Thu Trang','12/10 13:00'],
    ['BH-2026-026','Công ty Gia Huy','Thẻ không nhận','Đang xử lý','Trong hạn','Đức Hoàng','15/10 09:00'],
    ['HT-2026-053','Công ty Tài Lộc','Đổi người quản trị','Đã xử lý','Trong hạn','Thu Trang','12/10 10:30']
  ].map(([id,customer,issue,status,sla,owner,due])=>({id,customer,issue,status,sla,owner,due})),
  partnerLeads: [
    {id:'GT-2026-016',partner:'Đại lý Hoàng Long',customer:'Công ty Minh An',need:'Lắp thêm cửa chi nhánh mới',status:'Kiểm tra trùng',commission:'Chưa tính'},
    {id:'GT-2026-015',partner:'Đối tác Phúc Khang',customer:'Công ty An Lộc',need:'Cửa khu sản xuất',status:'Chờ đủ điều kiện',commission:'18,42 triệu ₫'},
    {id:'GT-2026-014',partner:'Đại lý Hoàng Long',customer:'Trường Hoàng Gia',need:'Cổng vào khu học',status:'Đang xử lý',commission:'Tạm tính 6,81 triệu ₫'},
    {id:'GT-2026-013',partner:'Đối tác Trường Sơn',customer:'Công ty Vĩnh Phúc',need:'Kiểm soát thang máy',status:'Đã chi',commission:'11,67 triệu ₫'},
    {id:'GT-2026-012',partner:'Đối tác Phúc Khang',customer:'Công ty Nam Việt',need:'Cửa tại 4 chi nhánh',status:'Đã giao kinh doanh',commission:'Chưa tính'}
  ]
};
