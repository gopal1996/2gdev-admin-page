import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Dropdown, Input} from './Input'

const Company = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [phone, setPhone] = useState()
    const [domain, setDomain] = useState()
    const [AccountID, setAccountID] = useState("2")
    const [isModalActive, setModalActive] = useState(false)
    const [templateDropdown, setTemplateDropdown] = useState("2")

    const [templateList, setTemplateList] = useState("")
    const [accoundList, setAccountList] = useState("")

    const [companyData, setCompanyData] = useState("")

    useEffect(() => {
        async function fetchData() {
            const postHeaders = new Headers()
            postHeaders.append("Authorization",localStorage.getItem("token"))
            postHeaders.append("Content-Type","application/json")

            const response = await fetch("http://python.alphas9.com/get/company", {
                method: 'GET',
                headers: postHeaders,
                redirect: "follow"
            })
            const payload = await response.json()
            setCompanyData(JSON.parse(payload.desc))
        }
        fetchData()
    }, [])
    
    useEffect(() => {
        async function fetchTemplateList() {
            try {
                const postHeaders = new Headers()
                postHeaders.append("Content-Type","application/json")
                postHeaders.append("Authorization",localStorage.getItem("token"))

                const response = await fetch(`http://python.alphas9.com/get/template`,{
                    method: 'GET',
                    headers: postHeaders,
                })
                const payload = await response.json()
                
                setTemplateList(JSON.parse(payload.desc))
                setTemplateDropdown(JSON.parse(payload.desc[0].id))
        
    
            } catch(err) {
            //   window.location.href ="/company"
            }
        }

        async function fetchAccountList() {
            try {
                const postHeaders = new Headers()
                postHeaders.append("Content-Type","application/json")
                postHeaders.append("Authorization",localStorage.getItem("token"))

                const response = await fetch(`http://python.alphas9.com/get/account`, {
                    method: 'GET',
                    headers: postHeaders,
                })
                const payload = await response.json()
                
                setAccountList(JSON.parse(payload.desc))
                setAccountID(JSON.parse(payload.desc[0].id))
                console.log(payload.desc[0].id)
            } catch(err) {
            //   window.location.href ="/company"
            }
        }
        fetchAccountList()
        fetchTemplateList()
    }, [])

    const saveHandler = () => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")
        postHeaders.append("Authorization",localStorage.getItem("token"))

        const sectionData = {
            "name": name,
            "email": email,
            "country": country,
            "phone": phone,
            "domain": `/${domain}`,
            "templateID": templateDropdown,
            "accountID": AccountID,
            "modifiedby": "admin",
        }

        fetch(`http://python.alphas9.com/create/company`, {
            method: 'POST',
            headers: postHeaders,
            body: JSON.stringify(sectionData),
            redirect: "follow"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.code !== 200) {
                alert("Something went wrong")
            } else {
                window.location.href ="/company"
            }
        })
    }

    const templateDropdownHandler = eve => {
        setTemplateDropdown(eve.target.value)
    }

    const accountDropdownHandler = eve => {
        setAccountID(eve.target.value)
    }

    return (
        <section className="company">
            <div className="space-outer">
                <div className="space-inner">
                    {/* <form> */}
                        <h3>Select / Create Company</h3>
                        <div className="space-button">
                            {
                                companyData && companyData.map((data, idx) => (
                                    <Link key={idx} to={`${data.ID}/admin/whyus`} className="space-button-selector">
                                        <p>{data.Name}</p>
                                    </Link>
                                ))
                            }
                            <div className="space-button-selector" style={{background: "orangered"}} onClick={() => setModalActive(prev => !prev)}>
                                <p>Add New</p>
                            </div>
                        </div>
                        
                        {
                            isModalActive ? (
                                <div className="modal">
                                    <p>Name:</p>
                                    <Input value={name} setValue={setName} />
                                    <p>Email:</p>
                                    <Input value={email} setValue={setEmail} />
                                    <p>Country:</p>
                                    <Input value={country} setValue={setCountry} />
                                    <p>Phone:</p>
                                    <Input value={phone} setValue={setPhone} />
                                    <p>Domain:</p>
                                    <div className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <p disabled style={{height: "31px", width: "20px", textAlign: "center", fontSize: "1.7rem", background: "#eee", borderRadius: "5px"}} >/</p><Input value={domain} setValue={setDomain} />
                                    </div>
                                    <p>Template ID:</p>
                                    <Dropdown dropDownList={templateList} value={templateDropdown} setValue={templateDropdownHandler} />
                                    <p>Accound ID:</p>
                                    <Dropdown dropDownList={accoundList} value={AccountID} setValue={accountDropdownHandler} />
                                    <p>Modified by:</p>
                                    <Input value="admin" disabled />
                                    <button className="btn btn--primary" onClick={saveHandler}>Add</button>
                                    <button className="btn btn--danger" onClick={() => setModalActive(false)}>Cancel</button>
                                </div>
                            ) : null
                        }
                        
                    {/* </form> */}
                </div>
            </div>
        </section>
    )
}

export default Company
