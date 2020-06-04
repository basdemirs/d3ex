import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from './Orn1.module.css';

const Orn1 = () => {

	const [data, setData] = useState([25, 35, 45, 60, 20])
	const svgRef = useRef()

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		console.log("version", d3.version);

		svg
			.selectAll('circle')
			.data(data)
			.join('circle')
			.attr("r", v => v)
			.attr("cx", v => v * 2)
			.attr("cy", v => v * 2)
			.attr("stroke", "red")
			.attr("stroke-width", "4")
	}, [data]);
	console.log(styles);

	return (
		// <React.Fragment>
		<>
			<svg className={styles.svg} ref={svgRef}></svg>
			<br />
			<button onClick={() => setData(data.map(v => v + 5))}>Update Data</button>
			<button onClick={() => setData(data.filter(v => v < 35))}>Filter Data</button>
		</>
		// </React.Fragment>
	)
}

export default Orn1
