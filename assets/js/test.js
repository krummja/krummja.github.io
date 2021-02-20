const scale = 22;

let container = document.createElement("div");
container.attr('display', 'flex');

let root = d3.select("div#js-tests");

container.append(root);

root.append("svg")
    .attr('width', 25*scale)
    .attr('height', 10*scale);

let svg = d3.select("div#js-tests svg")

for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 10; y++) {
        svg.append('rect')
           .attr('transform', `translate(${x*scale}, ${y*scale})`)
           .attr('width', scale)
           .attr('height', scale)
           .attr('fill', "white")
           .attr('stroke', "gray");
    }
}

let A = {x: 2, y: 2}, B = {x: 20, y: 8};
let N = Math.max(Math.abs(A.x - B.x), Math.abs(A.y - B.y));
for (let i = 0; i <= N; i++) {
    let t = i / N;
    let x = Math.round(A.x + (B.x - A.x) * t);
    let y = Math.round(A.y + (B.y - A.y) * t);
    svg.append('rect')
       .attr('transform', `translate(${x*scale}, ${y*scale})`)
       .attr('width', scale-1)
       .attr('height', scale-1)
       .attr('fill', "hsl(0,40%,70%)");
}
