import React, { useState, useEffect } from "react"

//component imports
import GridLayout from "../../layout/grid/GridLayout";
import FullWidthLayout from "../../layout/simple/FullWidthLayout";
import SlidingAlbumsList from "./components/SlidingAlbumsList";
import AboutUs from "./components/AboutUs";
import ContributoSlider from "./components/ContributorSlider";
import Contact from "./components/Contact"

export default function Home() {

    return (
        <>
            <FullWidthLayout display={<AboutUs />} bgcolor={'primary.main'} />
            <FullWidthLayout display={<ContributoSlider />} />
            <FullWidthLayout display={<SlidingAlbumsList />} />
            <FullWidthLayout display={<Contact />} bgcolor={'primary.main'} />
        </>)
}