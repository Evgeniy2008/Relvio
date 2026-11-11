import ButtonProps from "./button.types"

export default function Button({ buttonType, text, func, icon: Icon } : ButtonProps) {
    const bgColor = buttonType == "white" ? "#fff" : "#4c50ff";
    const textColor = buttonType == "white" ? "#171717" : "#fff";
    const borderColor = buttonType === "white" ? "#cdcdcd" : "#4c50ff";

    return <button style={{
            backgroundColor: bgColor,
            color: textColor,
            borderColor: borderColor
        }}
        className="flex justify-center items-center gap-1 px-10 h-[50px] cursor-pointer font-bold border-2 rounded-xl"
        onClick={func}>{ text }{ Icon && <Icon size={20} /> }</button>
}