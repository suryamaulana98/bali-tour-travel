/**
 * Generate a unique booking code in format: M8-DDMMYY-XXXX
 * Example: M8-260926-A7F2
 */
export function generateBookingCode(): string {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);

  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude confusing chars: I,O,0,1
  let random = '';
  for (let i = 0; i < 4; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `M8-${dd}${mm}${yy}-${random}`;
}

/**
 * Generate a booking token (UUID-like) for secure URL access
 */
export function generateBookingToken(): string {
  const segments = [
    randomHex(8),
    randomHex(4),
    randomHex(4),
    randomHex(4),
    randomHex(12),
  ];
  return segments.join('-');
}

function randomHex(length: number): string {
  let result = '';
  const chars = '0123456789abcdef';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
