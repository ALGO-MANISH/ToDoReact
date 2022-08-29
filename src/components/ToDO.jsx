import ToDo from '../components/image/todo.svg';
import "../App.css"
import { useState } from 'react';



const ToDO = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItems = () => {

        if (!inputData) {

        } else {

            setItems([...items, inputData]);
            setInputData("");
        }

    }

    const deleteItem = (id) => {
        const updateData = items.filter((elem, ind) => {
            return ind != id;
        });
        setItems(updateData);
    }

    const deleteAll = () => {
        setItems([]);
    }


    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={ToDo} alt="image" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder='✍ Add items...'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)

                            }

                        />
                        <i className="fa fa-plus add-btn" title='Add Item' onClick={addItems} ></i>
                    </div>

                    <div className="showItems">

                        {
                            items.map((elem, ind) => {

                                return (
                                    <div className='eachItem' key={ind}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(ind)} ></i>

                                    </div>
                                );
                            })
                        }

                    </div>

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={deleteAll}><span>Check List</span></button>
                    </div>


                </div>
            </div>
        </>
    );


}

export default ToDO;
