// A few faint floating dots. Purely decorative, off for reduced motion via CSS media query removing the animation.
const seeds = [
  [8, 14, 26, 0], [22, 62, 22, 3], [38, 30, 30, 6], [55, 78, 24, 1.5],
  [68, 20, 28, 5], [82, 55, 20, 2.5], [92, 85, 26, 4], [15, 90, 22, 7],
]
export default function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map(([left, bottom, dur, delay], i) => (
        <span key={i} className="particle absolute h-1 w-1 rounded-full bg-a1/50"
          style={{ left: `${left}%`, bottom: `${bottom}%`, animationDuration: `${dur + 10}s`, animationDelay: `${delay}s` }} />
      ))}
    </div>
  )
}
