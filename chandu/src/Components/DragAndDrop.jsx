import React,{useState} from "react";

function DragAndDrop(){
    const[items,setItems] = useState([
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
]);
        const[dropItems,setDropItems] = useState([]);

        const onDragStart = (event,item) => {
            event.dataTransfer.setData('item',JSON.stringify(item));
        };

    const onDrop = (event) =>{
        const item = JSON.parse(event.dataTransfer.getData('item'));
        setItems(items.filter(i => i.id !== item.id));
        setDropItems([...dropItems,item]);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <div className="items">
                <h2>Items</h2>
                {items.map(item => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={(event) => onDragStart(event, item)}
                        className="item"
                    >
                        {item.text}
                    </div>
                ))}
            </div>
            <div
                className="drop-area"
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                <h2>Drop Here</h2>
                {dropItems.map(item => (
                    <div key={item.id} className="item">
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DragAndDrop;