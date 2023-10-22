
import {NavLink} from 'react-router-dom';
import React , {useRef, useEffect} from 'react'
import Chart from 'chart.js/auto'


function Chartt() {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(()=>{

    if(chartInstance.current){ 
      chartInstance.current.destroy();
    }
    
    const myChartRef = chartRef.current.getContext("2d");
    
    chartInstance.current= new Chart (myChartRef, {
    
    type: "line", 
    data:{
    
      labels: [ '0' , '2004', '2008', '2012', '2016', '2020'], 
      datasets:[
    
             {
             label: "Line Chart",
    
             data: [0 ,1, 3, 6, 2, 7], 
             fill: false, 
             borderColor: '#9C21B7',
             borderWidth:2
             }
      ]

    }
    })
    return ()=>{
      if(chartInstance.current){
        chartInstance.current.destroy();
      }
    }
    
    },[]);
  
  return (
   <>
   <div>
    <p className='navbar-brand' style={{userSelect:"none", paddingLeft:"45vw"}}> Chart View </p>
    
    </div>

    

    <div className="container" style={{userSelect:"none",width:"500px", alignItems:"center", height:"400px", textAlign:"center" , marginBottom:"15px"}} >
      <NavLink className="text" style={{height:"400px"}}>
      <canvas ref={chartRef} ></canvas>
      </NavLink>
      <h4>Line Chart </h4>
    </div>
    </>
  )
}

export default Chartt
