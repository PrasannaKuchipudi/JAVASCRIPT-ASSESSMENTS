//20. Implement a React component that displays a list of items with virtualization.
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      {items[index]}
    </div>
  );

  return (
    <List
      height={400}  // Height of the list container
      itemCount={items.length}  // Number of items in the list
      itemSize={35}  // Height of each item
      width={300}  // Width of the list container
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
