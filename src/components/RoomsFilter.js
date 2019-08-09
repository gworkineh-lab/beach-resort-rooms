import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

//get all uniqe values
const getUniqe = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    // get uniqe types
    let types = getUniqe(rooms, 'type');
    // add all 
    types = ['all', ...types];
    // map to jsx
    types = types.map((type, index) => {
        return <option value={type} key={index}>{type}</option>
    });
    //get guest number
    let people = getUniqe(rooms, "capacity");
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guest number*/}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guest number */}
                {/*price start */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice}
                        max={maxPrice} id="price" value={price}
                        onChange={handleChange} className="form-control" />
                </div>
                {/*price end*/}
                {/*size start */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                            value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size"
                            value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/*size end */}
                {/*extras start */}
                <div className="form-control">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                            checkbox={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                            checkbox={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*extras end */}
            </form>
        </section>
    );
}
