// Simple in-memory rate limiter (in production, use Redis or database)
const rateLimitStore = new Map();

export function checkRateLimit(userId, maxRequests = 10, windowMs = 24 * 60 * 60 * 1000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get user's request history
  let userRequests = rateLimitStore.get(userId) || [];
  
  // Remove old requests outside the window
  userRequests = userRequests.filter(timestamp => timestamp > windowStart);
  
  // Check if user has exceeded the limit
  if (userRequests.length >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: Math.min(...userRequests) + windowMs
    };
  }
  
  // Add current request
  userRequests.push(now);
  rateLimitStore.set(userId, userRequests);
  
  return {
    allowed: true,
    remaining: maxRequests - userRequests.length,
    resetTime: now + windowMs
  };
}

export function getRemainingTasks(userId, maxRequests = 10, windowMs = 24 * 60 * 60 * 1000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  let userRequests = rateLimitStore.get(userId) || [];
  userRequests = userRequests.filter(timestamp => timestamp > windowStart);
  
  return {
    used: userRequests.length,
    remaining: Math.max(0, maxRequests - userRequests.length),
    total: maxRequests
  };
}
