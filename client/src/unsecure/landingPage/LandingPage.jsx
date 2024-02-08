//React imports
import React, { useEffect } from "react"

//component imports
import FullWidthLayout from "../../layout/simple/FullWidthLayout";
import SlidingAlbumsList from "./components/SlidingAlbumsList";
import AboutUs from "./components/AboutUs";
import ContributorSlider from "./components/ContributorSlider";
import Contact from "./components/Contact"

import { colors } from "../../style/colors";

export default function LandingPage() {

    useEffect(() => { window.scrollTo(0, 0); })

    return (
        <>
            <FullWidthLayout display={<AboutUs />} bgcolor={colors().primary} />
            <FullWidthLayout display={<ContributorSlider />} />
            <FullWidthLayout display={<SlidingAlbumsList />} />
            <FullWidthLayout display={<Contact />} bgcolor={colors().primary} />
        </>)
}