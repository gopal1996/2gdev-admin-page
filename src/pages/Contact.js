import React, {useState} from 'react'

import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'
import { BASE_URL } from '../data/env'

const Contact = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [description, setDescription] = useState(data?.value?.desc[0])
    const [phone, setPhone] = useState(data?.value?.phone[0])
    const [email, setEmail] = useState(data?.value?.email[0])
    const [whatsapp, setWhatsapp] = useState(data?.value?.whatsapp[0])
    const [address, setAddress] = useState(data?.value?.maplocation[0])
    const [map, setMap] = useState(data?.value?.mapurl[0])

    const saveHandler = () => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")
        postHeaders.append("Authorization",localStorage.getItem("token"))

        const sectionData = {
            "desc": JSON.stringify([description]),
            "email": JSON.stringify([email]),
            "maplocation": JSON.stringify([address]),
            "mapurl": JSON.stringify([map]),
            "phone": JSON.stringify([phone]),
            "whatsapp": JSON.stringify([whatsapp])
        }

        fetch(`${BASE_URL}/update/all/${window.location.pathname.split("/")[1]}/${id}/`, {
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
                            <h2>Get In Touch</h2>
                            <hr/>
                            <p>Description</p>
                            <Input value={description} setValue={setDescription} />
                            <p>Phone:</p>
                            <Input value={phone} setValue={setPhone} />
                            <p>Email:</p>
                            <Input value={email} setValue={setEmail} />
                            <p>Whatsapp:</p>
                            <Input value={whatsapp} setValue={setWhatsapp} />
                            <hr/>
                            <h2>Find Us on Map</h2>
                            <p>Address:</p>
                            <Input value={address} setValue={setAddress} />
                            <p>Map:</p>
                            <Input value={map} setValue={setMap} />
                            <hr/>

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

export default Contact
