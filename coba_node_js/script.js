const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan angka: ", (value) => {
  if (parseInt(value) == 0 || parseInt(value) > 100) {
    console.log("angka yg diinputkan salah");
  } else if (parseInt(value) >= 92) {
    console.log("Nilai adalah: A");
  } else if (parseInt(value) >= 80) {
    console.log("Nilai adalah: B");
  } else if (parseInt(value) >= 73) {
    console.log("Nilai adalah: C");
  } else if (parseInt(value) >= 60) {
    console.log("Nilai adalah: D");
  } else if (parseInt(value) >= 52) {
    console.log("Nilai adalah: E");
  } else {
    console.log("Nilai adalah: F");
  }

  rl.close();
});
