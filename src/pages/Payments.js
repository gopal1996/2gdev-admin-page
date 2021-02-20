import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'

export const Payments = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [accountHeader, setAccountHeader] = useState(data?.value?.accountheader[0])
    const [paytm, setPaytm] = useState(data?.value?.upi[0]?.Paytm)
    const [gpay, setGpay] = useState(data?.value?.upi[0]?.GPay)
    const [accType, setAccType] = useState(data?.value?.account[0]?.AccountType)
    const [bankName, setBankName] = useState(data?.value?.account[0]?.Bankname)
    const [AccName, setAccName] = useState(data?.value?.account[0]?.AccountHOLDERNAME)
    const [AccNumber, setAccNumber] = useState(data?.value?.account[0]?.AccountNumber)
    const [ifsc, setIfsc] = useState(data?.value?.account[0]?.IFSCCode)

    const saveHandler = () => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        let accountData = {
            Bankname: bankName,
            IFSCCode: ifsc,
            AccountType: accType,
            AccountNumber: AccNumber,
            AccountHOLDERNAME: AccName
        }

        let upiData = {
            "Paytm": paytm,
            "GPay": gpay
        }

        const sectionData = {
            "account": JSON.stringify([accountData]),
            "accountheader": JSON.stringify([accountHeader]),
            "header": JSON.stringify([heading]),
            "upi": JSON.stringify([upiData]),
        }

        fetch(`http://python.alphas9.com/update/all/3/${id}/`, {
            method: 'POST',
            headers: postHeaders,
            body: JSON.stringify(sectionData),
            redirect: "follow"
        })
        .then(res => res.json())
        .then(data => console.log("Else",data))
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>ID:</p>
                            <Input disabled value={id} setValue={setId} />
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Paytm:</p>
                            <Input value={paytm} setValue={setPaytm} />
                            <p>Gpay:</p>
                            <Input value={gpay} setValue={setGpay} />
                            <hr/>
                            <h3>Account Details</h3>
                            <p>Account Header:</p>
                            <Input value={accountHeader} setValue={setAccountHeader} />
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
