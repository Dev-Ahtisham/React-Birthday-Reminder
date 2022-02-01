import React from 'react';

const List = ({people}) => {
  return (
        <div>
            {people.map((person) => {
                const {id, name, age, image } = person;
                return (
                    <div key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h4 className='gray'>Age: {age}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
