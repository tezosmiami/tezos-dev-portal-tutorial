import type { token } from "./types";
import BigNumber from "bignumber.js"

export const displayTokenAmount = (amount_: BigNumber | number, token: token): string => {
    let amount = BigNumber.isBigNumber(amount_) ? amount_.toNumber() : amount_;
    switch (token) {
        case "XTZ":
            return (+(amount / 10 ** 6).toFixed(2)).toLocaleString("en-US");
        case "tzBTC":
            if (amount < 100) {
                return "> 0.000001"
            }
            return (+(amount / 10 ** 8).toFixed(8)).toLocaleString("en-US", { maximumSignificantDigits: 8 });
        case "SIRS":
            return (+amount.toFixed(2)).toLocaleString("en-US")
    }
}

export const shortenHash = (hash: string): string =>
  hash ? hash.slice(0, 5) + "..." + hash.slice(-5) : "";