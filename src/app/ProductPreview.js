import React, { useState, useEffect } from 'react';

const ProductPreview = () => {
  const [data, setData] = useState({
    title: 'Product Title',
    price: '0.00',
    description: 'Product Description...',
    image: '',
    category_id: ''
  });

  useEffect(() => {
    // Listen for messages from the parent window (Admin Panel iframe)
    const handleMessage = (event) => {
      // In a real app, verify event.origin for security
      if (event.data && event.data.type === 'LIVE_PREVIEW') {
        setData(prevData => ({ ...prevData, ...event.data.payload }));
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Let parent know we are ready
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'PREVIEW_READY' }, '*');
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const imageUrl = data.image 
    ? `${process.env.REACT_APP_SECRET_KEY}/api/media/products/${data.image}`
    : '/images/dummy.png';

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ padding: '1rem', backgroundColor: '#fff3cd', color: '#856404', marginBottom: '2rem', borderRadius: '4px', textAlign: 'center' }}>
        <strong>Live Preview Mode</strong> - Any changes made in the admin panel will instantly reflect here.
      </div>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        {/* Left Side: Image */}
        <div style={{ flex: '1 1 400px' }}>
          <img 
            src={imageUrl} 
            alt={data.title} 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found' }}
          />
        </div>

        {/* Right Side: Details */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#333' }}>{data.title || 'Untitled Product'}</h1>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e63946' }}>
            {data.price ? `$${data.price}` : 'Price not set'}
          </div>

          <div style={{ padding: '1rem 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '1rem' }}>Summary</h3>
            <p style={{ color: '#444', lineHeight: '1.6', margin: '0' }}>
              {data.summary || 'No summary provided.'}
            </p>
          </div>

          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '1rem' }}>Description</h3>
            {/* If description is HTML (like from a rich text editor), we can use dangerouslySetInnerHTML */}
            <div 
              style={{ color: '#555', lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: data.description || '<p>No description provided.</p>' }} 
            />
          </div>

          {data.stock && (
            <div style={{ marginTop: 'auto', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#e2f0d9', color: '#385723', borderRadius: '4px', fontWeight: 'bold' }}>
              {data.stock} in stock
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
