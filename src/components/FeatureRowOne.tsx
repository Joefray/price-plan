import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeatureRowOne.module.css";

export type FeatureRowOneType = {
  className?: string;
  basic?: string;
  iKEAFinanceLoansSavingsSt?: string;
  iconlyBoldTickSquare?: string;
  iconlyBoldTickSquare1?: string;
  iconlyBoldTickSquare2?: string;
  iconlyBoldTickSquare3?: string;
  iconlyBoldTickSquare4?: string;
  iconlyBoldTickSquare5?: string;
  iconlyBoldTickSquare6?: string;

  /** Style props */
  iconlyBoldTickSquarePadding?: CSSProperties["padding"];
  creditIconsTwoPadding?: CSSProperties["padding"];
  iconlyBoldTickSquarePadding1?: CSSProperties["padding"];
  creditsDisplay?: CSSProperties["display"];
  creditsMinWidth?: CSSProperties["minWidth"];
  serverIconsOneDebugCommit?: CSSProperties["debugCommit"];
  serverIconsTwoDebugCommit?: CSSProperties["debugCommit"];
  priorityIconsTwoDebugCommit?: CSSProperties["debugCommit"];
  iconlyBoldTickSquareDebugCommit?: CSSProperties["debugCommit"];
  storageIconsTwoDebugCommit?: CSSProperties["debugCommit"];
  iconlyBoldTickSquareDebugCommit1?: CSSProperties["debugCommit"];
  buttonsDebugCommit?: CSSProperties["debugCommit"];
  iconlyBoldTickSquareDebugCommit2?: CSSProperties["debugCommit"];
  frameDivDebugCommit?: CSSProperties["debugCommit"];
  rectangleDivDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propDebugCommit2?: CSSProperties["debugCommit"];
  propDebugCommit3?: CSSProperties["debugCommit"];
  propPadding?: CSSProperties["padding"];
};

