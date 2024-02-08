//React imports
import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

//dunmmy data imports
import { events } from "../../dummyData/events";
import { colors } from "../../style/colors";

//component imports
import FullWidthLayout from "../../layout/simple/FullWidthLayout";
import GridLayout from "../../layout/grid/GridLayout";
import Countdown from "./components/Countdown";
import PastEvent from "./components/PastEvent";
import Description from "./components/Description";
import Lineup from "./components/Lineup";
import Tickets from "./components/Tickets";

export default function EventPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const decodedPath = decodeURIComponent(location.pathname).split('/')[2];
        setEvent(events().filter(e => e.title === decodedPath)[0])
    }, [location.pathname])

    return (
        event
            ?
            event.dateEnd < new Date()
                ?
                <>
                    <PastEvent event={event} />
                </>
                :
                <>
                <FullWidthLayout display={<Description event={event} />} />
                <FullWidthLayout display={<Lineup event={event}/>} />
                <GridLayout displayFeed={<Tickets event={event}/>}/>
                <FullWidthLayout bgcolor={colors().primary} display={<Countdown event={event} />} />
                </>
            :
            <div>loading</div>)
}