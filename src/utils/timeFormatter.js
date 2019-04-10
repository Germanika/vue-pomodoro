// Returns the time formatted as mm:ss
export default function timeFormatter(seconds = 0) {
  const minutes = Math.floor(seconds / 60);
  const secs = (`00${seconds % 60}`).slice(-2);
  return `${minutes}:${secs}`;
}
