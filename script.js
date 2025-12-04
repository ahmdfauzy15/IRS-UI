// Data contoh untuk laporan APOLO dengan status terbatas
const apoloReportsData = [
    { id: 1, jenis: "Laporan Keuangan Q1", jenisValue: "keuangan", periode: "Januari - Maret 2023", periodeValue: "q1", tanggal: "15 April 2023", deadline: "30 April 2023", status: "berhasil", sistem: "APOLO" },
    { id: 2, jenis: "Laporan Kinerja Tahunan", jenisValue: "kinerja", periode: "2022", periodeValue: "2022", tanggal: "5 Maret 2023", deadline: "31 Maret 2023", status: "terlambat", sistem: "APOLO" },
    { id: 3, jenis: "Laporan Audit Internal", jenisValue: "audit", periode: "Semester II 2022", periodeValue: "q3", tanggal: "20 Februari 2023", deadline: "15 Maret 2023", status: "tidak-berhasil", sistem: "APOLO" },
    { id: 4, jenis: "Laporan Keuangan Q4", jenisValue: "keuangan", periode: "Oktober - Desember 2022", periodeValue: "q4", tanggal: "10 Januari 2023", deadline: "31 Januari 2023", status: "berhasil", sistem: "APOLO" },
    { id: 5, jenis: "Laporan Kepatuhan Regulasi", jenisValue: "kepatuhan", periode: "2022", periodeValue: "2022", tanggal: "28 Desember 2022", deadline: "15 Januari 2023", status: "berhasil", sistem: "APOLO" },
    { id: 6, jenis: "Laporan Keuangan Q2", jenisValue: "keuangan", periode: "April - Juni 2023", periodeValue: "q2", tanggal: "15 Juli 2023", deadline: "31 Juli 2023", status: "terlambat", sistem: "APOLO" },
    { id: 7, jenis: "Laporan Operasional Bulanan", jenisValue: "kinerja", periode: "Juni 2023", periodeValue: "q2", tanggal: "5 Juli 2023", deadline: "10 Juli 2023", status: "berhasil", sistem: "APOLO" },
    { id: 8, jenis: "Laporan Audit Eksternal", jenisValue: "audit", periode: "2022", periodeValue: "2022", tanggal: "15 Februari 2023", deadline: "28 Februari 2023", status: "tidak-berhasil", sistem: "APOLO" },
    { id: 9, jenis: "Laporan Likuiditas Triwulan", jenisValue: "keuangan", periode: "Januari - Maret 2023", periodeValue: "q1", tanggal: "10 April 2023", deadline: "20 April 2023", status: "berhasil", sistem: "APOLO" },
    { id: 10, jenis: "Laporan Manajemen Risiko", jenisValue: "kepatuhan", periode: "2022", periodeValue: "2022", tanggal: "30 Januari 2023", deadline: "15 Februari 2023", status: "berhasil", sistem: "APOLO" },
    { id: 11, jenis: "Laporan GCG", jenisValue: "kepatuhan", periode: "2022", periodeValue: "2022", tanggal: "25 Februari 2023", deadline: "10 Maret 2023", status: "terlambat", sistem: "APOLO" },
    { id: 12, jenis: "Laporan Keberlanjutan", jenisValue: "kinerja", periode: "2022", periodeValue: "2022", tanggal: "15 Maret 2023", deadline: "30 Maret 2023", status: "berhasil", sistem: "APOLO" }
];

// Data contoh untuk home page (campuran dari semua sistem)
const homeReportsData = [
    { id: 1, jenis: "Laporan Keuangan Q1 2023", sistem: "APOLO", periode: "Januari - Maret 2023", tanggal: "15 April 2023", status: "berhasil" },
    { id: 2, jenis: "E-Statement Tahunan 2022", sistem: "E-REPORTING", periode: "2022", tanggal: "28 Februari 2023", status: "terlambat" },
    { id: 3, jenis: "Laporan Sanksi Administratif", sistem: "SIPINA", periode: "Semester I 2023", tanggal: "15 Juli 2023", status: "berhasil" },
    { id: 4, jenis: "Laporan Audit Internal", sistem: "APOLO", periode: "2022", tanggal: "20 Februari 2023", status: "tidak-berhasil" },
    { id: 5, jenis: "E-Statement Triwulan III", sistem: "E-REPORTING", periode: "Juli - September 2023", tanggal: "10 Oktober 2023", status: "berhasil" }
];

