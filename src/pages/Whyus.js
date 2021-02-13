import React, {useState} from 'react'
import { DangerButton } from '../components/Button'
import { ImageUpload, Input, List, TextArea } from '../components/Input'

export const Whyus = () => {
    const [heading, setHeading] = useState("")
    const [description, setDescription] = useState("")
    const [listvalue, setListvalue] = useState("")
    const [list, setList] = useState([])

    const saveHandler = () => {
        console.log(heading, description, list)
    }


    const addList = () => {
        setList(oldList => [...oldList, {id: oldList.length,listvalue}])
        setListvalue("")
    }

    const removeItem = (evt) => {
        let closeTarget = evt.target.dataset["idx"];
        if(closeTarget) {
            let newList = list.filter(item => item.id !== Number(closeTarget))
            setList(newList)
        }
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__image">
                        <ImageUpload />
                    </div>
                    <div className="about__content">
                        <div className="about__text">
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
                            <p>Description:</p>
                            <TextArea value={description} setValue={setDescription} />
                            <p>List:</p>
                            <List value={listvalue} setValue={setListvalue} list={list} addList={addList} removeItem={removeItem}/>
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