const FeatureRowOne: FunctionComponent<FeatureRowOneType> = ({
  className = "",
  basic,
  iKEAFinanceLoansSavingsSt,
  iconlyBoldTickSquare,
  iconlyBoldTickSquare1,
  iconlyBoldTickSquare2,
  iconlyBoldTickSquare3,
  iconlyBoldTickSquare4,
  iconlyBoldTickSquare5,
  iconlyBoldTickSquare6,
  iconlyBoldTickSquarePadding,
  creditIconsTwoPadding,
  iconlyBoldTickSquarePadding1,
  creditsDisplay,
  creditsMinWidth,
  serverIconsOneDebugCommit,
  serverIconsTwoDebugCommit,
  priorityIconsTwoDebugCommit,
  iconlyBoldTickSquareDebugCommit,
  storageIconsTwoDebugCommit,
  iconlyBoldTickSquareDebugCommit1,
  buttonsDebugCommit,
  iconlyBoldTickSquareDebugCommit2,
  frameDivDebugCommit,
  rectangleDivDebugCommit,
  propDebugCommit,
  propDebugCommit1,
  propDebugCommit2,
  propDebugCommit3,
  propPadding,
}) => {
  const featureRowOneStyle: CSSProperties = useMemo(() => {
    return {
      padding: iconlyBoldTickSquarePadding,
    };
  }, [iconlyBoldTickSquarePadding]);

  const featureRowThreeStyle: CSSProperties = useMemo(() => {
    return {
      padding: creditIconsTwoPadding,
    };
  }, [creditIconsTwoPadding]);

  const featureRowFiveStyle: CSSProperties = useMemo(() => {
    return {
      padding: iconlyBoldTickSquarePadding1,
    };
  }, [iconlyBoldTickSquarePadding1]);

  const basicStyle: CSSProperties = useMemo(() => {
    return {
      display: creditsDisplay,
      minWidth: creditsMinWidth,
    };
  }, [creditsDisplay, creditsMinWidth]);

  const iconlyBoldTickSquareStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: serverIconsOneDebugCommit,
    };
  }, [serverIconsOneDebugCommit]);

  const imageGenerationsStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: serverIconsTwoDebugCommit,
    };
  }, [serverIconsTwoDebugCommit]);

  const iconlyBoldTickSquare1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: priorityIconsTwoDebugCommit,
    };
  }, [priorityIconsTwoDebugCommit]);

  const creditsStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: iconlyBoldTickSquareDebugCommit,
    };
  }, [iconlyBoldTickSquareDebugCommit]);

  const iconlyBoldTickSquare2Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: storageIconsTwoDebugCommit,
    };
  }, [storageIconsTwoDebugCommit]);

  const monthly100CreditsStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: iconlyBoldTickSquareDebugCommit1,
    };
  }, [iconlyBoldTickSquareDebugCommit1]);

  const iconlyBoldTickSquare3Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: buttonsDebugCommit,
    };
  }, [buttonsDebugCommit]);

  const customerSupportStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: iconlyBoldTickSquareDebugCommit2,
    };
  }, [iconlyBoldTickSquareDebugCommit2]);

  const iconlyBoldTickSquare4Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: frameDivDebugCommit,
    };
  }, [frameDivDebugCommit]);

  const dedicatedServerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: rectangleDivDebugCommit,
    };
  }, [rectangleDivDebugCommit]);

  const iconlyBoldTickSquare5Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const priorityGenerationsStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const iconlyBoldTickSquare6Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const gBCloudStorageStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.featureRowOne, className].join(" ")}
      style={featureRowOneStyle}
    >
      <div className={styles.featureRowOneChild} />
      <div className={styles.featureRowTwo}>
        <div className={styles.featureRowThree} style={featureRowThreeStyle}>
          <div className={styles.featureRowFour}>
            <div className={styles.featureRowFive} style={featureRowFiveStyle}>
              <h3 className={styles.basic} style={basicStyle}>
                {basic}
              </h3>
            </div>
            <b className={styles.ikeaFinanceLoans}>
              {iKEAFinanceLoansSavingsSt}
            </b>
          </div>
        </div>
        <div className={styles.featureIconsOne}>
          <div className={styles.featureIconsTwo}>
            <div className={styles.featureIconsThree}>
              <img
                className={styles.iconlyboldtickSquare}
                loading="lazy"
                alt=""
                src={iconlyBoldTickSquare}
                style={iconlyBoldTickSquareStyle}
              />
            </div>
            <div
              className={styles.imageGenerations}
              style={imageGenerationsStyle}
            >
              50 Image generations
            </div>
          </div>
          <div className={styles.creditIconsOne}>
            <div className={styles.creditIconsTwo}>
              <div className={styles.creditIconsThree}>
                <img
                  className={styles.iconlyboldtickSquare1}
                  loading="lazy"
                  alt=""
                  src={iconlyBoldTickSquare1}
                  style={iconlyBoldTickSquare1Style}
                />
              </div>
              <div
                className={styles.credits}
                style={creditsStyle}
              >{`500 Credits `}</div>
            </div>
            <div className={styles.supportIconsOne}>
              <div className={styles.supportIconsTwo}>
                <img
                  className={styles.iconlyboldtickSquare2}
                  loading="lazy"
                  alt=""
                  src={iconlyBoldTickSquare2}
                  style={iconlyBoldTickSquare2Style}
                />
              </div>
              <div
                className={styles.monthly100Credits}
                style={monthly100CreditsStyle}
              >
                Monthly 100 Credits Free
              </div>
            </div>
          </div>
          <div className={styles.serverIconsOne}>
            <div className={styles.serverIconsTwo}>
              <img
                className={styles.iconlyboldtickSquare3}
                loading="lazy"
                alt=""
                src={iconlyBoldTickSquare3}
                style={iconlyBoldTickSquare3Style}
              />
            </div>
            <div
              className={styles.customerSupport}
              style={customerSupportStyle}
            >
              Customer Support
            </div>
          </div>
          <div className={styles.priorityIconsOne}>
            <div className={styles.priorityIconsTwo}>
              <img
                className={styles.iconlyboldtickSquare4}
                loading="lazy"
                alt=""
                src={iconlyBoldTickSquare4}
                style={iconlyBoldTickSquare4Style}
              />
            </div>
            <div
              className={styles.dedicatedServer}
              style={dedicatedServerStyle}
            >
              Dedicated Server
            </div>
          </div>
          <div className={styles.storageIconsOne}>
            <div className={styles.storageIconsTwo}>
              <img
                className={styles.iconlyboldtickSquare5}
                loading="lazy"
                alt=""
                src={iconlyBoldTickSquare5}
                style={iconlyBoldTickSquare5Style}
              />
            </div>
            <div
              className={styles.priorityGenerations}
              style={priorityGenerationsStyle}
            >
              Priority Generations
            </div>
          </div>
          <div className={styles.buttonRow}>
            <div className={styles.buttons}>
              <img
                className={styles.iconlyboldtickSquare6}
                loading="lazy"
                alt=""
                src={iconlyBoldTickSquare6}
                style={iconlyBoldTickSquare6Style}
              />
            </div>
            <div className={styles.gbCloudStorage} style={gBCloudStorageStyle}>
              50GB Cloud Storage
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featureRowOneInner} style={frameDivStyle}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRowOne;