// DOM Elements
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const contentPages = document.querySelectorAll('.content-page');
const cardBtns = document.querySelectorAll('.card-btn');
const pageTitle = document.getElementById('page-title');
const breadcrumb = document.getElementById('breadcrumb');

// Filter Elements
const filterJenis = document.getElementById('filter-jenis');
const filterStatus = document.getElementById('filter-status');
const filterPeriode = document.getElementById('filter-periode');
const filterTanggal = document.getElementById('filter-tanggal');
const applyFilterBtn = document.getElementById('apply-filter');
const resetFilterBtn = document.getElementById('reset-filter');
const clearFiltersBtn = document.querySelector('.clear-filters');
const searchApoloInput = document.getElementById('search-apolo');
const searchHomeInput = document.getElementById('home-search');
const searchBtn = document.getElementById('search-btn');

// Table Bodies
const apoloTableBody = document.getElementById('apolo-table-body');
const homeTableBody = document.getElementById('home-table-body');
const noDataApolo = document.getElementById('no-data-apolo');
const apoloShowing = document.getElementById('apolo-showing');
const apoloTotal = document.getElementById('apolo-total');
const searchResultCount = document.getElementById('search-result-count');

// Titles mapping untuk semua halaman
const titles = {
    'home-page': { title: 'Dashboard IRS', breadcrumb: 'Dashboard' },
    'apolo-page': { title: 'Laporan APOLO', breadcrumb: 'Laporan / APOLO' },
    'estatement-page': { title: 'Laporan e-reporting', breadcrumb: 'Laporan / e-Statement' },
    'sipina-page': { title: 'Laporan SIPINA', breadcrumb: 'Laporan / SIPINA' },
    'administrasi-page': { title: 'Administrasi', breadcrumb: 'Administrasi' },
    'audit-page': { title: 'Audit Log', breadcrumb: 'Audit Log' },
    'download-page': { title: 'Download', breadcrumb: 'Download' },
    'about-page': { title: 'Tentang Kami', breadcrumb: 'Tentang Kami' },
    'faq-page': { title: 'FAQ', breadcrumb: 'FAQ' }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load components
    loadSidebar();
    loadFooter();
    
    // Render tables
    renderHomeTable(homeReportsData);
    renderApoloTable(apoloReportsData);
    
    // Set today's date as default for date filter
    const today = new Date().toISOString().split('T')[0];
    if (filterTanggal) filterTanggal.value = today;
    
    // Initialize stats
    updateApoloStats();
    
    // Set event listeners
    setupEventListeners();
    
    // Setup FAQ functionality
    setupFAQFunctionality();
    
    // Simulate loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Load Sidebar Component
function loadSidebar() {
    const sidebarHTML = `
        <div class="sidebar-header">
            <div class="sidebar-logo">
                <!-- Ganti icon FontAwesome dengan logo lokal -->
                <img src="assets/logos/irs-logos.png" alt="OJK Logo" class="sidebar-logo-img">
            </div>
            <div>
                <h1>IRS OJK</h1>
                <p>Sistem Pelaporan Terpusat</p>
            </div>
        </div>
        
        <nav class="sidebar-menu">
            <a href="#" class="menu-item active" data-page="home">
                <i class="fas fa-home"></i> <span>Home</span>
            </a>
            
            <div class="menu-item" id="laporan-menu">
                <i class="fas fa-file-alt"></i> <span>Laporan</span>
                <span class="menu-arrow"><i class="fas fa-chevron-right"></i></span>
            </div>
            <div class="menu-subitems" id="laporan-submenu">
                <a href="#" class="menu-subitem" data-page="apolo">
                    <i class="fas fa-chart-line"></i> Laporan APOLO
                </a>
                <a href="#" class="menu-subitem" data-page="estatement">
                    <i class="fas fa-file-signature"></i> Laporan e-reporting
                </a>
                <a href="#" class="menu-subitem" data-page="sipina">
                    <i class="fas fa-gavel"></i> Laporan SIPINA
                </a>
            </div>
            
            <a href="#" class="menu-item" data-page="download">
                <i class="fas fa-download"></i> <span>Download</span>
            </a>
        </nav>
        
        <div class="sidebar-footer">
            <p>v1.0.0 | © 2025</p>
        </div>
    `;
    
    if (sidebar) sidebar.innerHTML = sidebarHTML;
    
    // Setup sidebar event listeners
    setupSidebarEventListeners();
}

// Setup sidebar event listeners
function setupSidebarEventListeners() {
    const laporanMenu = document.getElementById('laporan-menu');
    const laporanSubmenu = document.getElementById('laporan-submenu');
    const menuItems = document.querySelectorAll('.menu-item[data-page]');
    const menuSubitems = document.querySelectorAll('.menu-subitem[data-page]');
    
    // Toggle Laporan Submenu
    if (laporanMenu) {
        laporanMenu.addEventListener('click', function(e) {
            e.preventDefault();
            if (laporanSubmenu) {
                laporanSubmenu.classList.toggle('expanded');
                this.classList.toggle('expanded');
            }
        });
    }
    
    // Main menu items click
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(`${page}-page`);
            }
        });
    });
    
    // Submenu items click
    menuSubitems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(`${page}-page`);
            }
        });
    });
}

