import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer, MenuItem } from "./menuStyled";

import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiWalletThin } from "react-icons/pi";
import { TbReceiptBitcoin } from "react-icons/tb";
import { RiStockLine } from "react-icons/ri";

const Menu = () => {
    return (
        <MenuContainer>
            <MenuItem>
                <div>
                    <RxDashboard/>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </MenuItem>
            <MenuItem>
                <div>
                    <TbBrandGoogleAnalytics/>
                    <Link to="/analytics">Analytics</Link>
                </div>
            </MenuItem>
            <MenuItem>
                <div>
                    <PiWalletThin/>
                    <Link to="/wallet">Wallet</Link>
                </div>
            </MenuItem>
            <MenuItem>
                <div>
                    <TbReceiptBitcoin/>
                    <Link to="/crypto">Crypto</Link>
                </div>
            </MenuItem>
        </MenuContainer>
    );
};

export default Menu;
