for (let i = 3; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 0) {
    console.log(i, "prime");
  }
}