// Load Footer Component
function loadFooter() {
    const footerHTML = `
        <div class="footer-content">
            <div class="footer-links">
                <a href="#" class="footer-link" data-page="about">Tentang Kami</a>
                <a href="#" class="footer-link" data-page="faq">FAQ</a>
               
            </div>
            <p class="footer-copyright">&copy; 2025 OJK - Sistem Pelaporan Terpusat. Semua hak dilindungi.</p>
        </div>
    `;
    
    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHTML;
    
    // Setup footer event listeners
    setupFooterEventListeners();
}

// Setup footer event listeners
function setupFooterEventListeners() {
    const footerLinks = document.querySelectorAll('.footer-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            if (page) {
                navigateToPage(`${page}-page`);
            } else {
                const linkText = this.textContent;
                alert(`Halaman "${linkText}" sedang dalam pengembangan`);
            }
        });
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Toggle Sidebar
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            toggleSidebar.innerHTML = sidebar.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Filter buttons
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', applyFilters);
    }
    
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', resetFilters);
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Search functionality
    if (searchApoloInput) {
        searchApoloInput.addEventListener('input', searchApoloReports);
    }
    
    if (searchHomeInput) {
        searchHomeInput.addEventListener('input', searchHomeReports);
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', searchApoloReports);
    }
    
    // Card buttons
    cardBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(`${page}-page`);
            }
        });
    });
    
    // View all button
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            navigateToPage('apolo-page');
        });
    }
    
    // Export button
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Data laporan APOLO berhasil diekspor ke format CSV');
        });
    }
    
    // Support button in FAQ
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            alert('Fitur hubungi dukungan akan mengarahkan Anda ke form kontak');
        });
    }
}

