import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'

const SocialMedia = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [facebook, setFacebook] = useState(data?.value?.facebook[0])
    const [instagram, setInstagram] = useState(data?.value?.instagram[0])
    const [twitter, setTwitter] = useState(data?.value?.twitter[0])
    const [linkedin, setLinkedin] = useState(data?.value?.linkdin[0])
    const [youtube, setYoutube] = useState(data?.value?.youtube[0])

    const saveHandler = () => {
    
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        const sectionData = {
            "facebook": JSON.stringify([facebook]),
            "instagram": JSON.stringify([instagram]),
            "linkdin": JSON.stringify([linkedin]),
            "twitter": JSON.stringify([twitter]),
            "youtube": JSON.stringify([youtube])
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
                            <p>Facebook:</p>
                            <Input value={facebook} setValue={setFacebook} />
                            <p>Instagram:</p>
                            <Input value={instagram} setValue={setInstagram} />
                            <p>Twitter:</p>
                            <Input value={twitter} setValue={setTwitter} />
                            <p>Linkedin:</p>
                            <Input value={linkedin} setValue={setLinkedin} />
                            <p>Youtube:</p>
                            <Input value={youtube} setValue={setYoutube} />
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

export default SocialMedia;