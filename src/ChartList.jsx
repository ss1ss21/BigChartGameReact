import Chart from "./Chart";
import { useEffect, useState, useRef } from "react";
import ChardsBar from "./ChardsBar";

export default function ChartList() {
    const group = [{ id: 1, group: 0, word: "first", meaning: "ilk", status: false }
                , { id: 2, group: 0, word: "last", meaning: "son", status: false }
                ,{ id: 3, group: 0, word: "murder", meaning: "cinayet", status: false }
                ,{ id: 4, group: 0, word: "numerous", meaning: "fazla", status: false }];
    const [unSelected, setUnSelected] = useState(group);
    const [isComplated, setIsComplated] = useState(false);
    const [selectedChart, setSelectedChart] = useState(unSelected[Math.floor(Math.random() * group.length)])
    const isFirstRender = useRef(true)


    const setChart = ()=>{
        setSelectedChart(unSelected[Math.floor(Math.random() * unSelected.length)])
    }
    
    const deleteChart = ()=>{
        setUnSelected((prevGroup) =>{
            return prevGroup.filter((unSelect) => (selectedChart.id !== unSelect.id))
        })
    }
    
    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current = false;
            return;
        }
        deleteChart();
        taggleComplated();
    }, [selectedChart])

    const selectNew = ()=>{
        if(unSelected.length !== 0)
        {
            console.log(isComplated)
            setChart()
            taggleComplated()
            
        }
        else
        {
            taggleComplated();
            console.log('all chart has been selected')
        }
    }

    const taggleComplated = () =>{
        console.log(`control complated ${isComplated}`)
        setIsComplated(!isComplated)
    }

    return (
        <>
        <div>
            {isComplated && <button className="newChart" onClick={selectNew}>Bitte </button>}
            {isComplated && <Chart info={selectedChart} setComplated={taggleComplated} selectNew={selectNew}/>}
        </div>
        <ChardsBar/>
        </>
    )
}