// Setup FAQ functionality
function setupFAQFunctionality() {
    // FAQ Categories filter
    const faqCategories = document.querySelectorAll('.faq-category');
    if (faqCategories.length > 0) {
        faqCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                faqCategories.forEach(cat => cat.classList.remove('active'));
                // Add active class to clicked category
                this.classList.add('active');
                
                const selectedCategory = this.getAttribute('data-category');
                filterFAQByCategory(selectedCategory);
            });
        });
    }
    
    // FAQ Search
    const searchFAQInput = document.getElementById('search-faq');
    if (searchFAQInput) {
        searchFAQInput.addEventListener('input', function() {
            searchFAQ(this.value);
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other open FAQs
            if (faqItem.classList.contains('active')) {
                faqQuestions.forEach(q => {
                    const otherItem = q.parentElement;
                    if (otherItem !== faqItem && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });
}

// Navigation between pages
function navigateToPage(pageId) {
    // Hide all pages
    contentPages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Update page title and breadcrumb
        updatePageTitle(pageId);
        
        // Update active menu items
        updateActiveMenu(pageId);
        
        // Close sidebar on mobile
        if (window.innerWidth <= 1200) {
            sidebar.classList.remove('active');
            if (toggleSidebar) {
                toggleSidebar.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
        
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update page title and breadcrumb
function updatePageTitle(pageId) {
    if (titles[pageId]) {
        pageTitle.textContent = titles[pageId].title;
        breadcrumb.innerHTML = titles[pageId].breadcrumb;
    }
}

// Update active menu items
function updateActiveMenu(pageId) {
    // Remove active class from all menu items
    const allMenuItems = document.querySelectorAll('.menu-item, .menu-subitem');
    allMenuItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to appropriate menu item
    if (pageId === 'home-page') {
        const homeMenuItem = document.querySelector('.menu-item[data-page="home"]');
        if (homeMenuItem) homeMenuItem.classList.add('active');
    } else if (pageId === 'apolo-page') {
        const apoloSubitem = document.querySelector('.menu-subitem[data-page="apolo"]');
        if (apoloSubitem) apoloSubitem.classList.add('active');
        expandLaporanMenu();
    } else if (pageId === 'estatement-page') {
        const estatementSubitem = document.querySelector('.menu-subitem[data-page="estatement"]');
        if (estatementSubitem) estatementSubitem.classList.add('active');
        expandLaporanMenu();
    } else if (pageId === 'sipina-page') {
        const sipinaSubitem = document.querySelector('.menu-subitem[data-page="sipina"]');
        if (sipinaSubitem) sipinaSubitem.classList.add('active');
        expandLaporanMenu();
    } else if (pageId === 'about-page' || pageId === 'faq-page') {
        // For About and FAQ, we don't highlight any menu item
        // These pages are accessed from footer
    } else {
        const menuItem = document.querySelector(`.menu-item[data-page="${pageId.replace('-page', '')}"]`);
        if (menuItem) menuItem.classList.add('active');
    }
}

// Expand Laporan menu
function expandLaporanMenu() {
    const laporanSubmenu = document.getElementById('laporan-submenu');
    const laporanMenuItem = document.getElementById('laporan-menu');
    
    if (laporanSubmenu) laporanSubmenu.classList.add('expanded');
    if (laporanMenuItem) laporanMenuItem.classList.add('expanded');
}

// Render home table
function renderHomeTable(data) {
    if (!homeTableBody) return;
    
    homeTableBody.innerHTML = '';
    
    if (data.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-light);">
                <i class="fas fa-search fa-2x" style="margin-bottom: 15px; opacity: 0.3;"></i>
                <p>Tidak ada laporan yang sesuai dengan pencarian</p>
            </td>
        `;
        homeTableBody.appendChild(row);
        return;
    }
    
    data.forEach(report => {
        const row = document.createElement('tr');
        
        // Status badge
        let statusBadge = '';
        if (report.status === 'berhasil') {
            statusBadge = '<span class="status berhasil">Berhasil</span>';
        } else if (report.status === 'terlambat') {
            statusBadge = '<span class="status terlambat">Terlambat</span>';
        } else if (report.status === 'tidak-berhasil') {
            statusBadge = '<span class="status tidak-berhasil">Tidak Berhasil</span>';
        }
        
        // Sistem badge
        let sistemBadge = '';
        if (report.sistem === 'APOLO') {
            sistemBadge = '<span class="status apolo-badge" style="background-color: rgba(67, 97, 238, 0.1); color: #4361ee; border: 1px solid rgba(67, 97, 238, 0.3);">APOLO</span>';
        } else if (report.sistem === 'E-REPORTING') {
            sistemBadge = '<span class="status ereporting-badge" style="background-color: rgba(76, 201, 240, 0.1); color: #4cc9f0; border: 1px solid rgba(76, 201, 240, 0.3);">E-REPORTING</span>';
        } else if (report.sistem === 'SIPINA') {
            sistemBadge = '<span class="status sipina-badge" style="background-color: rgba(247, 37, 133, 0.1); color: #f72585; border: 1px solid rgba(247, 37, 133, 0.3);">SIPINA</span>';
        }
        
        row.innerHTML = `
            <td>${report.id}</td>
            <td><strong>${report.jenis}</strong></td>
            <td>${sistemBadge}</td>
            <td>${report.periode}</td>
            <td>${report.tanggal}</td>
            <td>${statusBadge}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view-only" title="View Only Mode">
                        <i class="fas fa-eye"></i> Lihat
                    </button>
                </div>
            </td>
        `;
        
        homeTableBody.appendChild(row);
    });
    
    // Add event listener to view buttons
    document.querySelectorAll('.action-btn.view-only').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Anda sedang dalam mode "View Only". Hubungi administrator untuk akses edit.');
        });
    });
}

// Render APOLO table
function renderApoloTable(data) {
    if (!apoloTableBody) return;
    
    apoloTableBody.innerHTML = '';
    
    if (data.length === 0) {
        noDataApolo.style.display = 'block';
        apoloShowing.textContent = '0';
        if (searchResultCount) searchResultCount.textContent = '0 laporan ditemukan';
        return;
    }
    
    noDataApolo.style.display = 'none';
    apoloShowing.textContent = data.length;
    apoloTotal.textContent = apoloReportsData.length;
    if (searchResultCount) searchResultCount.textContent = `${data.length} laporan ditemukan`;
    
    data.forEach(report => {
        const row = document.createElement('tr');
        
        // Status badge
        let statusBadge = '';
        if (report.status === 'berhasil') {
            statusBadge = '<span class="status berhasil">Berhasil</span>';
        } else if (report.status === 'terlambat') {
            statusBadge = '<span class="status terlambat">Terlambat</span>';
        } else if (report.status === 'tidak-berhasil') {
            statusBadge = '<span class="status tidak-berhasil">Tidak Berhasil</span>';
        }
        
        row.innerHTML = `
            <td>${report.id}</td>
            <td><strong>${report.jenis}</strong></td>
            <td>${report.periode}</td>
            <td>${report.tanggal}</td>
            <td>${report.deadline}</td>
            <td>${statusBadge}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view-only" title="View Only Mode">
                        <i class="fas fa-eye"></i> Lihat
                    </button>
                </div>
            </td>
        `;
        
        apoloTableBody.appendChild(row);
    });
    
    // Add event listener to view buttons
    document.querySelectorAll('.action-btn.view-only').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Anda sedang dalam mode "View Only". Hubungi administrator untuk akses edit.');
        });
    });
}

// Update APOLO stats
function updateApoloStats() {
    const total = apoloReportsData.length;
    const berhasil = apoloReportsData.filter(r => r.status === 'berhasil').length;
    const terlambat = apoloReportsData.filter(r => r.status === 'terlambat').length;
    const tidakBerhasil = apoloReportsData.filter(r => r.status === 'tidak-berhasil').length;
    
    // Update stat cards if they exist
    const statCards = document.querySelectorAll('.stat-value');
    if (statCards.length >= 4) {
        statCards[0].textContent = total;
        statCards[1].textContent = berhasil;
        statCards[2].textContent = terlambat;
        statCards[3].textContent = tidakBerhasil;
    }
}

// Apply filters to APOLO table
function applyFilters() {
    const jenis = filterJenis ? filterJenis.value : 'all';
    const status = filterStatus ? filterStatus.value : 'all';
    const periode = filterPeriode ? filterPeriode.value : 'all';
    const tanggal = filterTanggal ? filterTanggal.value : '';
    
    let filteredData = apoloReportsData;
    
    // Filter by jenis
    if (jenis !== 'all') {
        filteredData = filteredData.filter(report => report.jenisValue === jenis);
    }
    
    // Filter by status
    if (status !== 'all') {
        filteredData = filteredData.filter(report => report.status === status);
    }
    
    // Filter by periode
    if (periode !== 'all') {
        filteredData = filteredData.filter(report => report.periodeValue === periode);
    }
    
    // Filter by tanggal (simplified)
    if (tanggal) {
        // Convert filter date to Indonesian date format for comparison
        const filterDate = new Date(tanggal);
        const filterMonth = filterDate.getMonth() + 1;
        const filterYear = filterDate.getFullYear();
        
        filteredData = filteredData.filter(report => {
            // Extract month and year from report date
            const reportDateStr = report.tanggal;
            const reportParts = reportDateStr.split(' ');
            const reportMonth = getMonthNumber(reportParts[1]);
            const reportYear = parseInt(reportParts[2]);
            
            // Compare year and month
            return reportYear === filterYear && reportMonth === filterMonth;
        });
    }
    
    renderApoloTable(filteredData);
}

// Reset all filters
function resetFilters() {
    if (filterJenis) filterJenis.value = 'all';
    if (filterStatus) filterStatus.value = 'all';
    if (filterPeriode) filterPeriode.value = 'all';
    if (filterTanggal) {
        const today = new Date().toISOString().split('T')[0];
        filterTanggal.value = today;
    }
    if (searchApoloInput) searchApoloInput.value = '';
    
    renderApoloTable(apoloReportsData);
}

// Search APOLO reports
function searchApoloReports() {
    const searchTerm = searchApoloInput ? searchApoloInput.value.toLowerCase() : '';
    
    if (!searchTerm) {
        // If search is empty, apply filters if any
        applyFilters();
        return;
    }
    
    let filteredData = apoloReportsData;
    
    // Apply existing filters first
    const jenis = filterJenis ? filterJenis.value : 'all';
    const status = filterStatus ? filterStatus.value : 'all';
    const periode = filterPeriode ? filterPeriode.value : 'all';
    const tanggal = filterTanggal ? filterTanggal.value : '';
    
    if (jenis !== 'all') {
        filteredData = filteredData.filter(report => report.jenisValue === jenis);
    }
    
    if (status !== 'all') {
        filteredData = filteredData.filter(report => report.status === status);
    }
    
    if (periode !== 'all') {
        filteredData = filteredData.filter(report => report.periodeValue === periode);
    }
    
    if (tanggal) {
        const filterDate = new Date(tanggal);
        const filterMonth = filterDate.getMonth() + 1;
        const filterYear = filterDate.getFullYear();
        
        filteredData = filteredData.filter(report => {
            const reportDateStr = report.tanggal;
            const reportParts = reportDateStr.split(' ');
            const reportMonth = getMonthNumber(reportParts[1]);
            const reportYear = parseInt(reportParts[2]);
            
            return reportYear === filterYear && reportMonth === filterMonth;
        });
    }
    
    // Then apply search filter
    filteredData = filteredData.filter(report => 
        report.jenis.toLowerCase().includes(searchTerm) ||
        report.periode.toLowerCase().includes(searchTerm) ||
        report.tanggal.toLowerCase().includes(searchTerm) ||
        report.deadline.toLowerCase().includes(searchTerm)
    );
    
    renderApoloTable(filteredData);
}

// Search home reports
function searchHomeReports() {
    const searchTerm = searchHomeInput ? searchHomeInput.value.toLowerCase() : '';
    
    if (!searchTerm) {
        renderHomeTable(homeReportsData);
        return;
    }
    
    const filteredData = homeReportsData.filter(report => 
        report.jenis.toLowerCase().includes(searchTerm) ||
        report.sistem.toLowerCase().includes(searchTerm) ||
        report.periode.toLowerCase().includes(searchTerm) ||
        report.tanggal.toLowerCase().includes(searchTerm)
    );
    
    renderHomeTable(filteredData);
}

// Filter FAQ by category
function filterFAQByCategory(category) {
    const faqSections = document.querySelectorAll('.faq-category-section');
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (category === 'all') {
        // Show all sections and items
        faqSections.forEach(section => {
            section.style.display = 'block';
        });
        faqItems.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        // Hide all sections first
        faqSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show only selected category
        const selectedSection = document.querySelector(`.faq-category-section[data-category="${category}"]`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
            
            // Show all items in this section
            const itemsInSection = selectedSection.querySelectorAll('.faq-item');
            itemsInSection.forEach(item => {
                item.style.display = 'block';
            });
        }
    }
}

// Search FAQ
function searchFAQ(searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const faqSections = document.querySelectorAll('.faq-category-section');
    
    if (!searchTerm) {
        // Show all items if search is empty
        faqItems.forEach(item => {
            item.style.display = 'block';
        });
        
        faqSections.forEach(section => {
            section.style.display = 'block';
        });
        
        // Update category filter to show all
        const allCategory = document.querySelector('.faq-category[data-category="all"]');
        if (allCategory) {
            const categories = document.querySelectorAll('.faq-category');
            categories.forEach(cat => cat.classList.remove('active'));
            allCategory.classList.add('active');
        }
        
        return;
    }
    
    // Hide all sections first
    faqSections.forEach(section => {
        section.style.display = 'none';
    });
    
    let hasResults = false;
    
    // Show items that match search term
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
        
        if (question.includes(searchTermLower) || answer.includes(searchTermLower)) {
            item.style.display = 'block';
            
            // Show the parent section
            const parentSection = item.closest('.faq-category-section');
            if (parentSection) {
                parentSection.style.display = 'block';
            }
            
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });
    
    // If no results found
    if (!hasResults) {
        const faqList = document.querySelector('.faq-list');
        let noResults = document.getElementById('no-faq-results');
        
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.id = 'no-faq-results';
            noResults.className = 'no-data';
            noResults.innerHTML = `
                <i class="fas fa-search fa-3x"></i>
                <h4>Tidak ditemukan</h4>
                <p>Tidak ada hasil yang cocok dengan pencarian Anda</p>
            `;
            if (faqList) {
                faqList.appendChild(noResults);
            }
        }
        noResults.style.display = 'block';
    } else {
        const noResults = document.getElementById('no-faq-results');
        if (noResults) {
            noResults.style.display = 'none';
        }
    }
}

// Helper function to get month number from Indonesian month name
function getMonthNumber(monthName) {
    const months = {
        'Januari': 1, 'Februari': 2, 'Maret': 3, 'April': 4,
        'Mei': 5, 'Juni': 6, 'Juli': 7, 'Agustus': 8,
        'September': 9, 'Oktober': 10, 'November': 11, 'Desember': 12
    };
    
    return months[monthName] || 0;
}

// Initialize on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});