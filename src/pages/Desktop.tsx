import { FunctionComponent } from "react";
import FeatureRowOne from "../components/FeatureRowOne";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <header className={styles.pricingOptionsWrapper}>
        <div className={styles.pricingOptions}>
          <div className={styles.monthlyYearly}>
            <a className={styles.monthly}>Monthly</a>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.feature} />
          </div>
          <div className={styles.monthlyYearly1}>
            <a className={styles.yearly}>Yearly</a>
          </div>
        </div>
      </header>
      <main className={styles.features}>
        <FeatureRowOne
          basic="Basic"
          iKEAFinanceLoansSavingsSt="$4.50"
          iconlyBoldTickSquare="/iconlyboldticksquare.svg"
          iconlyBoldTickSquare1="/iconlyboldticksquare-1.svg"
          iconlyBoldTickSquare2="/iconlyboldticksquare-2.svg"
          iconlyBoldTickSquare3="/iconlyboldticksquare-3.svg"
          iconlyBoldTickSquare4="/iconlyboldticksquare-4.svg"
          iconlyBoldTickSquare5="/iconlyboldticksquare-5.svg"
          iconlyBoldTickSquare6="/iconlyboldticksquare-6.svg"
        />
        <FeatureRowOne
          basic="Premium"
          iKEAFinanceLoansSavingsSt="$9.50"
          iconlyBoldTickSquare="/iconlyboldticksquare-7.svg"
          iconlyBoldTickSquare1="/iconlyboldticksquare-8.svg"
          iconlyBoldTickSquare2="/iconlyboldticksquare-9.svg"
          iconlyBoldTickSquare3="/iconlyboldticksquare-10.svg"
          iconlyBoldTickSquare4="/iconlyboldticksquare-11.svg"
          iconlyBoldTickSquare5="/iconlyboldticksquare-12.svg"
          iconlyBoldTickSquare6="/iconlyboldticksquare-13.svg"
          iconlyBoldTickSquarePadding="var(--padding-29xl-9) var(--padding-44xl) var(--padding-21xl-9) 37px"
          creditIconsTwoPadding="0px 46px"
          iconlyBoldTickSquarePadding1="0px var(--padding-mini) 0px 17px"
          creditsDisplay="inline-block"
          creditsMinWidth="124px"
          serverIconsOneDebugCommit="unset"
          serverIconsTwoDebugCommit="unset"
          priorityIconsTwoDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit="unset"
          storageIconsTwoDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit1="unset"
          buttonsDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit2="unset"
          frameDivDebugCommit="unset"
          rectangleDivDebugCommit="unset"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propDebugCommit2="unset"
          propDebugCommit3="unset"
          propPadding="0px var(--padding-mini)"
        />
        <FeatureRowOne
          basic="Enterprise"
          iKEAFinanceLoansSavingsSt="$14.50"
          iconlyBoldTickSquare="/iconlyboldticksquare-14.svg"
          iconlyBoldTickSquare1="/iconlyboldticksquare-15.svg"
          iconlyBoldTickSquare2="/iconlyboldticksquare1.svg"
          iconlyBoldTickSquare3="/iconlyboldticksquare2.svg"
          iconlyBoldTickSquare4="/iconlyboldticksquare3.svg"
          iconlyBoldTickSquare5="/iconlyboldticksquare4.svg"
          iconlyBoldTickSquare6="/iconlyboldticksquare5.svg"
          iconlyBoldTickSquarePadding="var(--padding-29xl-9) 58px var(--padding-21xl-9) var(--padding-22xl)"
          creditIconsTwoPadding="0px var(--padding-15xl)"
          iconlyBoldTickSquarePadding1="0px var(--padding-xl) 0px var(--padding-lgi)"
          creditsDisplay="unset"
          creditsMinWidth="unset"
          serverIconsOneDebugCommit="unset"
          serverIconsTwoDebugCommit="unset"
          priorityIconsTwoDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit="unset"
          storageIconsTwoDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit1="unset"
          buttonsDebugCommit="unset"
          iconlyBoldTickSquareDebugCommit2="unset"
          frameDivDebugCommit="unset"
          rectangleDivDebugCommit="unset"
          propDebugCommit="unset"
          propDebugCommit1="unset"
          propDebugCommit2="unset"
          propDebugCommit3="unset"
          propPadding="0px var(--padding-lgi)"
        />
      </main>
    </div>
  );
};

export default Desktop;
