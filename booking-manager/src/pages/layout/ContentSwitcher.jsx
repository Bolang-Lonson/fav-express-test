import React, { useState } from 'react'

const ContentSwitcher = ({className, children}) => {
    const [currentComponent, setCurrentComponent] = useState(children[1]);

    const handleComponentChange = (index) => {
        setCurrentComponent(children[index]);
    };

    return (
        <div className='w-full h-full'>
            {currentComponent}
        </div>
    );
}

export default ContentSwitcher;
