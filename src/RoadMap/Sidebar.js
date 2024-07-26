import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function MainSidebar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card">
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="mr-2" />
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
        </div>
    );
}
