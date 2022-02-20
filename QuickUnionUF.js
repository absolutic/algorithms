class QuickUnionUF {
  constructor(N) {
    this.id = [...Array(N).keys()];
    this.showId();
  }
  connected(p, q) {
    return this.root(p) === this.root(q);
  }
  union(p, q) {
    const i = this.root(p);
    const j = this.root(q);
    this.id[i] = j;
    this.showId();
  }
  root(i) {
    while (i != this.id[i]) i = this.id[i];
    return i;
  }
  showId() {
    console.log(`Components: ${this.id.join(",")}`);
  }
}

const N = parseInt(prompt("Enter N"));
const uf = new QuickUnionUF(N);
let p = null;
let q = null;
while (true) {
  const ans = prompt("Enter p");
  if (!ans) break;
  p = parseInt(ans);
  q = parseInt(prompt("Enter q"));
  if (!uf.connected(p, q)) {
    uf.union(p, q);
  }
}
