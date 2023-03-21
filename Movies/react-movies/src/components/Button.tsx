export default function Button(props: buttonPrimary) {
    return (
        <button
            className={`btn btn-primary ${props.className}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

interface buttonPrimary {
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    className: string;
    disabled: boolean;
}

Button.defaultProps = {
    type: "button",
    disabled: false,
    className: ""
}
