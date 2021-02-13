import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { ImageUpload, Input, TextArea } from '../components/Input'

export const Banner = () => {
    const [heading, setHeading] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    const saveHandler = () => {
        console.log(heading)
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>Banner Image</p>
                            <div className="about__image">
                                <ImageUpload />
                            </div>
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Description:</p>
                            <TextArea value={description} setValue={setDescription} />
                            <p>Name:</p>
                            <Input value={name} setValue={setName} />
                            <p>Role:</p>
                            <Input value={role} setValue={setRole} />
                            <p>Profile</p>
                            <div className="about__image">
                                <ImageUpload />
                            </div>
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
