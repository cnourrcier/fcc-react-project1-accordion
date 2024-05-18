import { useState } from 'react';
import './styles.css';
import data from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multipleSelectedEnabled, setMultipleSelectedEnabled] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingle(id) {
        setSelected(id === selected ? null : id);
    }

    function handleMultiple(id) {
        let cpyMultiple = [...multiple];
        const index = cpyMultiple.indexOf(id);
        if (index !== -1) cpyMultiple.splice(index, 1)
        else cpyMultiple.push(id);
        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);

    return (
        <div className='wrapper'>
            <button onClick={() => setMultipleSelectedEnabled(!multipleSelectedEnabled)} >Enable Multiple Selections</button>
            <div className='items'>
                {
                    data.map((dataItem) => (
                        <>
                            <div onClick={
                                multipleSelectedEnabled
                                    ? () => handleMultiple(dataItem.id)
                                    : () => handleSingle(dataItem.id)
                            }
                                className='dataItem'>
                                <div className='question'>{dataItem.question}
                                    <span>+</span>
                                </div>
                                {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div>{dataItem.answer}</div> : null}
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion;