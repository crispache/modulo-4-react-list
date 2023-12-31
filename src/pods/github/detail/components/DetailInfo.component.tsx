import React from "react";
import { Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { MemberDetailEntity } from "../detail.vm";
import { OpenInNew } from "@mui/icons-material";
import { GithubListContext } from "@/core/providers";

interface Props {
  data: Omit<MemberDetailEntity, "avatarUrl" | "bio">;
}

export const DetailInfo: React.FC<Props> = (props) => {
  const { data } = props;
  const { githubListStore } = React.useContext(GithubListContext);
  const { organizationName } = githubListStore;

  const openBrowserTabToShowGithubRepository = (): void => {
    window.open(data.repoUrl);
  };

  return (
    <div className="info">
      <div className="user-name">
        <Typography variant="h5">{data.userName}</Typography>
        <Tooltip placement="top" title="Ver repositorio de Github">
          <IconButton size="small" aria-label="open url repository user" onClick={openBrowserTabToShowGithubRepository}>
            <OpenInNew />
          </IconButton>
        </Tooltip>
      </div>

      <div className="organization-name">
        <Chip label={organizationName} color="primary" variant="outlined" />
      </div>

      <div className="extra-info">
        <Typography variant="body2" color="GrayText">
          Email: {data?.email}
        </Typography>

        <Typography variant="body2" color="GrayText">
          Localización: {data?.location}
        </Typography>
      </div>

      <div className="github-account-info">
        <Chip label={`Repositorios (${data.publicRepos})`} size="small" />
        <Chip label={`Seguidores (${data.followers})`} size="small" />
        <Chip label={`Siguiendo (${data.following})`} size="small" />
      </div>
    </div>
  );
};
