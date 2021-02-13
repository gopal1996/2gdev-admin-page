import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'

export const SocialMedia = () => {
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [youtube, setYoutube] = useState("")

    const saveHandler = () => {
        console.log(facebook)
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
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
