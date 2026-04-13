// Global blogs data
let allBlogs = [];
const FALLBACK_IMAGE_BASE = 'data:image/svg+xml;utf8,';

function getFallbackImageDataUrl(title) {
  const safeTitle = String(title || 'Image unavailable')
    .replace(/[<>&"]/g, '')
    .slice(0, 60);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%' height='100%' fill='#eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#475569' font-family='Arial, sans-serif' font-size='28'>${safeTitle}</text></svg>`;
  return `${FALLBACK_IMAGE_BASE}${encodeURIComponent(svg)}`;
}

// Determine which page we're on and execute appropriate function
document.addEventListener('DOMContentLoaded', async function() {
  // Load blogs from JSON
  await loadBlogs();
  
  // Check which page we're on
  const currentPage = document.body.className || document.location.pathname;
  
  if (document.getElementById('blogGrid')) {
    // We're on blogs.html (listing page)
    initBlogsListingPage();
  } else if (document.getElementById('blogContent')) {
    // We're on blog-post.html (individual post page)
    initBlogPostPage();
  }
});

// Load blogs from JSON
async function loadBlogs() {
  try {
    const response = await fetch('data/blogs.json');
    if (!response.ok) throw new Error('Failed to load blogs');
    const data = await response.json();
    allBlogs = data.blogs;
  } catch (error) {
    console.error('Error loading blogs:', error);
    allBlogs = [];
  }
}

// ============================================
// BLOGS LISTING PAGE (blogs.html)
// ============================================
function initBlogsListingPage() {
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const blogGrid = document.getElementById('blogGrid');
  const emptyState = document.getElementById('emptyState');
  
  let currentCategory = 'all';
  let searchTerm = '';
  
  // Filter button click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      renderBlogs();
    });
  });
  
  // Search input handler
  searchInput.addEventListener('input', function() {
    searchTerm = this.value.toLowerCase();
    renderBlogs();
  });
  
  // Render blogs based on filters
  function renderBlogs() {
    let filtered = allBlogs;
    
    // Filter by category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === currentCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.excerpt.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
      );
    }
    
    // Show/hide empty state
    if (filtered.length === 0) {
      blogGrid.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }
    
    blogGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    // Render blog cards
    blogGrid.innerHTML = filtered.map(blog => `
      <a href="blog-post.html?id=${blog.id}" class="blog-card">
        <div class="blog-image">
          <img src="${blog.thumbnail}" alt="${blog.title}" onerror="this.onerror=null;this.src='${getFallbackImageDataUrl(blog.title)}';"/>
        </div>
        <div class="blog-body">
          <div class="blog-meta">
            <span class="blog-category">${blog.category}</span>
            <span class="blog-date">${formatDate(blog.date)}</span>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
          <div class="blog-footer">
            <span class="blog-date">${formatDate(blog.date)}</span>
            <span class="read-more"></span>
          </div>
        </div>
      </a>
    `).join('');
  }
  
  // Initial render
  renderBlogs();
}

// ============================================
// INDIVIDUAL BLOG POST PAGE (blog-post.html)
// ============================================
function initBlogPostPage() {
  // Get blog ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  
  if (!blogId) {
    document.getElementById('blogContent').innerHTML = '<p>Blog not found</p>';
    return;
  }
  
  // Find blog by ID
  const blog = allBlogs.find(b => b.id === blogId);
  
  if (!blog) {
    document.getElementById('blogContent').innerHTML = '<p>Blog not found</p>';
    return;
  }
  
  // Render blog post
  document.getElementById('pageTitle').textContent = blog.title + ' | Sprint Cabs';
  document.getElementById('blogImage').innerHTML = `<img src="${blog.thumbnail}" alt="${blog.title}" onerror="this.onerror=null;this.src='${getFallbackImageDataUrl(blog.title)}';"/>`;
  document.getElementById('blogCategory').textContent = blog.category;
  document.getElementById('blogDate').textContent = formatDate(blog.date);
  document.getElementById('blogTitle').textContent = blog.title;
  document.getElementById('blogContent').innerHTML = blog.content;
  
  // Find related posts (same category, different ID)
  const relatedPosts = allBlogs.filter(b => 
    b.category === blog.category && b.id !== blogId
  ).slice(0, 3);
  
  // Render related posts
  if (relatedPosts.length > 0) {
    const relatedSection = document.getElementById('relatedSection');
    const relatedGrid = document.getElementById('relatedGrid');
    
    relatedSection.style.display = 'block';
    relatedGrid.innerHTML = relatedPosts.map(post => `
      <a href="blog-post.html?id=${post.id}" class="related-card">
        <div class="related-image">
          <img src="${post.thumbnail}" alt="${post.title}" onerror="this.onerror=null;this.src='${getFallbackImageDataUrl(post.title)}';"/>
        </div>
        <div class="related-body">
          <h4 class="related-title">${post.title}</h4>
          <p class="related-date">${formatDate(post.date)}</p>
        </div>
      </a>
    `).join('');
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format date to readable format
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
