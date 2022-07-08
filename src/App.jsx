import React, { useState, useRef, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { ReportList } from "./components/ReportList"


const KEY = 'superSecreta'

export function App() {
    const [reports, setReports] = useState([]);

    const reportRef = useRef();

    useEffect( () => {
        const storedReports = JSON.parse(localStorage.getItem(KEY));
        if (storedReports){
            setReports(storedReports);
        }

    }, [])

    useEffect( () => {
        localStorage.setItem(KEY, JSON.stringify(reports))
    }, [reports]);

    const toggleReport = (id) => {
        const newReport = [...reports];
        const report = newReport.find((report) => report.id === id);
        report.viewed = !report.viewed;
        setReports(newReport);

    }


    const reportAdd = () => {
        const task = reportRef.current.value;
        if (task === '') return;

        setReports((prevReports) => {
            return [...prevReports, {id: uuidv4(), task, viewed: false}]
        });

        reportRef.current.value = null;
    };

    const deleteViewed = () => {
        const newReports = reports.filter((report) => !report.viewed);
        setReports(newReports)
    }

    return (
            <>
                <ReportList reports={reports} toggleReport={toggleReport}/>
                <input ref={reportRef} type='text' placeholder="Add Report" />
                <button onClick={reportAdd}>+</button>
                <button onClick={deleteViewed}>-</button>
                <div>You have {reports.filter((report) => !report.viewed).length} reports to view</div>
            </>     
        );
}