import React from 'react'

const List = ({spons}) => {
  return (
    <>
        {spons.map((s) => {
            const {id,name,img} = s;
            return (
                <article key = {id} className='person'>
                    <img src={img} alt={name} />
                    <div>
                        <h4>{name}</h4>
                    </div>
                </article>
            );
        })}
    </>
  );
};

export default List