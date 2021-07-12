import React,{Component} from 'react'
import { Card } from 'react-bootstrap'
import { Bar, Radar } from 'react-chartjs-2'
import {info} from './Info'
import st from './index.css'
const data1={
    labels:info.language,
    datasets:[{
        data:info['language-proficiency'],
        label:"Language-proficiency",
        spanGaps:true,
        borderColor:"brown",
        borderWidth:1,
        backgroundColor:"rgba(225,0,0,0.8)"

        
}]
}
const data2={
    labels:info.education[0].subjects,
    datasets:[
        {
        data:info.education[0]['IGCSEresultsin%'],
        label:"IGCESE results",
        backgroundColor:"rgba(200,0,0,1)"
    },
    {
        data:info.education[0]['A-levelresultsin%'],
        label:"A-level results",
        backgroundColor:"rgba(0,0,0,1)"

    }
    ]
}
const opt1={
    title:{
        display:true,
      
    }
}
const opt2={
    title:{
        text:"Cambridge IGCSE and A-level Qualification (in percentile)",
        display:true
    },
    scales:{
        yAxes:[{
            ticks:{
                suggestedMin:50,
                suggestedMax:100,
                stepSize:10
            }
        }]
    },
    layout:{
        padding:{
            left:0,
            right:0,
            top:0,
            bottom:0
        }
    }

}
class Mabout  extends Component{
    render(){ 
        return(
            <div>
                 <Card style={{width:"27rem",height:"3rem",borderStyle:"solid",borderRadius:"10%",marginLeft:"3rem",marginTop:"2rem",backgroundColor:"rgba(153,204,255,0.9)"}}>
                     <div style={{width:"35rem",marginLeft:"1rem"}}>
                         <h2>My skills and study records</h2>
                     </div>
                 </Card>
                 <Card style={{width:"24rem",height:"22rem",borderStyle:"solid",borderRadius:"10%",marginLeft:"5rem",marginTop:"2rem",backgroundColor:"rgba(255,179,255,0.8)"}}>
                     <div style={{width:"35rem",marginLeft:"-6rem"}}>
                         <Radar data={data1} options={opt1}/>
                     </div>
                 </Card>
                 <Card style={{width:"39rem",height:"22rem",borderStyle:"solid",borderRadius:"10%",marginLeft:"30rem",marginTop:"-22rem",backgroundColor:"rgba(255,179,255,0.8)"}}>
                     <div style={{width:"35rem",marginLeft:"2rem",marginTop:"1rem"}}>
                         <Bar data={data2} options={opt2}/>
                     </div>
                 </Card>

            </div>
        
            
           
        
            
        
      
    )
}
}
export default Mabout