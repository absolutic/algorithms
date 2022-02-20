let p = null;
let q = null;
class UF {
	constructor(N) {
  	this.id = [...Array(N).keys()];
    this.showId();
  }
  connected(p, q) {
  	return this.id[p] === this.id[q];
  }
  union(p, q) {
  	const pid = this.id[p];
    const qid = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
    	if (this.id[i] === pid) {
      	this.id[i] = qid;
      }
    }
    this.showId();
  }
  showId() {
  	console.log(`Components: ${this.id.join(",")}`);
  }
}

const N = Number(prompt('Enter N'));
const uf = new UF(N);
do {
	p = Number(prompt('Enter p'));
  q = Number(prompt('Enter q'));
  //console.log(p, q);
  if (!isNaN(p)) {
    if (!uf.connected(p, q)) {
      uf.union(p, q);
    }
  }
} while (!isNaN(p))