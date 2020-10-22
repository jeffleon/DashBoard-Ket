import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

/*Dummie dropdown to display the date*/
const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="item-date">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="ligth" caret>
            Wed, 21 Nov
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Dates</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
        </Dropdown>
    </div>
  );
}

export default DropDown