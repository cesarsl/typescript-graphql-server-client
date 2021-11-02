import React from 'react';

type Props = {
    title: string
};

const Tab: React.FC<Props> = ({ children }) => {
    return <div className="tab-wrapper">{children}</div>
};

export default Tab;