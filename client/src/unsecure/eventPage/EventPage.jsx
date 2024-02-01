import React, { useState, useEffect } from "react"

import './css/eventPage.css';

export default function EventPage() {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvent({ title: 'Káosz 20', time: '2' })
    }, [])

    return <div>the event page</div>
}