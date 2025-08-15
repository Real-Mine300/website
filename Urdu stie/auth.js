// auth.js - Supabase authentication and session management

(function() {
  // Initialize Supabase client using config
  let supabaseClient;
  
  function initializeSupabase() {
    if (!window.supabase) {
      console.error('Supabase JS not found. Include https://cdn.jsdelivr.net/npm/@supabase/supabase-js before auth.js');
      return false;
    }
    
    if (!window.SUPABASE_CONFIG) {
      console.error('SUPABASE_CONFIG not found. Include config.js before auth.js');
      return false;
    }
    
    if (!window.supabaseClient) {
      window.supabaseClient = window.supabase.createClient(
        window.SUPABASE_CONFIG.url,
        window.SUPABASE_CONFIG.anonKey
      );
    }
    supabaseClient = window.supabaseClient;
    return true;
  }

  // Check if user is logged in and has valid session
  async function checkLoginStatus() {
    if (!initializeSupabase()) return null;
    
    try {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) {
        console.error('Error checking session:', error);
        return null;
      }
      return data.session?.user || null;
    } catch (error) {
      console.error('Error in checkLoginStatus:', error);
      return null;
    }
  }

  // Protect pages that require authentication
  async function requireAuth(redirectTo = 'login.html') {
    const user = await checkLoginStatus();
    if (!user) {
      window.location.href = redirectTo;
      return null;
    }
    return user;
  }

  // Prevent logged-in users from accessing auth pages
  async function redirectIfLoggedIn(redirectTo = 'dashboard.html') {
    const user = await checkLoginStatus();
    if (user) {
      window.location.href = redirectTo;
      return true;
    }
    return false;
  }

  // Check course access (placeholder for future purchase validation)
  async function checkCourseAccess(courseId) {
    const user = await requireAuth();
    if (!user) return false;
    
    // TODO: Implement actual course purchase validation
    // For now, just check if user is logged in
    // In the future, query a courses table or user metadata for purchased courses
    console.log(`Checking access for course: ${courseId} - User: ${user.email}`);
    
    // Placeholder: return true for now, but structure is ready for real validation
    return true;
  }

  // Get user's purchased courses count (placeholder)
  async function getPurchasedCoursesCount() {
    const user = await checkLoginStatus();
    if (!user) return 0;
    
    // TODO: Query courses table or user metadata for actual count
    // For now, return dummy data
    return 3; // Placeholder count
  }

  // Get user's course completion percentage (placeholder)
  async function getCourseCompletionPercentage() {
    const user = await checkLoginStatus();
    if (!user) return 0;
    
    // TODO: Query progress table or user metadata for actual percentage
    // For now, return dummy data
    return 65; // Placeholder percentage
  }

  // Handle login form submission
  async function handleLoginSubmit(event) {
    event.preventDefault();
    
    if (!initializeSupabase()) {
      alert('Authentication system not available');
      return;
    }
    
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Show loading state
    const submitBtn = form.querySelector('.auth-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    submitBtn.disabled = true;
    
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });
      
      if (error) {
        throw error;
      }
      
      if (data.session) {
        // Successfully logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        throw new Error('No session created');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message || 'Login failed. Please try again.');
    } finally {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  // Handle signup form submission
  async function handleSignupSubmit(event) {
    event.preventDefault();
    
    if (!initializeSupabase()) {
      alert('Authentication system not available');
      return;
    }
    
    const form = event.target;
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const agreeTerms = formData.get('agreeTerms');
    
    // Validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!agreeTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('.auth-submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    submitBtn.disabled = true;
    
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      // Show success message - don't redirect, user needs to confirm email
      alert('Account created successfully! Please check your email to confirm your account before logging in.');
      form.reset();
      
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.message || 'Signup failed. Please try again.');
    } finally {
      // Reset button state
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  // Handle logout
  async function handleLogout() {
    if (!initializeSupabase()) {
      alert('Authentication system not available');
      return;
    }
    
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        throw error;
      }
      
      // Redirect to login page
      window.location.href = 'login.html';
      
    } catch (error) {
      console.error('Logout error:', error);
      alert('Logout failed. Please try again.');
    }
  }

  // Initialize authentication system
  async function initializeAuth() {
    if (!initializeSupabase()) return;
    
    // Check if we're on an auth page (login/signup) and redirect if already logged in
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage === 'login' || currentPage === 'signup') {
      await redirectIfLoggedIn();
    }
    
    // Check if page requires authentication
    const requiresAuth = document.body.getAttribute('data-require-auth') === 'true';
    if (requiresAuth) {
      await requireAuth();
    }
  }

  // Attach event listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize auth system
    initializeAuth();
    
    // Attach form handlers
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', handleLoginSubmit);
    }
    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', handleSignupSubmit);
    }
    
    // Attach logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }
  });

  // Export functions for use in other scripts
  window.Auth = {
    checkLoginStatus,
    requireAuth,
    redirectIfLoggedIn,
    checkCourseAccess,
    getPurchasedCoursesCount,
    getCourseCompletionPercentage,
    handleLogout,
    supabaseClient: () => supabaseClient
  };
})();




