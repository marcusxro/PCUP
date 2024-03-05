import React from 'react'

const ViewData = () => {
  return (
    <div>
      {data.map((item) => (
                    <div className="addModals">
                        <div className="firstColumn">
                            <div className="logoCon">
                                <div className="logo">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="textCon">
                                    <div className="firstText">
                                        PRESIDENTIAL COMMISION FOR THE URBAN POOR
                                    </div>
                                    <div className="secText">
                                        Information Technology Unit
                                    </div>
                                </div>
                            </div>
                            <div className="conNum">
                                <label htmlFor="conNum"> Control Number</label>
                                <input type="text" name='conNum' value={item.controlNum} />
                            </div>
                        </div>

                        <div className="secColumn">
                            <div className="secColumnText">
                                Computer Maintenance Request and IT Related Work Order
                            </div>
                            <div className="reqCon">
                                <div className="reqFirst">
                                    <label htmlFor="req">Requester/User Name:</label>
                                    <input type="text"/>
                                </div>
                                <div className="reqSec">
                                    <label htmlFor="reqDate">Request Date:</label>
                                    <input type="Date" name='reqDate'/>
                                </div>
                            </div>
                            <div className="Unit">
                                <label htmlFor="unit">Unit/Division:</label>
                                <input type="text" name='unit' />
                            </div>
                        </div>
                        <div className="thirdColumn">
                            <div className="DescOfMain">
                                Description / Work Order Requested
                            </div>
                            <div className="checkBoxCol">
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">TroubleShooting and Repair</label>
                                    <input type="checkbox" name='TroubleSh' />
                                </div>
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">Internet/LAN Connection Check-up</label>
                                    <input type="checkbox" name='TroubleSh'  />
                                </div>
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">Preventive Maintenance</label>
                                    <input type="checkbox" name='TroubleSh'  />
                                </div>
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">Training and Orientation</label>
                                    <input type="checkbox" name='TroubleSh' />
                                </div>
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">IT Equipment inspection</label>
                                    <input type="checkbox" name='TroubleSh'  />
                                </div>
                                <div className="firstCheck">
                                    <label htmlFor="TroubleSh">Others, please specify</label>
                                    <input type="input" name='TroubleSh' />
                                </div>
                            </div>
                        </div>

                        <div className="fourthCol">
                            <div className="fourthColText">
                                Briefly Explain the Problem Encountered:
                            </div>
                            <textarea name="" id="" cols="30" rows="10"  />
                        </div>

                        <div className="fifthCol">
                            <div className="fifthColText">
                                Equipment / Items submitted:P
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Brand:</th>
                                        <th>Inventory Tag No.:</th>
                                        <th>Accountable Person:</th>
                                        <th>Model:</th>
                                        <th>Serial Number:</th>
                                        <th>Accessoories:</th>
                                        <th>Others: </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" className='equipInput'  /></td>
                                        <td><input type="text" className='equipInput'  /></td>
                                        <td><input type="text" className='equipInput' /></td>
                                        <td><input type="text" className='equipInput'  /></td>
                                        <td><input type="text" className='equipInput'  /></td>
                                        <td><input type="text" className='equipInput' /></td>
                                        <td><input type="text" className='equipInput'  /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="line"></div>
                        <div className="bottomConText">
                            To be fill-out by IT Personel only
                        </div>
                        <div className="receivedDate">
                            <label htmlFor="">Recieved Date:</label>
                            <input type="Date"/>
                        </div>
                        <div className="sixthCol">
                            <div className="sixthColText">
                                Action taken and material used:
                            </div>
                            <textarea name="" id="" cols="30" rows="10"  />
                        </div>

                        <div className="seventhCol">
                            <div className="seventhColText">
                                Remarks / Recommendation:
                            </div>
                            <textarea name="" id="" cols="30" rows="10"  />
                        </div>
                        <div className="eigthCol">
                            <div className="eigthColText">
                                Status:
                            </div>
                            <div className="statusBotCon">
                                <div className="statusCon">
                                    <div className="completed">
                                        <input type="checkbox" name='check' />
                                        <label htmlFor="check"  >Completed</label>
                                    </div>
                                    <div className="inCom">
                                        <input type="checkbox" name='check' />
                                        <label htmlFor="check"  >Incomplete</label>
                                    </div>
                                </div>
                                <div className="statusDate">
                                    <label htmlFor="date">Date:</label>
                                    <input type="Date" name='date'  />
                                </div>
                            </div>
                        </div>

                        <div className="inComStats">
                            <textarea name="" id="" cols="30" rows="10" placeholder='Fill out if you checked incomplete'  />
                        </div>

                        <div className="ninthCol">
                            <div className="ninthFirst">
                                <label htmlFor="first">Checked/Repaired by:</label>
                                <input type="text"  />
                            </div>
                            <div className="ninthSec">
                                <label htmlFor="note">Noted by:</label>
                                <input type="text" name='note'/>
                            </div>
                        </div>
                        <div className="tenthCol">
                            <div className="tenthText">
                                End-User feedback/remarks:
                            </div>
                            <textarea name="" id="" cols="30" rows="10" />
                        </div>
                        <div className="lastCol">
                            <div className="lastColFirst">
                                <label htmlFor="name">Conformed by:</label>
                                <input type="text" name='name' />
                            </div>
                            <div className="lastColSec">
                                <label htmlFor="name">Returned Date:</label>
                                <input type="Date" name='name' />
                            </div>
                        </div>
                    </div>
                ))}
    </div>
  )
}

export default ViewData
