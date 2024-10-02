'use client'

import React from "react";

interface ViewUserButtonsProps {
    userId: number
}

const ViewUserButtons: React.FC<ViewUserButtonsProps> = ({userId}) => {
    const handleClick = () => alert(`user id: ${userId}`);
    return (
        <>
            <button onClick={handleClick}>LIhat User</button>

        </>

    );
};

export default ViewUserButtons