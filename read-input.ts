export async function readInput(): Promise<string> {
  return new Promise((resolve, reject) => {
    process.stdin.setEncoding('utf8');

    let inputData = '';
    
    process.stdin.on('data', (chunk) => {
      inputData += chunk;
    });
    
    process.stdin.on('end', () => {
      resolve(inputData)
    });
  })
}
