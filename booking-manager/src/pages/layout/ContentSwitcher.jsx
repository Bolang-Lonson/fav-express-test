import React, { useState } from 'react'

const ContentSwitcher = ({children}) => {
    const [currentComponent, setCurrentComponent] = useState(children[0]);

    const handleComponentChange = (index) => {
        setCurrentComponent(children[index]);
    };

    return (
        <div>
            {currentComponent}
        </div>
    );
}

export default ContentSwitcher;
