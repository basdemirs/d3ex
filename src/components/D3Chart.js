import * as d3 from 'd3';


export default class D3Chart {
	constructor(svgRef) {
		console.log(d3.version);
		this.svgRef = svgRef

	}
	test(test) {
		console.log('test', test);
		console.log('testsvgref', this.svgRef);
		const data = [25, 35, 45, 60, 20]


		this.svgRef
			.selectAll('circle')
			.data(data)
			.join('circle')
			.attr("r", v => v)
			.attr("cx", v => v * 2)
			.attr("cy", v => v * 2)
			.attr("stroke", "red")
			.attr("stroke-width", "4")

	}
}