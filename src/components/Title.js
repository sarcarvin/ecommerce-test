import React from "react";
import { ProductConsumer } from "../context";
export default function Title({ name, title,props }) {
    return (
   <ProductConsumer>
        {value => {
            const sizeFilterList= [
                'XS',
                'S',
                'M',
                'L',
                'XL'
              ];
  return (
    <div className="row">
      <div className="col-12 mx-auto text-center">
        <label className="topbar">
          {name} <span className="text-blue"><span class="spacing">{title}</span></span>
          <label class="filter-container">
            <select
              onChange
              ={(event) => {
                value.handleFilter(event.target.value)}}>
                    <option value="">Filter By Size</option>
                    {sizeFilterList.map((x, index) => <option value={x} >{x}</option>)}
                </select>
        </label>
        </label>
      
      </div>
    </div>
  );
}
} 
</ProductConsumer>
    );
}