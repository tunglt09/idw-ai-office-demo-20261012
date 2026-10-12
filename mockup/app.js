const iconPaths = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  sales: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  operations: '<path d="M3 7h12v10H3zM15 10h3l3 3v4h-6M6 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm11 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>',
  service: '<path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2zm16 0h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2zM19 19a3 3 0 0 1-3 3h-3"/>',
  partners: '<circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 21v-2a5 5 0 0 1 10 0v2M12 21v-2a5 5 0 0 1 10 0v2"/>',
  assistant: '<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7z"/>',
  modules: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  deal: '<path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM14 3v5h5M8 12h8M8 16h6"/>',
  warehouse: '<path d="m3 8 9-5 9 5v10l-9 5-9-5zM3 8l9 5 9-5M12 13v10"/>',
  procurement: '<path d="M4 7h16v14H4zM7 7V4h10v3M8 12h8M8 16h5"/>',
  field: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 15h3"/>',
  portal: '<path d="M4 8h16v12H4zM8 8V5h8v3M8 13h8M8 16h5"/>'
  ,finance: '<path d="M3 6h18v14H3zM3 10h18M7 15h4"/>'
  ,analytics: '<path d="M4 20V12h4v8M10 20V4h4v16M16 20v-9h4v9M2 21h20"/>'
  ,people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M17 8a3 3 0 0 1 0 6M17 17a5 5 0 0 1 4 4"/>'
  ,marketing: '<path d="M3 10h4l10-5v14L7 14H3zM7 14l2 6h4l-2-5M19 9l2-2M19 14l2 2"/>'
};

const mainNav = [
  ['home','Tổng quan'], ['sales','Kinh doanh'], ['operations','Vận hành'],
  ['service','Bảo hành'], ['partners','Đối tác'], ['finance','Tài chính'],
  ['analytics','Báo cáo & KPI'], ['people','Nhân sự'], ['marketing','Marketing']
];
const utilityNav = [['assistant','Trợ lý AI'],['modules','14 phân hệ']];
const sidebarGroups = [
  {label:'Điều hành',items:[{label:'Tổng quan',route:'home',icon:'home'}]},
  {label:'Kinh doanh',items:[{label:'Cơ hội & báo giá',route:'sales',icon:'sales'},{label:'Đơn hàng',route:'deal',icon:'deal'}]},
  {label:'Vận hành',items:[{label:'Tất cả hồ sơ',route:'operations',icon:'operations',type:'all'},{label:'Kho & giao hàng',route:'operations',icon:'warehouse',type:'warehouse'},{label:'Mua & nhập khẩu',route:'operations',icon:'procurement',type:'procurement'},{label:'Lịch kỹ thuật',route:'operations',icon:'field',type:'field'}]},
  {label:'Dịch vụ & đối tác',items:[{label:'Hỗ trợ & bảo hành',route:'service',icon:'service'},{label:'Giới thiệu đối tác',route:'partners',icon:'partners',partnerView:'internal'},{label:'Cổng đối tác',route:'partners',icon:'portal',partnerView:'portal'}]},
  {label:'Tài chính & hiệu quả',items:[{label:'Tài chính & công nợ',route:'finance',icon:'finance'},{label:'Báo cáo & KPI',route:'analytics',icon:'analytics'},{label:'Nhân sự & năng suất',route:'people',icon:'people'},{label:'Marketing & chăm sóc',route:'marketing',icon:'marketing'}]},
  {label:'Công cụ',items:[{label:'Trợ lý AI',route:'assistant',icon:'assistant'},{label:'14 phân hệ',route:'modules',icon:'modules'}]}
];
const titles = {home:'Tổng quan',sales:'Kinh doanh',deal:'Hồ sơ giao dịch',operations:'Vận hành',service:'Bảo hành',partners:'Đối tác',finance:'Tài chính',analytics:'Báo cáo & KPI',people:'Nhân sự',marketing:'Marketing',assistant:'Trợ lý AI',modules:'14 phân hệ'};
const moduleList = [
  {name:'Điều hành và công việc', desc:'Giao việc, hạn xử lý, duyệt và nhật ký.', route:'home', group:'Điều hành'},
  {name:'Khách hàng và cơ hội', desc:'Nguồn khách, nhu cầu, người phụ trách.', route:'sales', group:'Kinh doanh'},
  {name:'Sản phẩm và kiến thức', desc:'SKU, hãng, tài liệu và thông số.', route:'assistant', group:'Kinh doanh'},
  {name:'Báo giá và chính sách giá', desc:'Phiên bản, bảng giá và duyệt ngoại lệ.', route:'sales', group:'Kinh doanh'},
  {name:'Đơn hàng và hợp đồng', desc:'Một hồ sơ xuyên suốt giao dịch.', route:'deal', group:'Kinh doanh'},
  {name:'Kho và giao hàng', desc:'Tồn khả dụng, giữ hàng, serial.', route:'operations', group:'Vận hành'},
  {name:'Mua hàng và nhập khẩu', desc:'Đề xuất, duyệt, lô hàng và ETA.', route:'operations', group:'Vận hành'},
  {name:'Điều phối và thi công', desc:'Lịch kỹ thuật, ảnh và nghiệm thu.', route:'operations', group:'Vận hành'},
  {name:'Hỗ trợ và bảo hành', desc:'Ticket, hai bảo hành và chi phí.', route:'service', group:'Hậu mãi'},
  {name:'Hóa đơn và thu tiền', desc:'Mốc hóa đơn, tiền và công nợ.', route:'finance', group:'Hậu mãi'},
  {name:'Cổng đối tác và hoa hồng', desc:'Giới thiệu, chống trùng, điều kiện chi.', route:'partners', group:'Mở rộng'},
  {name:'Chăm sóc và marketing', desc:'Lịch chăm sóc, quà và nội dung.', route:'marketing', group:'Mở rộng'},
  {name:'Nhân sự và hiệu quả', desc:'Ngày công, chi phí, KPI có nguồn.', route:'people', group:'Mở rộng'},
  {name:'AI và tự động hóa', desc:'Tra cứu có nguồn và lệnh theo quyền.', route:'assistant', group:'Mở rộng'}
];

