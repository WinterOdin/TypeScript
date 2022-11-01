type Dimensions = "block" | "inline";
type MarginProperty = `margin-${Dimensions}`;

type MarginUnit = "px" | "vh" | "vw";
type MarginValue = `${number}${MarginUnit}`;
type MarginDeclaration = [MarginProperty, MarginValue]

const margin: MarginDeclaration = ["margin-block", "16px"]