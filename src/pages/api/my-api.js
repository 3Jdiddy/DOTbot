import { spawn } from 'child_process';

export default function handler(req, res) {
  const python = spawn('python', ['./src/scripts/test.py']);

  let output = '';
  python.stdout.on('data', (data) => {
    output += data.toString();
  });

  python.on('close', (code) => {
    if (code !== 0) {
      res.status(500).json({ error: 'Failed to run Python script' });
    } else {
      res.status(200).json({ output });
    }
  });
}