const opportunities = [
  {id:'an-phuc',name:'Dự án An Phúc',client:'Công ty An Phúc',code:'CH-2026-108',status:'Chờ duyệt giá',tone:'amber',group:'attention',need:'Kiểm soát cửa văn phòng',owner:'Kinh doanh SmartID',amount:'92,8 triệu ₫',next:'Duyệt báo giá bản 2',note:'Khách yêu cầu điều kiện giá ngoài bảng đã duyệt. Báo giá mới chưa được gửi.'},
  {id:'minh-an',name:'Văn phòng Minh An',client:'Công ty Minh An',code:'IDW-2026-042',status:'Đang cung ứng',tone:'blue',group:'active',need:'16 thiết bị kiểm soát cửa',owner:'Nguyễn Hà',amount:'186,48 triệu ₫',next:'Xác nhận ETA lô bổ sung',note:'Báo giá đã duyệt và đơn đã chốt. Giao hàng, lắp đặt, hóa đơn và thu tiền có trạng thái riêng.'},
  {id:'bac-nam',name:'Cửa hàng Bắc Nam',client:'Cửa hàng Bắc Nam',code:'CH-2026-093',status:'Cần chăm sóc',tone:'amber',group:'attention',need:'Khảo sát vị trí lắp',owner:'Lê Minh',amount:'38,6 triệu ₫',next:'Gọi xác nhận lịch khảo sát',note:'Báo giá đã gửi. Lịch chăm sóc được gắn vào cùng hồ sơ cơ hội.'},
  {id:'dong-a',name:'Nhà máy Đông Á',client:'Công ty Đông Á',code:'CH-2026-112',status:'Đang khảo sát',tone:'blue',group:'active',need:'Kiểm soát vào ra xưởng',owner:'Trần Vy',amount:'162,7 triệu ₫',next:'Nhận biên bản khảo sát',note:'Kỹ thuật đang đối chiếu sơ đồ cửa và điều kiện thi công.'},
  {id:'nam-phuong',name:'Chi nhánh Nam Phương',client:'Công ty Nam Phương',code:'CH-2026-102',status:'Chờ phản hồi',tone:'blue',group:'active',need:'Thiết bị chấm công',owner:'Lê Minh',amount:'56,3 triệu ₫',next:'Theo dõi báo giá đã gửi',note:'Khách đang xem báo giá. Người phụ trách cần ghi kết quả chăm sóc.'},
  {id:'hoang-gia',name:'Trường Hoàng Gia',client:'Trường Hoàng Gia',code:'CH-2026-096',status:'Đã chốt',tone:'green',group:'done',need:'Kiểm soát cửa khu học',owner:'Nguyễn Hà',amount:'118,2 triệu ₫',next:'Chuyển đơn và cung ứng',note:'Khách đã xác nhận báo giá theo phiên bản lưu trong hồ sơ.'}
];
opportunities.push(...businessData.salesMore);
const state = {view:'home',salesStatus:'all',salesQuery:'',salesPage:1,dealTab:'overview',operationsType:'all',operationsStatus:'all',operationsQuery:'',operationsPage:1,partnerTab:'internal',aiPrompt:'spec',approved:false};
const pageSize = 10;
const pager = (view,page,total) => `<div class="list-pager"><span>${total?`${(page-1)*pageSize+1}–${Math.min(page*pageSize,total)}`:'0'} / ${total}</span><button type="button" data-page-view="${view}" data-page-step="-1" aria-label="Trang trước" ${page===1?'disabled':''}>‹</button><button type="button" data-page-view="${view}" data-page-step="1" aria-label="Trang sau" ${page*pageSize>=total?'disabled':''}>›</button></div>`;
const selectedRecords = new Set();
const $ = selector => document.querySelector(selector);
const icon = name => `<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]}</svg>`;
const status = (text,tone='neutral') => `<span class="status ${tone}">${text}</span>`;
const fact = (label,value) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`;
const cell = (label,value) => `<div class="info-cell"><small>${label}</small><strong>${value}</strong></div>`;
const button = (text,attr='',kind='') => `<button type="button" class="button ${kind}" ${attr}>${text}</button>`;

function pageIntro(title,description,action='') {
  return `<div class="page-intro"><div><h1>${title}</h1><p>${description}</p></div>${action ? `<div class="intro-actions">${action}</div>` : ''}</div>`;
}

const salesStatuses = [['attention','Cần xử lý'],['active','Đang theo dõi'],['done','Đã chốt'],['all','Tất cả']];
function salesGroup(item) { return item.id==='an-phuc'&&state.approved?'active':item.group; }
function salesBaseRows() {
  const query=normalize(state.salesQuery.trim());
  return opportunities.filter(item=>!query||normalize([item.code,item.client,item.name,item.need,item.owner].join(' ')).includes(query));
}
function salesVisibleRows() { return salesBaseRows().filter(item=>state.salesStatus==='all'||salesGroup(item)===state.salesStatus); }
function salesMobileCard(item) {
  const approved=item.id==='an-phuc'&&state.approved;
  return `<button class="mobile-record" data-open-sales="${item.id}" type="button"><span class="mobile-record-head"><strong>${item.code}</strong><span class="row-status ${approved?'green':item.tone}"><i></i>${approved?'Đã duyệt giá':item.status}</span></span><span class="mobile-record-title">${item.name}</span><span class="mobile-record-meta">${item.client} · ${item.need}</span><span class="mobile-record-next"><small>Bước tiếp theo</small><strong>${approved?'Gửi báo giá đúng phiên bản':item.next}</strong></span></button>`;
}
function renderSales() {
  const base=salesBaseRows();const allRows=salesVisibleRows();const rows=allRows.slice((state.salesPage-1)*pageSize,state.salesPage*pageSize);
  return `<div class="console-view">
    <div class="console-title"><div><h1>Cơ hội & báo giá</h1><p>Theo dõi nhu cầu, phiên bản báo giá, người phụ trách và bước kế tiếp.</p></div>${button('Mở hồ sơ đơn mẫu <span class="arrow">↗</span>','data-go="deal"')}</div>
    ${renderSalesInsights()}
    <div class="console-tabs" role="tablist" aria-label="Trạng thái cơ hội">${salesStatuses.map(([key,label])=>`<button role="tab" aria-selected="${state.salesStatus===key}" class="console-tab ${state.salesStatus===key?'active':''}" data-sales-status="${key}"><span class="tab-dot ${key}"></span>${label}<b>${key==='all'?base.length:base.filter(item=>salesGroup(item)===key).length}</b></button>`).join('')}</div>
    <div class="console-toolbar"><label class="table-search"><span class="search-glyph" aria-hidden="true"></span><input id="sales-search" type="search" aria-label="Tìm cơ hội hoặc khách hàng" placeholder="Mã cơ hội, khách hàng, nhu cầu..."></label><button class="button filter-reset" data-action="reset-sales">Đặt lại lọc</button><span class="toolbar-hint">Chọn dòng để xem chi tiết</span></div>
    <div class="table-shell"><div class="table-scroll"><table class="work-table sales-table"><thead><tr><th>Mã cơ hội</th><th>Khách hàng</th><th>Nhu cầu</th><th>Trạng thái</th><th>Giá trị dự kiến</th><th>Phụ trách</th><th>Bước tiếp theo</th><th></th></tr></thead><tbody>${rows.length?rows.map(item=>`<tr data-sales-record="${item.id}" tabindex="0" aria-label="Mở cơ hội ${item.code}: ${item.name}"><td><strong class="record-id">${item.code}</strong><small>${item.name}</small></td><td><strong>${item.client}</strong><small>Hồ sơ khách hàng</small></td><td>${item.need}</td><td><span class="row-status ${item.id==='an-phuc'&&state.approved?'green':item.tone}"><i></i>${item.id==='an-phuc'&&state.approved?'Đã duyệt giá':item.status}</span></td><td class="num"><strong>${item.amount}</strong></td><td>${item.owner}</td><td><strong>${item.id==='an-phuc'&&state.approved?'Gửi báo giá đúng phiên bản':item.next}</strong></td><td class="row-more">›</td></tr>`).join(''):'<tr><td colspan="8" class="table-empty">Không có cơ hội phù hợp. Thử đổi trạng thái hoặc tìm kiếm.</td></tr>'}</tbody></table></div><div class="mobile-records">${rows.length?rows.map(salesMobileCard).join(''):'<div class="empty-state">Không có cơ hội phù hợp.</div>'}</div><div class="table-footer"><span>${allRows.length} cơ hội trong bộ lọc · dữ liệu minh họa</span>${pager('sales',state.salesPage,allRows.length)}</div></div>
  </div>`;
}
function openSalesRecord(id) {
  const item=opportunities.find(record=>record.id===id);if(!item)return;
  const approved=item.id==='an-phuc'&&state.approved;
  const primary=item.id==='minh-an'?button('Mở hồ sơ đơn <span class="arrow">↗</span>','data-go="deal"','primary'):item.id==='an-phuc'&&!approved?button('Xem yêu cầu duyệt','data-dialog="approval"','primary'):button('Xem bước tiếp theo','data-dialog="followup"','primary');
  $('#drawer-content').innerHTML=`<div class="drawer-head"><span>HỒ SƠ KINH DOANH</span><button class="drawer-close" type="button" data-action="close-drawer" aria-label="Đóng chi tiết">×</button></div><h2 id="drawer-title">${item.name}</h2><p class="drawer-id">${item.code} · ${item.client}</p><div class="drawer-status">${status(approved?'Đã duyệt giá':item.status,approved?'green':item.tone)}</div><div class="drawer-facts">${fact('Nhu cầu',item.need)}${fact('Giá trị dự kiến',item.amount)}${fact('Người phụ trách',item.owner)}${fact('Bước tiếp theo',approved?'Gửi báo giá đúng phiên bản':item.next)}</div><div class="drawer-note"><strong>Ghi chú hồ sơ</strong><p>${item.note}</p></div><div class="drawer-actions">${primary}${button('Đóng','data-action="close-drawer"')}</div>`;
  $('#record-drawer').showModal();
}

const dealTabs = [['overview','Tổng quan'],['quote','Báo giá'],['delivery','Giao & lắp'],['finance','Hóa đơn & tiền'],['aftercare','Hậu mãi']];
function dealContent() {
  if (state.dealTab==='quote') return `<div class="detail-grid"><section class="surface data-panel"><h2>Báo giá đã chốt</h2><div class="table-wrap"><table><thead><tr><th>Phiên bản</th><th>Trạng thái</th><th>Điều kiện</th><th>Liên kết</th></tr></thead><tbody><tr><td><strong>BG-042 · bản 2</strong><small>Phiên bản được khách xác nhận</small></td><td>${status('Đã duyệt','green')}</td><td>Giao nhiều đợt nếu thiếu hàng</td><td>Đơn IDW-2026-042</td></tr><tr><td>BG-042 · bản 1</td><td>${status('Thay thế','neutral')}</td><td>Điều kiện cũ</td><td>Chỉ lưu lịch sử</td></tr></tbody></table></div><div class="callout"><strong>Kiểm soát phiên bản</strong><p>Thay giá hoặc điều kiện quan trọng sẽ tạo phiên bản mới và kiểm tra lại quyền duyệt.</p></div></section><aside class="surface data-panel"><h2>Thông tin bán hàng</h2>${fact('Giá trị đơn','186,48 triệu ₫')}${fact('Người phụ trách','Nguyễn Hà')}${fact('Nguồn','Khách hàng hiện hữu')}</aside></div>`;
  if (state.dealTab==='delivery') return `<div class="detail-grid"><section class="surface data-panel"><h2>Cung ứng và giao hàng</h2><div class="table-wrap"><table><thead><tr><th>Dòng hàng</th><th class="num">Cần</th><th class="num">Khả dụng</th><th>Tình trạng</th></tr></thead><tbody><tr><td><strong>Thiết bị kiểm soát cửa</strong><small>Mã hàng minh họa · dòng A</small></td><td class="num">16</td><td class="num">12</td><td>${status('Thiếu 4','amber')}</td></tr><tr><td><strong>Phụ kiện lắp đặt</strong><small>Bộ đi kèm</small></td><td class="num">16</td><td class="num">16</td><td>${status('Đủ','green')}</td></tr></tbody></table></div><div class="callout amber"><strong>Chưa xác nhận ngày lắp với khách</strong><p>Lô bổ sung có ETA dự kiến. Người phụ trách cần xác nhận nguồn và ngày cam kết riêng.</p></div></section><aside class="surface data-panel"><h2>Việc tiếp theo</h2><ul class="stack-list"><li><span class="list-symbol">01</span><span><strong>Xác nhận ETA</strong><small>Mua hàng / nhập khẩu</small></span></li><li><span class="list-symbol">02</span><span><strong>Đặt lịch kỹ thuật</strong><small>Điều phối sau khi có ngày hàng chắc chắn</small></span></li><li><span class="list-symbol">03</span><span><strong>Ghi serial và bàn giao</strong><small>Kho và kỹ thuật phối hợp</small></span></li></ul>${button('Xem bảng vận hành','data-go="operations"','primary')}</aside></div>`;
  if (state.dealTab==='finance') return `<div class="detail-grid"><section class="surface data-panel"><h2>Hóa đơn và thanh toán</h2><div class="table-wrap"><table><thead><tr><th>Mốc</th><th>Trạng thái</th><th>Nguồn xác nhận</th></tr></thead><tbody><tr><td>Đặt cọc</td><td>${status('Đã đối chiếu','green')}</td><td>Kế toán xác nhận từ giao dịch ngân hàng</td></tr><tr><td>Hóa đơn</td><td>${status('Chưa xuất','amber')}</td><td>Theo chứng từ kế toán / MISA</td></tr><tr><td>Thanh toán còn lại</td><td>${status('Chưa đến mốc','neutral')}</td><td>Điều khoản của đơn hàng</td></tr></tbody></table></div><div class="callout"><strong>Dữ liệu có nguồn</strong><p>Giá trị tiền và trạng thái hóa đơn trong app sẽ dựa vào xác nhận kế toán; mockup này chỉ minh họa cách hiển thị.</p></div></section><aside class="surface data-panel"><h2>Liên kết kế toán</h2>${fact('Mã đơn nội bộ','IDW-2026-042')}${fact('Mã MISA','Chờ đối chiếu')}${fact('Tình trạng công nợ','Theo mốc hợp đồng')}</aside></div>`;
  if (state.dealTab==='aftercare') return `<div class="detail-grid"><section class="surface data-panel"><h2>Thiết bị và hậu mãi</h2><div class="callout"><strong>Bảo hành bắt đầu sau bàn giao theo chính sách</strong><p>Serial, ngày bàn giao và điều kiện hợp đồng sẽ liên kết vào hồ sơ thiết bị. Hãng và IDWORLD có hai thời hạn riêng.</p></div><ul class="stack-list"><li><span class="list-symbol">○</span><span><strong>Serial</strong><small>Chờ kho ghi khi xuất thực tế</small></span></li><li><span class="list-symbol">○</span><span><strong>Bảo hành hãng</strong><small>Chờ xác định từ lô hàng</small></span></li><li><span class="list-symbol">○</span><span><strong>Bảo hành với khách</strong><small>Chờ bàn giao và điều kiện hợp đồng</small></span></li></ul></section><aside class="surface data-panel"><h2>Khi phát sinh lỗi</h2><p>Ticket sẽ kéo theo thiết bị, serial, lịch sử hỗ trợ và phương án chi phí.</p>${button('Xem ca bảo hành mẫu','data-go="service"','primary')}</aside></div>`;
  return `<div class="detail-grid"><section class="surface data-panel"><h2>Các mốc và người phụ trách</h2><div class="table-wrap"><table><thead><tr><th>Đầu việc</th><th>Phụ trách</th><th>Trạng thái</th></tr></thead><tbody><tr><td><strong>Khách xác nhận báo giá</strong><small>BG-042, phiên bản 2</small></td><td>Kinh doanh</td><td>${status('Hoàn tất','green')}</td></tr><tr><td><strong>Giữ và bổ sung hàng</strong><small>Thiếu 4 trên 16 thiết bị</small></td><td>Kho / mua hàng</td><td>${status('Đang xử lý','blue')}</td></tr><tr><td><strong>Xác nhận lịch lắp</strong><small>Sau khi chốt ETA</small></td><td>Điều phối</td><td>${status('Chờ đầu vào','amber')}</td></tr><tr><td><strong>Hóa đơn và thu tiền</strong><small>Theo mốc hợp đồng</small></td><td>Kế toán</td><td>${status('Theo dõi','neutral')}</td></tr></tbody></table></div></section><aside class="surface data-panel"><h2>Thông tin nhanh</h2>${fact('Khách hàng','Công ty Minh An')}${fact('Người phụ trách','Nguyễn Hà')}${fact('Giá trị đơn','186,48 triệu ₫')}${fact('Nơi ghi chính kế toán','MISA, cần xác minh kết nối')}<div class="callout amber"><strong>Vướng mắc hiện tại</strong><p>Chưa xác nhận ETA cho bốn thiết bị còn thiếu.</p></div></aside></div>`;
}
function renderDeal() {
  return `${pageIntro('Văn phòng Minh An','Hồ sơ IDW-2026-042 theo dõi một giao dịch từ báo giá đến hậu mãi.',button('Xem sơ đồ quy trình <span class="arrow">↗</span>','data-dialog="flow"'))}
    <div class="timeline" aria-label="Các giai đoạn giao dịch"><div class="timeline-item done"><strong>Tiếp nhận</strong><small>Khách & nhu cầu</small></div><div class="timeline-item done"><strong>Báo giá</strong><small>Bản 2 đã duyệt</small></div><div class="timeline-item current"><strong>Cung ứng</strong><small>Thiếu 4 thiết bị</small></div><div class="timeline-item"><strong>Giao & lắp</strong><small>Chờ chốt lịch</small></div><div class="timeline-item"><strong>Hậu mãi</strong><small>Chờ bàn giao</small></div></div>
    <div class="subnav" role="tablist" aria-label="Chi tiết hồ sơ">${dealTabs.map(([id,label])=>`<button role="tab" aria-selected="${state.dealTab===id}" class="${state.dealTab===id?'active':''}" data-tab="deal:${id}">${label}</button>`).join('')}</div>
    ${dealContent()}`;
}

const operationRecords = [
  {id:'KHO-2026-084',title:'Giữ hàng cho Minh An',order:'IDW-2026-042',status:'attention',type:'warehouse',customer:'Công ty Minh An',work:'Thiếu 4 thiết bị, 12 khả dụng',owner:'Kho / mua hàng',next:'Xác nhận ETA',source:'Đơn hàng và tồn khả dụng',route:'deal'},
  {id:'NK-2026-014',title:'Lô thiết bị kiểm soát cửa',order:'IDW-2026-042',status:'active',type:'procurement',customer:'Nội bộ IDWORLD',work:'Đang vận chuyển, ETA dự kiến 16/10',owner:'Nhập khẩu',next:'Kiểm tra chứng từ',source:'Hồ sơ lô nhập',route:'deal'},
  {id:'KT-2026-067',title:'Khảo sát cửa hàng Bắc Nam',order:'CH-2026-093',status:'active',type:'field',customer:'Cửa hàng Bắc Nam',work:'Khảo sát vị trí lắp đặt',owner:'Kỹ thuật A',next:'13/10, 09:00',source:'Lịch kỹ thuật',route:'sales'},
  {id:'GH-2026-053',title:'Giao đợt 1 dự án Hưng Thịnh',order:'IDW-2026-031',status:'done',type:'warehouse',customer:'Công ty Hưng Thịnh',work:'Đã giao và lưu serial',owner:'Kho',next:'Đã bàn giao',source:'Phiếu giao hàng',route:null},
  {id:'MH-2026-031',title:'Bổ sung 4 thiết bị Minh An',order:'IDW-2026-042',status:'attention',type:'procurement',customer:'Công ty Minh An',work:'Đề xuất mua gắn với đơn',owner:'Mua hàng',next:'Duyệt nguồn cung',source:'Đề xuất mua hàng',route:'deal'},
  {id:'KT-2026-072',title:'Lắp văn phòng Minh An',order:'IDW-2026-042',status:'issue',type:'field',customer:'Công ty Minh An',work:'Chưa chốt lịch vì ETA chưa xác nhận',owner:'Điều phối',next:'Chờ ETA',source:'Lịch điều phối',route:'deal'},
  {id:'KHO-2026-079',title:'Chuẩn bị phụ kiện lắp đặt',order:'IDW-2026-042',status:'done',type:'warehouse',customer:'Công ty Minh An',work:'16 bộ phụ kiện đã sẵn sàng',owner:'Kho',next:'Chờ xuất cùng thiết bị',source:'Tồn khả dụng',route:'deal'},
  {id:'GH-2026-057',title:'Xác nhận giao chi nhánh mới',order:'IDW-2026-049',status:'attention',type:'warehouse',customer:'Công ty Nam Phương',work:'Chờ địa chỉ và người nhận',owner:'Kinh doanh / kho',next:'Liên hệ khách',source:'Đơn hàng',route:null}
];
operationRecords.push(...businessData.operationsMore);
const operationStatuses = [
  ['attention','Cần xử lý'],['active','Đang thực hiện'],['issue','Có vấn đề'],['done','Hoàn tất'],['all','Tất cả']
];
const operationTypes = {warehouse:'Kho & giao',procurement:'Mua & nhập',field:'Kỹ thuật'};
const operationStatusNames = {attention:'Cần xử lý',active:'Đang thực hiện',issue:'Có vấn đề',done:'Hoàn tất'};
const operationTone = {attention:'amber',active:'blue',issue:'red',done:'green'};
function operationBaseRows() {
  const query=normalize(state.operationsQuery.trim());
  return operationRecords.filter(record=>(state.operationsType==='all'||record.type===state.operationsType) && (!query||normalize([record.id,record.title,record.order,record.customer,record.work,record.owner].join(' ')).includes(query)));
}
function operationVisibleRows() {
  return operationBaseRows().filter(record=>state.operationsStatus==='all'||record.status===state.operationsStatus);
}
function operationRow(record) {
  return `<tr data-record="${record.id}" tabindex="0" aria-label="Mở hồ sơ ${record.id}: ${record.title}">
    <td class="check-cell"><input class="row-check" type="checkbox" data-check-record="${record.id}" aria-label="Chọn ${record.id}" ${selectedRecords.has(record.id)?'checked':''}></td>
    <td><strong class="record-id">${record.id}</strong><small>${operationTypes[record.type]}</small></td>
    <td><strong>${record.order}</strong><small>Hồ sơ liên quan</small></td>
    <td><span class="row-status ${operationTone[record.status]}"><i></i>${operationStatusNames[record.status]}</span></td>
    <td><strong>${record.customer}</strong><small>${record.type==='field'?'Địa điểm thi công':'Khách hàng / đơn vị'}</small></td>
    <td><strong>${record.title}</strong><small>${record.work}</small></td>
    <td>${record.owner}</td><td><strong>${record.next}</strong></td><td class="row-more">›</td></tr>`;
}
function operationMobileCard(record) {
  return `<button class="mobile-record" data-open-operation="${record.id}" type="button"><span class="mobile-record-head"><strong>${record.id}</strong><span class="row-status ${operationTone[record.status]}"><i></i>${operationStatusNames[record.status]}</span></span><span class="mobile-record-title">${record.title}</span><span class="mobile-record-meta">${record.customer} · ${record.order}</span><span class="mobile-record-next"><small>Bước tiếp theo</small><strong>${record.next}</strong></span></button>`;
}
function renderOperations() {
  const base=operationBaseRows();
  const allRows=operationVisibleRows();
  const rows=allRows.slice((state.operationsPage-1)*pageSize,state.operationsPage*pageSize);
  return `<div class="console-view">
    <div class="console-title"><div><h1>Vận hành</h1><p>Kho, mua hàng, giao hàng và kỹ thuật trên cùng một hàng đợi.</p></div><button class="button" data-action="export-operations">↓ Xuất CSV mẫu</button></div>
    ${renderOperationsInsights()}
    <div class="console-tabs" role="tablist" aria-label="Trạng thái hồ sơ vận hành">${operationStatuses.map(([key,label])=>`<button role="tab" aria-selected="${state.operationsStatus===key}" class="console-tab ${state.operationsStatus===key?'active':''}" data-ops-status="${key}"><span class="tab-dot ${key}"></span>${label}<b>${key==='all'?base.length:base.filter(record=>record.status===key).length}</b></button>`).join('')}</div>
    <div class="console-toolbar"><label class="table-search"><span class="search-glyph" aria-hidden="true"></span><input id="operations-search" type="search" aria-label="Tìm hồ sơ vận hành" placeholder="Mã hồ sơ, đơn, khách hàng..."></label><label class="select-wrap"><span class="sr-only">Bộ phận</span><select id="operations-type"><option value="all" ${state.operationsType==='all'?'selected':''}>Tất cả bộ phận</option><option value="warehouse" ${state.operationsType==='warehouse'?'selected':''}>Kho & giao hàng</option><option value="procurement" ${state.operationsType==='procurement'?'selected':''}>Mua & nhập khẩu</option><option value="field" ${state.operationsType==='field'?'selected':''}>Lịch kỹ thuật</option></select></label><button class="button filter-reset" data-action="reset-operations">Đặt lại lọc</button><span class="toolbar-hint">Chọn dòng để xem tiến độ</span></div>
    <div class="table-shell"><div class="table-scroll"><table class="work-table"><thead><tr><th class="check-cell"><input id="select-all-operations" type="checkbox" aria-label="Chọn tất cả hồ sơ trên trang này" ${rows.length&&rows.every(record=>selectedRecords.has(record.id))?'checked':''}></th><th>Hồ sơ</th><th>Đơn liên quan</th><th>Trạng thái</th><th>Khách hàng</th><th>Đầu việc</th><th>Phụ trách</th><th>Mốc tiếp theo</th><th></th></tr></thead><tbody>${rows.length?rows.map(operationRow).join(''):'<tr><td colspan="9" class="table-empty">Không có hồ sơ phù hợp. Thử đổi trạng thái hoặc bộ lọc.</td></tr>'}</tbody></table></div><div class="mobile-records">${rows.length?rows.map(operationMobileCard).join(''):'<div class="empty-state">Không có hồ sơ phù hợp.</div>'}</div><div class="table-footer operations-footer"><div><span id="selected-count">${selectedRecords.size?`Đã chọn ${selectedRecords.size} hồ sơ`:'Chọn hồ sơ để thao tác'}</span><button class="text-button" data-action="show-selected" ${selectedRecords.size?'':'disabled'}>Xem đã chọn</button></div>${pager('operations',state.operationsPage,allRows.length)}</div></div>
    <p class="data-context">Số liệu và hồ sơ trong bảng là dữ liệu minh họa. ETA dự kiến được tách khỏi ngày cam kết với khách.</p>
  </div>`;
}
function openOperationRecord(id) {
  const record=operationRecords.find(item=>item.id===id);
  if(!record)return;
  $('#drawer-content').innerHTML=`<div class="drawer-head"><span>HỒ SƠ VẬN HÀNH</span><button class="drawer-close" type="button" data-action="close-drawer" aria-label="Đóng chi tiết">×</button></div><h2 id="drawer-title">${record.title}</h2><p class="drawer-id">${record.id} · ${operationTypes[record.type]}</p><div class="drawer-status">${status(operationStatusNames[record.status],operationTone[record.status])}</div><div class="drawer-facts">${fact('Đơn liên quan',record.order)}${fact('Khách hàng',record.customer)}${fact('Phụ trách',record.owner)}${fact('Bước tiếp theo',record.next)}${fact('Nguồn dữ liệu',record.source)}</div><div class="drawer-note"><strong>Thông tin xử lý</strong><p>${record.work}</p></div><div class="drawer-actions">${record.route?button('Mở hồ sơ liên quan <span class="arrow">↗</span>',`data-go="${record.route}"`,'primary'):''}${button('Đóng','data-action="close-drawer"')}</div>`;
  $('#record-drawer').showModal();
}
function exportOperationRows() {
  const rows=operationVisibleRows();
  const fields=[['Mã hồ sơ','Đơn liên quan','Trạng thái','Khách hàng','Đầu việc','Phụ trách','Bước tiếp theo']];
  rows.forEach(item=>fields.push([item.id,item.order,operationStatusNames[item.status],item.customer,item.title,item.owner,item.next]));
  const csv='\uFEFF'+fields.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='idworld-van-hanh-minh-hoa.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function renderService() {
  return `${pageIntro('Hỗ trợ & bảo hành','Mỗi ticket ghi lịch sử hỗ trợ, serial và trách nhiệm chi phí theo hai chính sách bảo hành.',button('Xem luồng xử lý <span class="arrow">↗</span>','data-dialog="warranty-flow"'))}
    ${renderServiceInsights()}
    <div class="service-grid"><section class="surface data-panel"><div class="section-heading"><div><small class="eyebrow">BH-2026-018 · CA MINH HỌA</small><h2>Thiết bị kiểm soát cửa gặp lỗi</h2></div>${status('Chờ điều phối','amber')}</div><div class="info-grid">${cell('Khách hàng','Công ty Minh An')}${cell('Thiết bị / serial','ZK-DEMO-017')}${cell('Kênh tiếp nhận','Hotline')}${cell('Hỗ trợ từ xa','Đã thử, chưa khắc phục')}</div><h3>Kiểm tra quyền bảo hành</h3><div class="warranty-row"><span><strong>Bảo hành hãng / NPP</strong><small>Đối chiếu theo nguồn thiết bị</small></span>${status('Đã hết','red')}</div><div class="warranty-row"><span><strong>Bảo hành IDWORLD với khách</strong><small>Đối chiếu hợp đồng và bàn giao</small></span>${status('Còn hiệu lực','green')}</div><div class="callout green"><strong>Phương án chi phí theo quy tắc</strong><p>IDWORLD chịu chi phí khắc phục trong tình huống minh họa này. Kỹ thuật ghi kết quả và chi phí để người phụ trách xác nhận.</p></div></section>
      <aside class="rule-path"><small>LỘ TRÌNH XỬ LÝ</small><h2>Từ cuộc gọi đến bàn giao</h2><ol><li>Tiếp nhận lỗi và xác minh serial.</li><li>Hỗ trợ từ xa, ghi kết quả.</li><li>Kiểm tra bảo hành hãng và khách riêng.</li><li>Điều phối kỹ thuật hoặc gửi hãng theo điều kiện.</li><li>Ghi ảnh, vật tư, chi phí và kết quả.</li><li>Trả thiết bị, bàn giao, đóng ticket.</li></ol></aside></div>
    <section class="handoff-section"><div class="section-heading"><h2>Những nhánh cần phân biệt</h2></div><div class="handoff-grid"><button class="handoff-item" data-dialog="dealer-flow"><span>Đại lý thường</span><small>Hỗ trợ từ xa, sau đó gửi trung tâm nếu cần. Phí vận chuyển theo chính sách.</small></button><button class="handoff-item" data-dialog="contract-flow"><span>Đại lý có cam kết</span><small>Đi theo điều khoản hỗ trợ tại chỗ hoặc phương án đã ký.</small></button><button class="handoff-item" data-dialog="customer-flow"><span>Khách lẻ / dự án</span><small>Thử xử lý từ xa rồi điều phối tại chỗ khi chưa khắc phục.</small></button><button class="handoff-item" data-dialog="out-flow"><span>Hết cả hai bảo hành</span><small>Báo giá sửa và đợi khách xác nhận trước khi làm.</small></button></div></section>`;
}

function renderPartners() {
  return `${pageIntro('Đối tác & hoa hồng','Từ nhu cầu giới thiệu đến phân công và xét điều kiện chi, có kiểm tra cơ hội trùng.')}
    <div class="subnav" role="tablist" aria-label="Góc nhìn đối tác"><button role="tab" aria-selected="${state.partnerTab==='internal'}" class="${state.partnerTab==='internal'?'active':''}" data-tab="partner:internal">Bàn xử lý nội bộ</button><button role="tab" aria-selected="${state.partnerTab==='portal'}" class="${state.partnerTab==='portal'?'active':''}" data-tab="partner:portal">Màn hình đối tác</button></div>
    ${state.partnerTab==='internal'?renderPartnerInsights():''}
    ${state.partnerTab==='portal' ? `<section class="portal-shell" aria-label="Bản xem trước cổng đối tác"><div class="portal-top"><strong>IDWORLD · Cổng đối tác</strong>${status('Góc nhìn đối tác','blue')}</div><div class="portal-content"><div><h2>Gửi nhu cầu mới</h2><p>Đối tác nhập khách hàng, nhu cầu và tài liệu. IDWORLD kiểm tra cơ hội trùng trước khi tiếp nhận.</p><form id="partner-demo-form"><div class="form-grid"><label class="field">Tên khách hàng<input name="customer" placeholder="Ví dụ: Công ty Minh An" required></label><label class="field">Số liên hệ<input name="contact" placeholder="Số liên hệ minh họa" required></label><label class="field full">Nhu cầu sơ bộ<input name="need" placeholder="Thiết bị, địa điểm, số lượng..." required></label></div><button class="button primary" type="submit">Xem bước tiếp nhận</button></form></div><div><h2>Tiến độ đối tác được xem</h2><ul class="stack-list"><li><span class="list-symbol">✓</span><span><strong>Đã gửi nhu cầu</strong><small>Lưu thời điểm và người gửi</small></span></li><li><span class="list-symbol">○</span><span><strong>Đang kiểm tra trùng</strong><small>Cùng khách có thể là nhu cầu khác</small></span></li><li><span class="list-symbol">○</span><span><strong>Giám đốc phân công</strong><small>Phản hồi trạng thái phù hợp quyền đối tác</small></span></li><li><span class="list-symbol">○</span><span><strong>Theo dõi hoa hồng</strong><small>Tạm tính, đủ điều kiện, đã duyệt và đã chi</small></span></li></ul></div></div></section>` : `<div class="partner-flow"><span>Đối tác gửi<small>Nhu cầu và tệp liên quan</small></span><span>Kiểm tra trùng<small>Theo khách và cơ hội</small></span><span>Giám đốc phân công<small>Kinh doanh nhận xử lý</small></span><span>Đối chiếu hoa hồng<small>Trước khi duyệt chi</small></span></div><div class="detail-grid"><section class="surface data-panel"><div class="section-heading"><div><small class="eyebrow">GT-2026-016 · CA MINH HỌA</small><h2>Nhu cầu do đối tác gửi</h2></div>${status('Nghi trùng cơ hội','amber')}</div><div class="info-grid">${cell('Đối tác','Đại lý Hoàng Long')}${cell('Khách được giới thiệu','Công ty Minh An')}${cell('Nhu cầu','Lắp thêm cửa tại chi nhánh mới')}${cell('Người quyết định','Giám đốc')}</div><div class="callout amber"><strong>Cùng khách chưa chắc cùng cơ hội</strong><p>Người có quyền so địa điểm, thời điểm, dự án và nội dung nhu cầu trước khi gộp hoặc tiếp nhận.</p></div>${button('Xem cách giải quyết trùng','data-dialog="duplicate"')}</section><aside class="surface data-panel"><h2>Điều kiện xét hoa hồng</h2><div class="condition-list"><div class="condition"><span>Đã bàn giao / nghiệm thu</span>${status('Chưa','amber')}</div><div class="condition"><span>Thanh toán đã xác nhận</span>${status('Chưa','amber')}</div><div class="condition"><span>Hóa đơn đã hoàn tất</span>${status('Chưa','amber')}</div></div><div class="formula"><strong>Công thức tạm tính trong tài liệu</strong>(Giá bán trước VAT − giá đại lý tiêu chuẩn trước VAT) × 80% − chi phí triển khai − chi phí phát sinh khác</div><div class="callout"><strong>Trạng thái hiện tại: chưa đủ điều kiện chi</strong><p>Các cơ sở tính và ngoại lệ cần được chốt với doanh nghiệp trước khi đưa vào vận hành.</p></div></aside></div>`}`;
}

const aiAnswers = {
  spec:{question:'Thiết bị trong đơn Minh An còn thiếu bao nhiêu?',answer:'Theo hồ sơ minh họa IDW-2026-042, đơn cần 16 thiết bị kiểm soát cửa và hiện có 12 thiết bị khả dụng. Phần còn thiếu là 4. ETA lô bổ sung vẫn cần người phụ trách xác nhận trước khi hẹn khách.',source:'Hồ sơ đơn IDW-2026-042 · Kho & giao hàng',route:'deal'},
  warranty:{question:'Ca BH-2026-018 ai chịu chi phí?',answer:'Trong tình huống minh họa, bảo hành hãng đã hết còn bảo hành IDWORLD với khách vẫn hiệu lực. Theo quy tắc được ghi trong tài liệu, IDWORLD chịu chi phí khắc phục. Chi phí thực tế cần người phụ trách xác nhận.',source:'Ticket BH-2026-018 · Quy tắc bảo hành',route:'service'},
  task:{question:'Giao việc kiểm tra ETA cho lô Minh An',answer:'Có thể tạo nháp việc: “Xác nhận ETA cho bốn thiết bị còn thiếu của đơn IDW-2026-042”. Cần chọn người phụ trách và hạn trước khi giao. Trong mockup, lệnh này chưa được gửi đi.',source:'Hồ sơ đơn IDW-2026-042 · Đề xuất mua MH-2026-031',route:'operations'}
};
function renderAssistant() {
  const item=aiAnswers[state.aiPrompt];
  return `${pageIntro('Trợ lý AI','Tra cứu hồ sơ có nguồn và chuẩn bị bước tiếp theo theo quyền của người dùng.')}
    <div class="assistant-layout"><section class="surface assistant-answer"><div class="eyebrow">CÂU TRẢ LỜI MINH HỌA</div><div class="user-bubble">${item.question}</div><h2>Thông tin tìm được</h2><p>${item.answer}</p><a class="source-link" href="#${item.route}">Nguồn: ${item.source} <span aria-hidden="true">↗</span></a>${state.aiPrompt==='task'?button('Xem nháp công việc','data-dialog="ai-task"','primary'):button('Mở hồ sơ nguồn','data-go="'+item.route+'"','primary')}<div class="callout amber"><strong>Quyền và xác nhận</strong><p>AI chỉ dùng dữ liệu người hỏi được phép xem. Giá, thanh toán, duyệt và cam kết vẫn đi theo quy trình có thẩm quyền.</p></div></section><aside class="surface data-panel"><h2>Thử một câu hỏi</h2><div class="prompt-list"><button data-prompt="spec">Đơn Minh An đang thiếu gì?</button><button data-prompt="warranty">Bảo hành hãng hết, khách còn thì sao?</button><button data-prompt="task">Tạo việc kiểm tra ETA</button></div><p style="color:var(--muted);font-size:12px;margin-top:20px">Các phản hồi này là kịch bản minh họa, chưa kết nối mô hình AI hoặc dữ liệu thật.</p></aside></div>`;
}

function renderModules() {
  const groups=[...new Set(moduleList.map(item=>item.group))];
  return `${pageIntro('14 phân hệ trong một app','Chọn một phân hệ để xem màn hình minh họa gần nhất. Luồng chi tiết nằm trong bộ flowchart.',button('Mở bộ flowchart <span class="arrow">↗</span>','data-action="flowcharts"'))}
    <div class="module-groups">${groups.map(group=>`<section class="module-group"><h2>${group}</h2><div class="module-grid">${moduleList.filter(item=>item.group===group).map(item=>`<button class="module-item" data-go="${item.route}"><strong>${item.name}</strong><small>${item.desc}</small><span>Xem màn hình liên quan ↗</span></button>`).join('')}</div></section>`).join('')}</div>`;
}

const renderers = {home:renderExecutiveDashboard,sales:renderSales,deal:renderDeal,operations:renderOperations,service:renderService,partners:renderPartners,finance:renderFinance,analytics:renderAnalytics,people:renderPeople,marketing:renderMarketing,assistant:renderAssistant,modules:renderModules};
function renderSidebar() {
  const query=normalize($('#side-search').value.trim());
  $('#primary-nav').innerHTML=sidebarGroups.map(group=>{
    const items=group.items.filter(item=>normalize(item.label).includes(query));
    if(!items.length)return '';
    return `<div class="nav-group"><div class="nav-group-title">${group.label}<span aria-hidden="true">⌄</span></div>${items.map(item=>{
      const active=state.view===item.route && (item.type===undefined || state.operationsType===item.type) && (item.partnerView===undefined || state.partnerTab===item.partnerView);
      return `<button type="button" class="nav-link ${active?'active':''}" data-go="${item.route}" ${item.type?`data-ops-type="${item.type}"`:''} ${item.partnerView?`data-partner-view="${item.partnerView}"`:''} ${active?'aria-current="page"':''}>${icon(item.icon)}<span>${item.label}</span></button>`;
    }).join('')}</div>`;
  }).join('') || '<p class="nav-empty">Không tìm thấy chức năng.</p>';
}
function render() {
  state.view = renderers[location.hash.slice(1)] ? location.hash.slice(1) : 'home';
  renderSidebar();
  $('#crumb-current').textContent=titles[state.view];
  $('#main-content').innerHTML=renderers[state.view]();
  if(state.view==='operations') $('#operations-search').value=state.operationsQuery;
  if(state.view==='sales') $('#sales-search').value=state.salesQuery;
  document.title=`${titles[state.view]} | IDWORLD AI Office Mockup`;
  closeMenu();
}
function navigate(view) { closeMenu(); location.hash=view; if(state.view===view) render(); window.scrollTo({top:0,behavior:'auto'}); }
function closeMenu() { $('#sidebar').classList.remove('open'); $('#mobile-scrim').hidden=true; $('#menu-button').setAttribute('aria-expanded','false'); }
function toggleMenu() { const open=!$('#sidebar').classList.contains('open'); $('#sidebar').classList.toggle('open',open); $('#mobile-scrim').hidden=!open; $('#menu-button').setAttribute('aria-expanded',String(open)); }
function showToast(message) { const toast=$('#toast'); toast.textContent=message; toast.hidden=false; clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.hidden=true,4000); }
function openDialog(kind) {
  const content = {
    approval:['Yêu cầu duyệt giá','Báo giá An Phúc phiên bản 2 có điều kiện ngoài chính sách. Bản duyệt phải gắn đúng phiên bản, lý do và dữ liệu giá đã xác nhận.','<button class="button primary" data-action="approve-demo">Ghi nhận duyệt trong mockup</button>'],
    followup:['Lịch chăm sóc','Mỗi báo giá đã gửi có việc chăm sóc theo chính sách. Người phụ trách xác nhận kết quả sau khi liên hệ khách.',''],
    'quote-flow':['Luồng báo giá','Tra cứu giá và tồn có nguồn, lập đúng phiên bản, trình duyệt ngoại lệ nếu có, sau đó gửi khách và theo dõi kết quả.',''],
    flow:['Một mã giao dịch xuyên bộ phận','Hồ sơ liên kết khách, cơ hội, báo giá, đơn, cung ứng, giao lắp, nghiệm thu, hóa đơn, thu tiền và ticket. Các trạng thái được lưu riêng để phản ánh giao và thu nhiều đợt.',''],
    'warranty-flow':['Luồng bảo hành','Tiếp nhận và hỗ trợ từ xa trước, xác minh khách và serial, kiểm tra hai thời hạn bảo hành. Phương án xử lý phụ thuộc loại khách, hợp đồng và nguồn thiết bị.',''],
    'dealer-flow':['Đại lý thường','Hỗ trợ từ xa trước. Nếu không xử lý được, đại lý gửi trung tâm bảo hành; phí gửi và nhận theo điều kiện đã nêu trong tài liệu.',''],
    'contract-flow':['Đại lý có cam kết riêng','Dùng đúng điều kiện hợp đồng: hỗ trợ tại chỗ hoặc phương án đã ký. Người phụ trách ghi lịch, chi phí và kết quả.',''],
    'customer-flow':['Khách lẻ và dự án','Kiểm tra từ xa trước. Nếu chưa khắc phục được, điều phối kỹ thuật tới địa điểm theo quy trình.',''],
    'out-flow':['Hết cả hai bảo hành','Lập báo giá sửa và vật tư, chờ khách xác nhận rồi mới tiến hành.',''],
    duplicate:['Kiểm tra giới thiệu trùng','So khách, liên hệ, địa điểm, dự án và nội dung nhu cầu. Cùng một khách có thể phát sinh cơ hội mới. Người có quyền quyết định và giữ lịch sử xử lý tranh chấp.',''],
    'ai-task':['Nháp công việc do AI chuẩn bị','Nội dung: Xác nhận ETA cho bốn thiết bị còn thiếu của đơn IDW-2026-042. Người phụ trách và hạn đang để trống; cần xác định trước khi giao việc. Không có lệnh nào được gửi từ mockup.','']
  }[kind];
  if(!content)return;
  $('#dialog-content').innerHTML=`<h2 id="dialog-title">${content[0]}</h2><p>${content[1]}</p><div class="dialog-actions">${content[2]}<button class="button" data-action="close-dialog">Đóng</button></div>`;
  $('#detail-dialog').showModal();
}
function normalize(value) { return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d'); }
function updateSearch() {
  const query=normalize($('#global-search').value.trim());
  const box=$('#search-results');
  if(!query) { box.hidden=true; box.innerHTML=''; return; }
  const matches=[...mainNav,...utilityNav,['deal','Hồ sơ giao dịch']].map(([route,name])=>({route,name,desc:'Màn hình'})).concat(moduleList.map(item=>({route:item.route,name:item.name,desc:'Phân hệ'}))).filter(item=>normalize(item.name).includes(query)).slice(0,8);
  box.innerHTML=matches.length?matches.map(item=>`<button type="button" class="search-result" data-go="${item.route}"><strong>${item.name}</strong><small>${item.desc}</small></button>`).join(''):'<div class="empty-state">Không tìm thấy màn hình phù hợp.</div>';
  box.hidden=false;
}

document.addEventListener('click',event=>{
  const trigger=event.target.closest('button');
  if(!trigger)return;
  if(trigger.id==='menu-button') return toggleMenu();
  if(trigger.id==='sidebar-close') return closeMenu();
  if(trigger.dataset.reportPeriod) { businessViewState.period=trigger.dataset.reportPeriod; return render(); }
  if(trigger.dataset.financeFilter) { businessViewState.finance=trigger.dataset.financeFilter; return render(); }
  if(trigger.dataset.ticketFilter) { businessViewState.tickets=trigger.dataset.ticketFilter; return render(); }
  if(trigger.dataset.teamFilter) { businessViewState.team=trigger.dataset.teamFilter; return render(); }
  if(trigger.dataset.openInvoice) return openInvoiceRecord(trigger.dataset.openInvoice);
  if(trigger.dataset.openTicket) return openTicketRecord(trigger.dataset.openTicket);
  if(trigger.dataset.pageView) { const key=trigger.dataset.pageView==='sales'?'salesPage':'operationsPage'; state[key]+=Number(trigger.dataset.pageStep); return render(); }
  if(trigger.dataset.openOperation) return openOperationRecord(trigger.dataset.openOperation);
  if(trigger.dataset.openSales) return openSalesRecord(trigger.dataset.openSales);
  if(trigger.dataset.go) { if(trigger.dataset.opsType) { state.operationsType=trigger.dataset.opsType; state.operationsPage=1; } if(trigger.dataset.partnerView)state.partnerTab=trigger.dataset.partnerView; if($('#record-drawer').open)$('#record-drawer').close(); $('#global-search').value=''; updateSearch(); return navigate(trigger.dataset.go); }
  if(trigger.dataset.opsStatus) { state.operationsStatus=trigger.dataset.opsStatus; state.operationsPage=1; return render(); }
  if(trigger.dataset.salesStatus) { state.salesStatus=trigger.dataset.salesStatus; state.salesPage=1; return render(); }
  if(trigger.dataset.tab) { const [group,value]=trigger.dataset.tab.split(':'); if(group==='deal')state.dealTab=value; if(group==='partner')state.partnerTab=value; return render(); }
  if(trigger.dataset.prompt) { state.aiPrompt=trigger.dataset.prompt; return render(); }
  if(trigger.dataset.dialog) { if($('#record-drawer').open)$('#record-drawer').close(); return openDialog(trigger.dataset.dialog); }
  if(trigger.dataset.action==='close-dialog') return $('#detail-dialog').close();
  if(trigger.dataset.action==='close-drawer') return $('#record-drawer').close();
  if(trigger.dataset.action==='reset-operations') { state.operationsStatus='all'; state.operationsType='all'; state.operationsQuery=''; state.operationsPage=1; selectedRecords.clear(); return render(); }
  if(trigger.dataset.action==='reset-sales') { state.salesStatus='all'; state.salesQuery=''; state.salesPage=1; return render(); }
  if(trigger.dataset.action==='export-operations') return exportOperationRows();
  if(trigger.dataset.action==='show-selected') { const names=[...selectedRecords].join(', '); $('#dialog-content').innerHTML=`<h2 id="dialog-title">Hồ sơ đã chọn</h2><p>${names}. Đây là dữ liệu minh họa; bạn có thể mở từng dòng để xem người phụ trách và bước tiếp theo.</p><div class="dialog-actions"><button class="button primary" data-action="close-dialog">Đóng</button></div>`; return $('#detail-dialog').showModal(); }
  if(trigger.dataset.action==='approve-demo') { state.approved=true; state.salesStatus='all'; state.salesPage=1; $('#detail-dialog').close(); render(); return showToast('Đã ghi nhận duyệt trong bản mockup. Tải lại trang để đặt lại.'); }
  if(trigger.dataset.action==='flowcharts') location.href='../../diagrams/idw-ai-office/idw-ai-office-flowcharts.html';
});
document.addEventListener('submit',event=>{
  if(event.target.id!=='partner-demo-form')return;
  event.preventDefault();
  $('#dialog-content').innerHTML='<h2 id="dialog-title">Bước tiếp nhận nhu cầu</h2><p>Khi triển khai, hệ thống sẽ ghi thời điểm gửi, kiểm tra cơ hội có thể trùng và đưa vào hàng đợi để giám đốc tiếp nhận, phân loại, giao kinh doanh. Bản mockup không lưu hoặc gửi thông tin trong biểu mẫu.</p><div class="dialog-actions"><button class="button primary" data-action="close-dialog">Đã hiểu</button></div>';
  $('#detail-dialog').showModal();
});
$('#global-search').addEventListener('input',updateSearch);
$('#side-search').addEventListener('input',renderSidebar);
document.addEventListener('input',event=>{
  if(!['operations-search','sales-search'].includes(event.target.id))return;
  const position=event.target.selectionStart;
  const id=event.target.id;
  if(id==='operations-search') { state.operationsQuery=event.target.value; state.operationsPage=1; }
  else { state.salesQuery=event.target.value; state.salesPage=1; }
  render();
  const input=$('#'+id);input.focus();input.setSelectionRange(position,position);
});
document.addEventListener('change',event=>{
  if(event.target.id==='operations-type') { state.operationsType=event.target.value; state.operationsPage=1; render(); }
  if(event.target.matches('.row-check')) { event.target.checked?selectedRecords.add(event.target.dataset.checkRecord):selectedRecords.delete(event.target.dataset.checkRecord); render(); }
  if(event.target.id==='select-all-operations') { operationVisibleRows().slice((state.operationsPage-1)*pageSize,state.operationsPage*pageSize).forEach(record=>event.target.checked?selectedRecords.add(record.id):selectedRecords.delete(record.id)); render(); }
});
$('#global-search').addEventListener('keydown',event=>{ if(event.key==='Enter') { const first=$('#search-results [data-go]'); if(first) { event.preventDefault(); first.click(); } } });
document.addEventListener('keydown',event=>{
  if(event.key==='/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); $('#global-search').focus(); }
  if(event.key==='Escape') { closeMenu(); $('#search-results').hidden=true; }
  if(event.key==='Enter' && document.activeElement.matches('tr[data-record]')) openOperationRecord(document.activeElement.dataset.record);
  if(event.key==='Enter' && document.activeElement.matches('tr[data-sales-record]')) openSalesRecord(document.activeElement.dataset.salesRecord);
  if(['ArrowLeft','ArrowRight'].includes(event.key) && document.activeElement.matches('[role="tab"]')) {
    const tabs=[...document.activeElement.parentElement.querySelectorAll('[role="tab"]')];
    const index=tabs.indexOf(document.activeElement);
    event.preventDefault();
    const next=tabs[(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];
    const nextTab=next.dataset.tab;
    const nextOpsStatus=next.dataset.opsStatus;
    const nextSalesStatus=next.dataset.salesStatus;
    next.click();
    const selector=nextTab?`[data-tab="${nextTab}"]`:nextOpsStatus?`[data-ops-status="${nextOpsStatus}"]`:`[data-sales-status="${nextSalesStatus}"]`;
    document.querySelector(selector)?.focus();
  }
});
document.addEventListener('click',event=>{ if(!event.target.closest('.global-search'))$('#search-results').hidden=true; });
document.addEventListener('click',event=>{ const row=event.target.closest('tr[data-record]'); if(row&&!event.target.closest('input,button'))openOperationRecord(row.dataset.record); });
document.addEventListener('click',event=>{ const row=event.target.closest('tr[data-sales-record]'); if(row&&!event.target.closest('input,button'))openSalesRecord(row.dataset.salesRecord); });
$('#mobile-scrim').addEventListener('click',closeMenu);
window.addEventListener('hashchange',()=>{ render(); window.scrollTo(0,0); });
render();
