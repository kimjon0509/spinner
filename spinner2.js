process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = () => {
  const charToPrint = ['|', '/', '-', '\\']
  // charToPrint.push('\n')
  let totalTime = charToPrint.length * 200 + 100
  charToPrint.forEach((x, index) => setTimeout(() => {process.stdout.write(`\r${x}   `)}, (200 * index) + 100));
  setTimeout(() => console.log(), totalTime)
};

spinner();