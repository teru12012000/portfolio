import type { NextPage } from "next";
import head from "./styles/header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import HeaderLink from "./HeaderLink";
import Back from "./Back";
import { FC } from "react";
import Hambargar from "./Hambargar";
import linkname from "../data/linkname";
import headerlinkName from "../data/headerlink";

type Props = {
  open: string;
};

const Header: FC<Props> = ({ open }) => {
  return (
    <div className={head.container}>
      <header className={head.header}>
        <div>
          <h1 style={{}}>TERUSI</h1>
        </div>

        <div>
          <HeaderLink link={headerlinkName} />
        </div>
      </header>
      <div
        style={{
          display: open,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Back />
        </div>
        <Hambargar linkname={linkname} />
      </div>
    </div>
  );
};

export default Header;
