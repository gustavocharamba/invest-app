import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer, MenuItem } from "./dashboardMenuStyled";

import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiWalletThin } from "react-icons/pi";
import { TbReceiptBitcoin } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";

const DashboardMenu = () => {
    return (
        <MenuContainer>
            <MenuItem>
                <RxDashboard/>
                <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <TbBrandGoogleAnalytics/>
                <Link to="/analytics">Analytics</Link>
            </MenuItem>
            <MenuItem>
                <PiWalletThin/>
                <Link to="/wallet">Wallet</Link>
            </MenuItem>
            <MenuItem>
                <TbReceiptBitcoin/>
                <Link to="/crypto">Crypto</Link>
            </MenuItem>
            <MenuItem>
                <RiStockLine/>
                <Link to="/stocks">Stocks</Link>
            </MenuItem>
        </MenuContainer>
    );
};

export default DashboardMenu;
