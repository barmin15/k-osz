import { Box, Stack } from "@mui/material";

import Leftbar from "./Leftbar";
import Feed from "./Feed";
import RightBar from "./Rightbar";

export default function GridLayout({displayLeft, displayFeed, displayRight}){

    return (
        <Box>
            <Stack direction='row' justifyContent='space-between'>
                <Leftbar display={displayLeft}/>
                <Feed display={displayFeed}/>
                <RightBar display={displayRight}/>
            </Stack>
        </Box>)
}