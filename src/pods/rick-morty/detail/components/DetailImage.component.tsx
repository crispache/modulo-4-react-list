import React from "react";

interface Props {
  url: string;
}

export const DetailImage: React.FC<Props> = (props) => {
  const { url } = props;
  return <img src={url} alt="Foto del personaje" height={160} width={160} style={{ borderRadius: 3}} />;
};
