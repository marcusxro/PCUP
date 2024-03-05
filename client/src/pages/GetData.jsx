import React, { useEffect, useState } from 'react'
import AddModal from '../comp/AddModal'
import axios from 'axios'
import Logo from '../images/Logo.png'

const GetData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/getInfo')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [data])
    return (
        <div className='getData'>
            <div className="getDataText">
                Computer maintenance request database
            </div>
            <div className="dataCon">
                {data.map((item) => (
                    <div className="dataItem" key={item._id}>
                        <div className="firstData">
                            <div className="reqName">
                                {item.userName}
                            </div>
                            <div className="controlNum">
                                Control number: <span>{item.controlNum}</span>
                            </div>
                            <div className="reqDate">
                                Requested Date: <span>{item.reqDate}</span>
                            </div>
                        </div>
                        <div className="lastData">
                            <button>
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetData
