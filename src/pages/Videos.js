import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input } from '../components/Input'

const Videos = ({data}) => {
    const [id, setId] = useState(data?.SID)
    const [heading, setHeading] = useState(data?.value?.header[0])
    const [video, setVideo] = useState(data?.value?.videos[0])

    const saveHandler = () => {
        const postHeaders = new Headers()
        postHeaders.append("Content-Type","application/json")

        const sectionData = {
            "heading": JSON.stringify([heading]),
            "videos": JSON.stringify([video]),
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
                            <p>Video Url:</p>
                            <Input value={video} setValue={setVideo} />
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

export default Videos
