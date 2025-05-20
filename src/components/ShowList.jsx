// import React from 'react'

const ShowList = ({stuff, setStuff}) => {

    const finishedTodo = (item) => {
        (item.complete) ? item.complete = false : item.complete = true; 
        setStuff([...stuff])
    }

    const deleteIt = val => {
        setStuff (stuff.filter( item => (item.item !== val)))
    }


    return (
        <ul className="list-group">
            {
                stuff.map( (item, index) =>
                    <li key={index} className="list-group-item list-group-item-info">
                        <input type="checkbox"  onChange={(e) => finishedTodo(item)} />
                        <span className={(item.complete) ? "fade" : "notFade"}>
                            {item.item}
                        </span>
                        <button className="btn btn-danger" onClick={ (e) => deleteIt(item.item)}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
}

export default ShowList