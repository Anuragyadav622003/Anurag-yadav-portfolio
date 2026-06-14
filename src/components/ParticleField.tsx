'use client'

const PARTICLES = [
  { left: '8%', top: '15%', delay: '0s', duration: '5s', size: 'w-1 h-1', opacity: 'opacity-40' },
  { left: '22%', top: '72%', delay: '1.2s', duration: '6s', size: 'w-1.5 h-1.5', opacity: 'opacity-30' },
  { left: '45%', top: '28%', delay: '0.5s', duration: '7s', size: 'w-1 h-1', opacity: 'opacity-50' },
  { left: '68%', top: '55%', delay: '2s', duration: '5.5s', size: 'w-1 h-1', opacity: 'opacity-35' },
  { left: '85%', top: '18%', delay: '0.8s', duration: '6.5s', size: 'w-1.5 h-1.5', opacity: 'opacity-45' },
  { left: '12%', top: '88%', delay: '1.5s', duration: '8s', size: 'w-1 h-1', opacity: 'opacity-25' },
  { left: '55%', top: '82%', delay: '0.3s', duration: '5s', size: 'w-1 h-1', opacity: 'opacity-40' },
  { left: '78%', top: '38%', delay: '2.5s', duration: '7s', size: 'w-1 h-1', opacity: 'opacity-30' },
  { left: '35%', top: '48%', delay: '1s', duration: '6s', size: 'w-0.5 h-0.5', opacity: 'opacity-50' },
  { left: '92%', top: '65%', delay: '1.8s', duration: '5s', size: 'w-1 h-1', opacity: 'opacity-35' },
  { left: '5%', top: '42%', delay: '2.2s', duration: '7.5s', size: 'w-1 h-1', opacity: 'opacity-30' },
  { left: '62%', top: '12%', delay: '0.6s', duration: '6s', size: 'w-1.5 h-1.5', opacity: 'opacity-40' },
] as const

export default function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-primary ${p.size} ${p.opacity} animate-float`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
