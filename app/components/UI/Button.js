// Components
import Link from "next/link";

const Button = ({ className, url, type, size, children, onClick }) => {
    return (
        <>
            {url ? (
                <Link className={`sec_btn ${className ? className : ""}${size === "sm" ? "sm_btn" : ""}${size === "xs" ? "xs_btn" : ""}`} href={url}>
                    {children}
                </Link>
            ) : (
                <button type={type ? type : "button"} className={`sec_btn ${className ? className : ""}${size === "sm" ? "sm_btn" : ""}${size === "xs" ? "xs_btn" : ""}`} onClick={onClick}>
                    {children}
                </button>
            )}
        </>
    );
};

export default Button;
