import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";






export default function DragAndDrop(){
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [ {id: "item-0", content: "item 0"},
  //     {id: "item-1", content: "item 1"}
  //     ,{id: "item-2", content: "item 2"}
  //     ,{id: "item-3", content: "item 3"}
  //     ,{id: "item-4", content: "item 4"}]
  //   };

  //   this.onDragEnd = this.onDragEnd.bind(this);
  // }

  const [items, setItems] = React.useState([ {id: "item-0", content: "item 0"},
  {id: "item-1", content: "item 1"}
  ,{id: "item-2", content: "item 2"}
  ,{id: "item-3", content: "item 3"}
  ,{id: "item-4", content: "item 4"}])


 function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...items]
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setItems(itemF)
  }
  
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}

                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
}

