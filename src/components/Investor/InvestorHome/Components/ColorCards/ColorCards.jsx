import React, { useState } from "react";
import CoinIcon from "../../../../../Images/investorView/Rectangle.png";
import ColorCard from "../../../InvestorGlobalCards/ColoredCards/ColorCard";
import { useSelector } from "react-redux";
import { getColorCardData } from "../../../../../Store/features/user/userSlice";

export default function ColorCards() {
  // Fetch from store
  const colorCard = useSelector(getColorCardData);
  const companyFounderId = useSelector(
    (state) => state.user.loggedInUser.founderId
  );
  const loggedInUserId = useSelector((state) => state.user.loggedInUser._id);

  // State for color card
  const [colorCardData, setColorCardData] = useState(colorCard);
  const [field, setField] = useState("last_round_investment");

  // handle amount change
  const handleAmountChange = (currentfield, updatedAmount) => {
    console.log(field);
    console.log(currentfield);
    setField(currentfield);
    setColorCardData((prevData) => ({
      ...prevData,
      [currentfield]: updatedAmount,
    }));
  };

  return (
    <div className="col-12 mt-2">
      {colorCardData && (
        <div className="card_holder">
          <ColorCard
            color="white"
            background="#BB98FF"
            text="Last round investment"
            image={CoinIcon}
            amount={colorCardData.last_round_investment}
            onAmountChange={(amount) =>
              handleAmountChange("last_round_investment", amount)
            }
            field={field}
            colorCardData={colorCardData}
            isOneLink={loggedInUserId !== companyFounderId}
          />
          <ColorCard
            color="white"
            background="#DAC191"
            text="Total Investment"
            image={CoinIcon}
            amount={colorCardData.total_investment}
            onAmountChange={(amount) =>
              handleAmountChange("total_investment", amount)
            }
            field={field}
            colorCardData={colorCardData}
            isOneLink={loggedInUserId !== companyFounderId}
          />
          <ColorCard
            color="white"
            background="#DCDCDC"
            text="No.of Investers"
            image={CoinIcon}
            amount={colorCardData.no_of_investers}
            onAmountChange={(amount) =>
              handleAmountChange("no_of_investers", amount)
            }
            field={field}
            colorCardData={colorCardData}
            noRupee={true}
            isOneLink={loggedInUserId !== companyFounderId}
          />
          <ColorCard
            color="white"
            background="#2B2B2B"
            text="Fund ask"
            image={CoinIcon}
            amount={colorCardData.fund_ask}
            onAmountChange={(amount) => handleAmountChange("fund_ask", amount)}
            field={field}
            colorCardData={colorCardData}
            isOneLink={loggedInUserId !== companyFounderId}
          />
          <ColorCard
            color="white"
            background="#FF7373"
            text="Valuation"
            image={CoinIcon}
            amount={colorCardData.valuation}
            onAmountChange={(amount) => handleAmountChange("valuation", amount)}
            field={field}
            colorCardData={colorCardData}
            isOneLink={loggedInUserId !== companyFounderId}
          />
          <ColorCard
            color="white"
            background="#9198DA"
            text="Raised funds"
            image={CoinIcon}
            amount={colorCardData.raised_funds}
            onAmountChange={(amount) =>
              handleAmountChange("raised_funds", amount)
            }
            field={field}
            colorCardData={colorCardData}
            isOneLink={loggedInUserId !== companyFounderId}
          />
        </div>
      )}
    </div>
  );
}
