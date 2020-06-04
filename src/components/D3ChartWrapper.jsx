import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3';
import styles from './Orn1.module.css';
import D3Chart from './D3Chart'

const D3ChartWrapper = () => {

	const [data, setData] = useState([25, 35, 45, 60, 20])
	const svgRef = useRef()


	useEffect(() => {
		const svg = select(svgRef.current)
		const d3Chart = new D3Chart(svg);
		d3Chart.test()
		// console.log("version", version);
	}, []);
	// console.log(styles);

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

export default D3ChartWrapper
