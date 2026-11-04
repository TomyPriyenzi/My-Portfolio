export default function Background() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      backgroundColor: '#000',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to right, rgba(79,79,79,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.04) 1px, transparent 1px)',
        backgroundSize: '14px 24px'
      }} />
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: '-10%',
        height: '1000px',
        width: '1000px',
        borderRadius: '50%',
        margin: '0 auto',
        background: 'radial-gradient(circle 400px at 50% 300px, rgba(251,251,251,0.21), #000)'
      }} />
    </div>
  );
}
