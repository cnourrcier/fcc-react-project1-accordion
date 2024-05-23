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

    function handleEnableMultiple() {
        setMultipleSelectedEnabled(!multipleSelectedEnabled)
        if (!multipleSelectedEnabled) {
            setMultiple([]);
        }
        if (selected) {
            setMultiple([selected]);
            setSelected(null)
        }
    }

    function handleMultiple(id) {
        let cpyMultiple = [...multiple];
        const index = cpyMultiple.indexOf(id);
        if (index !== -1) cpyMultiple.splice(index, 1)
        else cpyMultiple.push(id);
        setMultiple(cpyMultiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => handleEnableMultiple()} >
                Enable {multipleSelectedEnabled ? 'Single Selection' : 'Multiple Selections'}
            </button>
            <h2>{multipleSelectedEnabled ? 'Multiple Selection' : 'Single Selection'} Mode</h2>
            <div className='items'>
                {
                    data.map((dataItem) => (
                        <div
                            key={dataItem.id}
                            className='dataItem'
                            onClick={
                                multipleSelectedEnabled
                                    ? () => handleMultiple(dataItem.id)
                                    : () => handleSingle(dataItem.id)
                            }
                        >
                            <div className='question'>{dataItem.question}
                                <span>+</span>
                            </div>
                            {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='answer'>{dataItem.answer}</div> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion;