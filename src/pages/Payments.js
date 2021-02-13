import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'

export const Payments = () => {
    const [paytm, setPaytm] = useState("")
    const [gpay, setGpay] = useState("")
    const [accType, setAccType] = useState("")
    const [bankName, setBankName] = useState("")
    const [AccName, setAccName] = useState("")
    const [AccNumber, setAccNumber] = useState("")
    const [ifsc, setIfsc] = useState("")

    const saveHandler = () => {
        // console.log(facebook)
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>Paytm:</p>
                            <Input value={paytm} setValue={setPaytm} />
                            <p>Gpay:</p>
                            <Input value={gpay} setValue={setGpay} />
                            <hr/>
                            <h3>Account Details</h3>
                            <p>Account Type:</p>
                            <Input value={accType} setValue={setAccType} />
                            <p>Bank Name:</p>
                            <Input value={bankName} setValue={setBankName} />
                            <p>IFSC Code:</p>
                            <Input value={ifsc} setValue={setIfsc} />
                            <p>Account Name:</p>
                            <Input value={AccName} setValue={setAccName} />
                            <p>Account Number:</p>
                            <Input value={AccNumber} setValue={setAccNumber} />
                        </div>
                    </div>
                    <div className="about__cta">
                        <button className="btn btn--primary" onClick={saveHandler}>Save</button>
                        <DangerButton>Cancel</DangerButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
