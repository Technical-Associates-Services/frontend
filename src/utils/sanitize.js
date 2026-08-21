import DOMPurify from 'dompurify';

/**
 * Sanitizes an untrusted HTML string to prevent Cross-Site Scripting (XSS) attacks.
 * Strips script tags, onload/onerror handlers, javascript: URIs, etc.
 * 
 * @param {string} dirty - The raw HTML string
 * @returns {string} Clean, sanitized HTML string safe for dangerouslySetInnerHTML
 */
export const sanitizeHtml = (dirty) => {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'span', 'div', 'blockquote', 'a', 'img', 'table',
      'thead', 'tbody', 'tr', 'th', 'td', 'code', 'pre', 'hr', 'figure', 'figcaption',
      'i', 'b', 'sub', 'sup'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel', 'width', 'height'],
    ALLOW_DATA_ATTR: false
  });
};

export default sanitizeHtml;
