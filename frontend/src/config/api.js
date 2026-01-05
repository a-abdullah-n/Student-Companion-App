const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const API_ENDPOINTS = {
  register: `${API_BASE_URL}/api/auth/register`,
  login: `${API_BASE_URL}/api/auth/login`,
  forgotPassword: `${API_BASE_URL}/api/auth/forgot-password`,
  resetPassword: `${API_BASE_URL}/api/auth/reset-password`,
  
  profile: `${API_BASE_URL}/api/profile/profile`,
  userStats: (userId) => `${API_BASE_URL}/api/profile/user-stats/${userId}`,
  
  expenses: `${API_BASE_URL}/api/expenses/expenses`,
  deleteExpense: (id) => `${API_BASE_URL}/api/expenses/expenses/${id}`,
  
  feed: `${API_BASE_URL}/api/feed/feed`,
  likeFeed: (postId) => `${API_BASE_URL}/api/feed/feed/${postId}/like`,
  commentFeed: (postId) => `${API_BASE_URL}/api/feed/feed/${postId}/comment`,
  deleteFeed: (postId) => `${API_BASE_URL}/api/feed/feed/${postId}`,
  deleteComment: (postId, commentId) => `${API_BASE_URL}/api/feed/feed/${postId}/comment/${commentId}`,
};

// TODO: migrate these to microservices eventually
export const LEGACY_API_BASE = 'http://localhost:5000';

