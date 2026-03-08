import React, { useState } from 'react';
import { Link2, Copy, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Giả lập thời gian chờ API 1 giây
    setTimeout(() => {
      const fakeCode = Math.random().toString(36).substring(7);
      setShortUrl(`https://short.ly/${fakeCode}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '450px', textAlign: 'center' }}>
        <div style={{ backgroundColor: '#2563eb', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <Link2 color="#fff" size={30} />
        </div>
        <h1 style={{ fontSize: '24px', margin: '0 0 10px' }}>URL Shortener</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>Rút gọn link nhanh - Team AMD_201</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="url" 
            placeholder="Dán link dài vào đây..." 
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #e2e8f0', marginBottom: '15px', boxSizing: 'border-box' }}
          />
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', backgroundColor: '#2563eb', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            {loading ? 'Đang xử lý...' : 'Rút gọn ngay ✨'}
          </button>
        </form>

        {shortUrl && (
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input readOnly value={shortUrl} style={{ flex: 1, padding: '8px', border: 'none', background: 'transparent', color: '#2563eb', fontWeight: 'bold' }} />
              <button onClick={() => { navigator.clipboard.writeText(shortUrl); setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {copied ? <CheckCircle size={20} color="green" /> : <Copy size={20} color="#64748b" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;