import React from 'react';

import ColllectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <ColllectionItem key={id} {...otherItemProps} />
                    ))
            }

        </div>
    </div>
)

export default CollectionPreview; 