import React,{useState} from 'react'
import { DangerButton } from '../components/Button'
import { Input, List } from '../components/Input'

export const Features = () => {
    const [heading, setHeading] = useState("")
    const [listvalue, setListvalue] = useState("")
    const [list, setList] = useState([])

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

    const saveHandler = () => {
        console.log(heading, list)
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="about__content">
                        <div className="about__text">
                            <p>Heading:</p>
                            <Input value={heading} setValue={setHeading} />
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
