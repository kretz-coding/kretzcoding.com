import "./button.css";

export default function Button({classes, urlLink, text}) {
    return (
        <a className={classes} href={urlLink}>{text}</a>
    );
}