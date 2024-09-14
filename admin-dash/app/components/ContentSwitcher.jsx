"use client"

import React, { useState, useEffect } from 'react';

const ContentSwitcher = ({className, children, viewIndex}) => {
    const [currentComponent, setCurrentComponent] = useState(children[viewIndex]);

    // triggering render update
    useEffect(() => setCurrentComponent(children[viewIndex]), [viewIndex]);
    return (
        <div className={className} style={{transition: 'all ease 0.5s'}}>
            {currentComponent}
        </div>
    );
};

export default ContentSwitcher;