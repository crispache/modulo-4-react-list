
import React from "react";
import { GithubLayout } from "@/layout";
import { Github } from "@/pods";

export const DetailScene: React.FC = () => {
    return(
        <GithubLayout>
            <Github.DetailContainer />
        </GithubLayout>
    )
}