const imports = {};

const { instance: { exports: { multiply } } } = await WebAssembly.instantiate(await(await fetch("./build/optimized.wasm")).arrayBuffer(), imports);
console.log(multiply);
console.log(multiply(4, 8));